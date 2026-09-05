import path from 'path';

// Node.js 22 내장 SQLite 모듈 동적 로드 (TypeScript 20.x 호환)
// @ts-ignore
const { DatabaseSync } = typeof require !== 'undefined' ? require('node:sqlite') : {};

// 중앙 DB 파일 경로 (apps/web/data/goodjob.db)
const DB_PATH = path.join(process.cwd(), 'data', 'goodjob.db');

let instance: any = null;

export function getDb(): any {
  if (!instance) {
    instance = new DatabaseSync(DB_PATH);
    instance.exec('PRAGMA foreign_keys = ON;');
    instance.exec('PRAGMA journal_mode = WAL;');
  }
  return instance;
}

// ============================================================================
// 1. 공고 조회 API 헬퍼 (View v_active_job_postings 기반)
// ============================================================================

export interface JobFilterParams {
  query?: string;
  isRemoteOnly?: boolean;
  isFlexibleWorkOnly?: boolean;
  isMilitaryServiceOnly?: boolean;
  sortBy?: 'match' | 'deadline' | 'latest';
  targetSkills?: string[];
  limit?: number;
  offset?: number;
}

export function queryActiveJobs(params: JobFilterParams = {}) {
  const db = getDb();
  const conditions: string[] = ['is_active = 1', 'is_expired = 0'];
  const bindValues: any[] = [];

  if (params.isRemoteOnly) {
    conditions.push('is_remote = 1');
  }
  if (params.isFlexibleWorkOnly) {
    conditions.push('is_flexible_work = 1');
  }
  if (params.isMilitaryServiceOnly) {
    conditions.push('is_military_service = 1');
  }

  if (params.query && params.query.trim() !== '') {
    conditions.push('(title LIKE ? OR company_name LIKE ? OR summary_mission LIKE ?)');
    const q = `%${params.query.trim()}%`;
    bindValues.push(q, q, q);
  }

  let orderBy = 'is_boosted DESC, posted_at DESC';
  if (params.sortBy === 'deadline') {
    orderBy = 'is_boosted DESC, deadline_at ASC';
  } else if (params.sortBy === 'latest') {
    orderBy = 'is_boosted DESC, posted_at DESC';
  }

  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
  const limit = params.limit || 2000;
  const offset = params.offset || 0;

  const sql = `
    SELECT 
      id, company_id, company_name, company_logo, corporate_domain, title, experience_level, location, salary,
      posted_at, deadline_at, deadline_text, deadline_days_left, is_expired,
      is_claimed, is_remote, is_flexible_work, is_military_service,
      is_boosted, boost_expires_at,
      summary_mission, summary_requirements, summary_benefits, keyword_highlights,
      view_count, scrap_count
    FROM v_active_job_postings
    ${whereClause}
    ORDER BY ${orderBy}
    LIMIT ? OFFSET ?
  `;

  bindValues.push(limit, offset);
  const stmt = db.prepare(sql);
  return stmt.all(...bindValues);
}

// ============================================================================
// 2. B2B ATS 지원자 전형 상태 변경 & 불변 감사 원장 갱신 (ACID 트랜잭션)
// ============================================================================

export interface ChangeStageParams {
  applicationId: string;
  newStage: 'DOC_PASS' | 'INTERVIEW' | 'FINAL_OFFER' | 'REJECTED' | 'WITHDRAWN';
  changedByUserId: string;
  changeReason?: string;
  withdrawalReason?: string;
}

export function updateApplicationStageWithAudit(params: ChangeStageParams) {
  const db = getDb();
  
  // 1. 기존 지원자 현재 상태 조회
  const findStmt = db.prepare('SELECT id, current_stage FROM candidate_applications WHERE id = ?');
  const app = findStmt.get(params.applicationId) as { id: string; current_stage: string } | undefined;
  
  if (!app) {
    throw new Error(`지원자 이력을 찾을 수 없습니다: ${params.applicationId}`);
  }

  const fromStage = app.current_stage;
  const historyId = `hist_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
  const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 19);

  // 2. 단일 트랜잭션으로 스냅샷 UPDATE + 불변 감사 원장 INSERT 실행
  db.exec('BEGIN TRANSACTION;');
  try {
    const updateStmt = db.prepare(`
      UPDATE candidate_applications 
      SET current_stage = ?, withdrawal_reason = ?, updated_at = ?
      WHERE id = ?
    `);
    updateStmt.run(
      params.newStage,
      params.newStage === 'WITHDRAWN' ? (params.withdrawalReason || params.changeReason || '자진 포기/노쇼') : null,
      nowStr,
      params.applicationId
    );

    const insertHistoryStmt = db.prepare(`
      INSERT INTO application_history (id, application_id, from_stage, to_stage, changed_by, change_reason, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
    insertHistoryStmt.run(
      historyId,
      params.applicationId,
      fromStage,
      params.newStage,
      params.changedByUserId,
      params.changeReason || '전형 단계 변경',
      nowStr
    );

    db.exec('COMMIT;');
    return {
      success: true,
      applicationId: params.applicationId,
      fromStage,
      currentStage: params.newStage,
      historyId,
      updatedAt: nowStr
    };
  } catch (error) {
    db.exec('ROLLBACK;');
    throw error;
  }
}

