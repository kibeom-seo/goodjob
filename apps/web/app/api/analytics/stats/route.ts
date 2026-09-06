import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function GET() {
  try {
    const db = getDb();
    if (!db) {
      return NextResponse.json({ success: false, error: "DB not bound" }, { status: 500 });
    }
    
    // Cloudflare D1 실데이터 비동기 집계
    const totalJobsRes = await db.prepare('SELECT count(*) as c FROM job_postings WHERE is_active = 1').first() as any;
    const claimedCompaniesRes = await db.prepare('SELECT count(*) as c FROM companies WHERE is_claimed = 1').first() as any;
    const totalUsersRes = await db.prepare('SELECT count(*) as c FROM users WHERE is_active = 1').first() as any;
    const totalApplicationsRes = await db.prepare('SELECT count(*) as c FROM candidate_applications').first() as any;
    const boostedJobsRes = await db.prepare('SELECT count(*) as c FROM job_postings WHERE is_boosted = 1').first() as any;

    const totalJobs = totalJobsRes?.c ?? 0;
    const claimedCompanies = claimedCompaniesRes?.c ?? 0;
    const totalUsers = totalUsersRes?.c ?? 0;
    const totalApplications = totalApplicationsRes?.c ?? 0;
    const boostedJobs = boostedJobsRes?.c ?? 0;

    return NextResponse.json({
      success: true,
      data: {
        activeUsersNow: 0,
        todayUV: 0,
        todayPV: 0,
        totalJobs,
        claimedCompanies,
        totalUsers,
        totalApplications,
        boostedJobs,
        serverUptime: '100%',
        crawlerStatus: 'HEALTHY'
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
