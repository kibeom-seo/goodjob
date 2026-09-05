import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { jobId, companyName, applicantEmail, bizRegNumber } = body;

    if (!jobId || !applicantEmail) {
      return NextResponse.json(
        { success: false, error: 'jobId 및 담당자 이메일은 필수입니다.' },
        { status: 400 }
      );
    }

    const emailDomain = applicantEmail.split('@')[1]?.toLowerCase().trim();
    if (!emailDomain) {
      return NextResponse.json(
        { success: false, error: '유효한 이메일 형식이 아닙니다.' },
        { status: 400 }
      );
    }

    const db = getDb();
    
    // 대상 공고 조회
    const jobStmt = db.prepare('SELECT id, company_id, company_name FROM job_postings WHERE id = ?');
    const job = jobStmt.get(jobId) as { id: string; company_id: string; company_name: string } | undefined;

    if (!job) {
      return NextResponse.json(
        { success: false, error: '해당 공고를 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    // 기업 마스터 도메인 검사
    let corporateDomain: string | null = null;
    if (job.company_id) {
      const compStmt = db.prepare('SELECT corporate_domain FROM companies WHERE id = ?');
      const comp = compStmt.get(job.company_id) as { corporate_domain: string } | undefined;
      corporateDomain = comp?.corporate_domain || null;
    }

    // 일반 포털 메일 제외 도메인 일치 여부 판별
    const publicMailDomains = ['gmail.com', 'naver.com', 'daum.net', 'kakao.com', 'hanmail.net', 'nate.com'];
    const isPublicMail = publicMailDomains.includes(emailDomain);
    
    let isDomainMatched = false;
    if (!isPublicMail) {
      if (corporateDomain && emailDomain === corporateDomain.toLowerCase()) {
        isDomainMatched = true;
      } else if (emailDomain.includes(job.company_name.toLowerCase()) || (companyName && emailDomain.includes(companyName.toLowerCase()))) {
        isDomainMatched = true;
      }
    }

    const claimId = `claim_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
    const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 19);

    if (isDomainMatched) {
      // 100% 무심사 즉시 자동 승인
      db.exec('BEGIN TRANSACTION;');
      try {
        db.prepare(`
          INSERT INTO company_claims (
            id, company_id, job_posting_id, company_name, biz_reg_number,
            applicant_email, is_auto_approved, status, applied_at, reviewed_at
          ) VALUES (?, ?, ?, ?, ?, ?, 1, 'APPROVED', ?, ?)
        `).run(claimId, job.company_id || null, jobId, companyName || job.company_name, bizRegNumber || null, applicantEmail, nowStr, nowStr);

        // 공고 상태 즉시 claimed 업데이트
        db.prepare('UPDATE job_postings SET is_claimed = 1 WHERE id = ?').run(jobId);

        db.exec('COMMIT;');

        return NextResponse.json({
          success: true,
          claimId,
          isAutoApproved: true,
          status: 'APPROVED',
          badgeAwarded: 'ENTERPRISE_CLAIMED',
          message: '회사 공식 도메인이 확인되어 관리자 승인 대기 없이 즉시 직접 인증 공고로 전환되었습니다.'
        });
      } catch (err) {
        db.exec('ROLLBACK;');
        throw err;
      }
    } else {
      // 도메인 불일치 / 포털 메일 ➔ 관리자 수동 심사 큐 등록
      db.prepare(`
        INSERT INTO company_claims (
          id, company_id, job_posting_id, company_name, biz_reg_number,
          applicant_email, is_auto_approved, status, applied_at
        ) VALUES (?, ?, ?, ?, ?, ?, 0, 'PENDING', ?)
      `).run(claimId, job.company_id || null, jobId, companyName || job.company_name, bizRegNumber || null, applicantEmail, nowStr);

      return NextResponse.json({
        success: true,
        claimId,
        isAutoApproved: false,
        status: 'PENDING',
        message: '신청이 접수되었습니다. 포털 메일 또는 도메인 불일치 건은 운영자 서류 검토 후 24시간 이내 승인됩니다.'
      });
    }
  } catch (error: any) {
    console.error('Error processing company claim:', error);
    return NextResponse.json(
      { success: false, error: error.message || '기업 인증 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