// ============================================================================
// 3. B2B ATS 채용 분석 (Funnel & Time-to-Hire Analytics)
// ============================================================================

export function getAtsFunnelAnalytics(jobId?: string) {
  const db = getDb();
  const sql = `
    SELECT 
      current_stage,
      COUNT(*) as count
    FROM candidate_applications
    ${jobId ? 'WHERE job_posting_id = ?' : ''}
    GROUP BY current_stage
  `;
  const stmt = db.prepare(sql);
  const rows = (jobId ? stmt.all(jobId) : stmt.all()) as Array<{ current_stage: string; count: number }>;
  
  const total = rows.reduce((sum, r) => sum + r.count, 0);
  const stages: Record<string, { count: number; rate: string }> = {};
  
  for (const r of rows) {
    const rate = total > 0 ? `${((r.count / total) * 100).toFixed(1)}%` : '0%';
    stages[r.current_stage] = { count: r.count, rate };
  }

  return { totalApplications: total, stages };
}

// ============================================================================
// 4. 유료 크레딧 불변 원장 트랜잭션 헬퍼
// ============================================================================

export interface CreditTransactionParams {
  userId: string;
  type: 'CHARGE' | 'USE' | 'REFUND' | 'REWARD_BONUS';
  amount: number;
  serviceType: string;
  description: string;
  orderId?: string;
}

export function executeCreditTransaction(params: CreditTransactionParams) {
  const db = getDb();
  
  const findBalanceStmt = db.prepare('SELECT balance FROM user_credits WHERE user_id = ?');
  const current = findBalanceStmt.get(params.userId) as { balance: number } | undefined;
  const currentBalance = current ? current.balance : 0;
  
  const newBalance = currentBalance + params.amount;
  if (newBalance < 0) {
    throw new Error(`크레딧 잔액이 부족합니다. (현재 잔액: ${currentBalance}, 요청: ${params.amount})`);
  }

  const txId = `ctx_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
  const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 19);

  db.exec('BEGIN TRANSACTION;');
  try {
    // 1. user_credits 갱신 (없으면 생성)
    const upsertCreditStmt = db.prepare(`
      INSERT INTO user_credits (id, user_id, balance, updated_at)
      VALUES (?, ?, ?, ?)
      ON CONFLICT(user_id) DO UPDATE SET balance = ?, updated_at = ?
    `);
    const credId = `crd_${params.userId}`;
    upsertCreditStmt.run(credId, params.userId, newBalance, nowStr, newBalance, nowStr);

    // 2. credit_transactions 불변 원장 INSERT
    const insertTxStmt = db.prepare(`
      INSERT INTO credit_transactions (id, user_id, transaction_type, amount, balance_after, service_type, order_id, description, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    insertTxStmt.run(
      txId,
      params.userId,
      params.type,
      params.amount,
      newBalance,
      params.serviceType,
      params.orderId || null,
      params.description,
      nowStr
    );

    db.exec('COMMIT;');
    return {
      success: true,
      transactionId: txId,
      previousBalance: currentBalance,
      balanceAfter: newBalance,
      amount: params.amount,
      updatedAt: nowStr
    };
  } catch (error) {
    db.exec('ROLLBACK;');
    throw error;
  }
}

// ============================================================================
// 5. B2B 결제 승인 & 공고 부스팅 트랜잭션 헬퍼
// ============================================================================

export interface B2BPaymentConfirmParams {
  userId: string;
  companyId?: string;
  packageType: 'BOOST_7D' | 'BOOST_30D' | 'CREDIT_100K' | 'CREDIT_300K';
  targetJobId?: string;
  amount: number;
  paymentMethod: string;
  pgPaymentKey: string;
  receiptUrl?: string;
}

