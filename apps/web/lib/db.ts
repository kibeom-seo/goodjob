import { getRequestContext } from '@cloudflare/next-on-pages';

export function getDb(): any {
  try {
    let env: any = null;
    try {
      const ctx = getRequestContext();
      env = ctx?.env;
    } catch (_) {}

    if (!env) {
      env = (globalThis as any).env || (globalThis as any).__env__ || (process as any).env;
    }

    if (!env) return null;
    const db = env.DB || env.goodjob_db || env.GOODJOB_DB || env['goodjob-db'];
    return db || null;
  } catch (e) {
    return null;
  }
}

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

export async function queryActiveJobs(params: JobFilterParams = {}) {
  const db = getDb();
  if (!db) return [];
  
  const conditions = ['is_active = 1', 'is_expired = 0'];
  const bindValues = [];

  if (params.isRemoteOnly) conditions.push('is_remote = 1');
  if (params.isFlexibleWorkOnly) conditions.push('is_flexible_work = 1');
  if (params.isMilitaryServiceOnly) conditions.push('is_military_service = 1');

  if (params.query && params.query.trim() !== '') {
    conditions.push('(title LIKE ? OR company_name LIKE ? OR summary_mission LIKE ?)');
    const q = `%${params.query.trim()}%`;
    bindValues.push(q, q, q);
  }

  let orderBy = 'is_boosted DESC, posted_at DESC';
  if (params.sortBy === 'deadline') orderBy = 'is_boosted DESC, deadline_at ASC';
  else if (params.sortBy === 'latest') orderBy = 'is_boosted DESC, posted_at DESC';

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
  const result = await stmt.bind(...bindValues).all();
  return result.results || [];
}

export async function getAtsFunnelAnalytics(jobId?: string) {
  const db = getDb();
  if (!db) return { totalApplications: 0, stages: {} };

  const sql = `
    SELECT 
      current_stage,
      COUNT(*) as count
    FROM candidate_applications
    ${jobId ? 'WHERE job_posting_id = ?' : ''}
    GROUP BY current_stage
  `;
  
  const stmt = db.prepare(sql);
  const result = jobId ? await stmt.bind(jobId).all() : await stmt.all();
  const rows = result.results || [];
  
  const total = rows.reduce((sum: number, r: any) => sum + r.count, 0);
  const stages: Record<string, {count: number, rate: string}> = {};
  
  for (const r of rows) {
    const rate = total > 0 ? `${((r.count / total) * 100).toFixed(1)}%` : '0%';
    stages[r.current_stage] = { count: r.count, rate };
  }

  return { totalApplications: total, stages };
}

export interface CreditTransactionParams {
  userId: string;
  transactionType: 'DEPOSIT' | 'USAGE' | 'REFUND';
  amount: number;
  serviceType?: string;
  orderId?: string;
  description?: string;
}

export async function executeCreditTransaction(params: CreditTransactionParams) {
  const db = getDb();
  if (!db) return { success: false, error: 'Database unavailable' };

  try {
    const userRes = await db.prepare('SELECT balance FROM user_credits WHERE user_id = ?').bind(params.userId).first() as any;
    const currentBalance = userRes?.balance || 0;
    
    let newBalance = currentBalance;
    if (params.transactionType === 'DEPOSIT' || params.transactionType === 'REFUND') {
      newBalance += params.amount;
    } else if (params.transactionType === 'USAGE') {
      if (currentBalance < params.amount) {
        return { success: false, error: '보유 크레딧 잔액이 부족합니다.' };
      }
      newBalance -= params.amount;
    }

    const txId = `tx_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
    const nowIso = new Date().toISOString();

    const insertTx = db.prepare(`
      INSERT INTO credit_transactions (
        id, user_id, transaction_type, amount, balance_after, service_type, order_id, description, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      txId, params.userId, params.transactionType, params.amount, newBalance,
      params.serviceType || null, params.orderId || null, params.description || null, nowIso
    );

    const upsertCredit = db.prepare(`
      INSERT INTO user_credits (id, user_id, balance, updated_at)
      VALUES (?, ?, ?, ?)
      ON CONFLICT(user_id) DO UPDATE SET
        balance = excluded.balance,
        updated_at = excluded.updated_at
    `).bind(`cred_${params.userId}`, params.userId, newBalance, nowIso);

    await db.batch([insertTx, upsertCredit]);
    return { success: true, transactionId: txId, newBalance };
  } catch (error: any) {
    console.error('Credit transaction error:', error);
    return { success: false, error: error.message };
  }
}

export interface B2BPaymentOrderParams {
  userId: string;
  companyId?: string;
  packageType: 'ENTERPRISE_AI_MONTHLY' | 'JOB_BOOSTING_14DAYS' | 'DIRECT_CREDIT_TOPUP';
  targetJobId?: string;
  amount: number;
  paymentMethod: string;
  pgProvider: string;
  pgPaymentKey: string;
  pgStatus?: string;
  receiptUrl?: string;
}

export async function executeB2BPaymentOrder(params: B2BPaymentOrderParams) {
  const db = getDb();
  if (!db) return { success: false, error: 'Database unavailable' };

  try {
    const orderId = `ord_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
    const nowIso = new Date().toISOString();

    let boostExpiresAt: string | null = null;
    if (params.packageType === 'JOB_BOOSTING_14DAYS') {
      const exp = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
      boostExpiresAt = exp.toISOString();
    }

    const insertOrder = db.prepare(`
      INSERT INTO b2b_orders (
        id, user_id, company_id, package_type, target_job_id, amount,
        payment_method, pg_provider, pg_payment_key, pg_status, receipt_url,
        boost_started_at, boost_expires_at, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      orderId, params.userId, params.companyId || null, params.packageType, params.targetJobId || null,
      params.amount, params.paymentMethod, params.pgProvider, params.pgPaymentKey,
      params.pgStatus || 'SUCCESS', params.receiptUrl || null,
      boostExpiresAt ? nowIso : null, boostExpiresAt, nowIso
    );

    const statements = [insertOrder];

    if (params.packageType === 'JOB_BOOSTING_14DAYS' && params.targetJobId) {
      statements.push(
        db.prepare('UPDATE job_postings SET is_boosted = 1, boost_expires_at = ? WHERE id = ?')
          .bind(boostExpiresAt, params.targetJobId)
      );
    }

    await db.batch(statements);
    return { success: true, orderId, boostExpiresAt };
  } catch (error: any) {
    console.error('B2B payment order error:', error);
    return { success: false, error: error.message };
  }
}

export async function getB2BOrders(userId: string) {
  const db = getDb();
  if (!db) return [];
  const stmt = db.prepare('SELECT * FROM b2b_orders WHERE user_id = ? ORDER BY created_at DESC');
  const result = await stmt.bind(userId).all();
  return result.results || [];
}

export async function updateApplicationStage(applicationId: string, companyId: string, newStage: string, memo?: string) {
  const db = getDb();
  if (!db) return { success: false, error: 'Database unavailable' };

  try {
    const nowIso = new Date().toISOString();
    const updateApp = db.prepare('UPDATE candidate_applications SET current_stage = ? WHERE id = ?').bind(newStage, applicationId);
    const insertLog = db.prepare(`
      INSERT INTO application_stage_logs (application_id, stage, changed_by, memo, created_at)
      VALUES (?, ?, ?, ?, ?)
    `).bind(applicationId, newStage, companyId, memo || null, nowIso);

    await db.batch([updateApp, insertLog]);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
