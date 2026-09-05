import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { jobId, companyName, applicantEmail, bizRegNumber } = body;

    if (!jobId || !applicantEmail) {
      return NextResponse.json(
        { success: false, error: 'jobId와 신청자 이메일은 필수입니다.' },
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

    const db = getDb(); if (!db) return Response.json({ success: false, error: "DB not bound" }, { status: 500 });
    
    // 대상 공고 조회
    const jobStmt = db.prepare('SELECT id, company_id, company_name FROM job_postings WHERE id = ?');
    const job = await jobStmt.bind(jobId).first() as { id: string; company_id: string; company_name: string } | undefined;

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
      const comp = await compStmt.bind(job.company_id).first() as { corporate_domain: string } | undefined;
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
      try {
        await db.prepare(`
          INSERT INTO company_claims (
            id, company_id, job_posting_id, company_name, biz_reg_number,
            applicant_email, is_auto_approved, status, applied_at, reviewed_at
          ) VALUES (?, ?, ?, ?, ?, ?, 1, 'APPROVED', ?, ?)
        `).bind(claimId, job.company_id || null, jobId, companyName || job.company_name, bizRegNumber || null, applicantEmail, nowStr, nowStr).run();

        await db.prepare('UPDATE job_postings SET is_claimed = 1 WHERE id = ?').bind(jobId).run();

        return NextResponse.json({
          success: true,
          claimId,
          isAutoApproved: true,
          status: 'APPROVED',
          badgeAwarded: 'ENTERPRISE_CLAIMED',
          message: '회사 공식 이메일이 확인되어 관리자 확인 없이 즉시 직접 인증 공고로 전환되었습니다.'
        });
      } catch (err) {
        throw err;
      }
    } else {
      await db.prepare(`
        INSERT INTO company_claims (
          id, company_id, job_posting_id, company_name, biz_reg_number,
          applicant_email, is_auto_approved, status, applied_at
        ) VALUES (?, ?, ?, ?, ?, ?, 0, 'PENDING', ?)
      `).bind(claimId, job.company_id || null, jobId, companyName || job.company_name, bizRegNumber || null, applicantEmail, nowStr).run();

      return NextResponse.json({
        success: true,
        claimId,
        isAutoApproved: false,
        status: 'PENDING',
        message: '신청이 접수되었습니다. 포털 메일 또는 이메일 불일치 건은 운영자 서류 검토 후 24시간 이내 승인됩니다.'
      });
    }
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || '기업 인증 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
