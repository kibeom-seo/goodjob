import { NextRequest, NextResponse } from 'next/server';
import { queryActiveJobs } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';
    const isRemoteOnly = searchParams.get('remote') === '1' || searchParams.get('remote') === 'true';
    const isFlexibleWorkOnly = searchParams.get('flexible') === '1' || searchParams.get('flexible') === 'true';
    const isMilitaryServiceOnly = searchParams.get('military') === '1' || searchParams.get('military') === 'true';
    const sortBy = (searchParams.get('sort') as 'match' | 'deadline' | 'latest') || 'latest';
    const limit = parseInt(searchParams.get('limit') || '2000', 10);
    const offset = parseInt(searchParams.get('offset') || '0', 10);

    const jobs = await queryActiveJobs({
      query,
      isRemoteOnly,
      isFlexibleWorkOnly,
      isMilitaryServiceOnly,
      sortBy,
      limit,
      offset
    });

    return NextResponse.json({
      success: true,
      jobs: jobs
    });
  } catch (error: any) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json(
      { success: false, error: error.message || '공고 조회 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

export const runtime = 'edge';