export function executeB2BPaymentOrder(params: B2BPaymentConfirmParams) {
  const db = getDb();
  const orderId = `ord_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
  const now = new Date();
  const nowStr = now.toISOString().replace('T', ' ').substring(0, 19);

  db.exec('BEGIN TRANSACTION;');
  try {
    let boostStartedAt: string | null = null;
    let boostExpiresAt: string | null = null;

    // 1. 패키지 유형별 처리
    if (params.packageType === 'BOOST_7D' || params.packageType === 'BOOST_30D') {
      if (!params.targetJobId) {
        throw new Error('부스팅 대상 공고(targetJobId)가 지정되지 않았습니다.');
      }
      
      const durationDays = params.packageType === 'BOOST_7D' ? 7 : 30;
      const expireDate = new Date(now.getTime() + durationDays * 24 * 60 * 60 * 1000);
      boostStartedAt = nowStr;
      boostExpiresAt = expireDate.toISOString().replace('T', ' ').substring(0, 19);

      // 대상 공고의 is_boosted 및 boost_expires_at 갱신
      const boostStmt = db.prepare(`
        UPDATE job_postings
        SET is_boosted = 1, boost_expires_at = ?
        WHERE id = ?
      `);
      boostStmt.run(boostExpiresAt, params.targetJobId);
    } else if (params.packageType === 'CREDIT_100K' || params.packageType === 'CREDIT_300K') {
      // 크레딧 충전
      const creditPoints = params.packageType === 'CREDIT_100K' ? 100000 : 300000;
      
      const findBalanceStmt = db.prepare('SELECT balance FROM user_credits WHERE user_id = ?');
      const current = findBalanceStmt.get(params.userId) as { balance: number } | undefined;
      const currentBalance = current ? current.balance : 0;
      const newBalance = currentBalance + creditPoints;

      // 크레딧 잔액 갱신
      const upsertCreditStmt = db.prepare(`
        INSERT INTO user_credits (id, user_id, balance, updated_at)
        VALUES (?, ?, ?, ?)
        ON CONFLICT(user_id) DO UPDATE SET balance = ?, updated_at = ?
      `);
      upsertCreditStmt.run(`crd_${params.userId}`, params.userId, newBalance, nowStr, newBalance, nowStr);

      // 크레딧 거래 원장 기록
      const insertTxStmt = db.prepare(`
        INSERT INTO credit_transactions (id, user_id, transaction_type, amount, balance_after, service_type, order_id, description, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);
      insertTxStmt.run(
        `ctx_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
        params.userId,
        'CHARGE',
        creditPoints,
        newBalance,
        'B2B_CREDIT_PURCHASE',
        orderId,
        `B2B 기업 ${params.packageType === 'CREDIT_100K' ? '10만' : '30만'} 크레딧 결제 충전`,
        nowStr
      );
    }

    // 2. b2b_orders 주문 레코드 적재
    const insertOrderStmt = db.prepare(`
      INSERT INTO b2b_orders (
        id, user_id, company_id, package_type, target_job_id,
        amount, payment_method, pg_provider, pg_payment_key,
        pg_status, receipt_url, boost_started_at, boost_expires_at, created_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    insertOrderStmt.run(
      orderId,
      params.userId,
      params.companyId || null,
      params.packageType,
      params.targetJobId || null,
      params.amount,
      params.paymentMethod,
      'TOSS_PAYMENTS',
      params.pgPaymentKey,
      'SUCCESS',
      params.receiptUrl || `https://receipt.tosspayments.com/mock/${orderId}`,
      boostStartedAt,
      boostExpiresAt,
      nowStr
    );

    db.exec('COMMIT;');
    return {
      success: true,
      orderId,
      packageType: params.packageType,
      amount: params.amount,
      boostExpiresAt,
      receiptUrl: params.receiptUrl || `https://receipt.tosspayments.com/mock/${orderId}`,
      createdAt: nowStr
    };
  } catch (error) {
    db.exec('ROLLBACK;');
    throw error;
  }
}

export function getB2BOrders(userId?: string, companyId?: string) {
  const db = getDb();
  let sql = 'SELECT * FROM b2b_orders';
  const params: any[] = [];

  if (companyId) {
    sql += ' WHERE company_id = ?';
    params.push(companyId);
  } else if (userId) {
    sql += ' WHERE user_id = ?';
    params.push(userId);
  }

  sql += ' ORDER BY created_at DESC';
  const stmt = db.prepare(sql);
  return stmt.all(...params);
}
