import { NextRequest, NextResponse } from 'next/server';
import { getB2BOrders } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId') || 'user_hr_toss';
    const companyId = searchParams.get('companyId') || 'comp_toss';

    const orders = getB2BOrders(userId, companyId);

    return NextResponse.json({
      success: true,
      orders
    });
  } catch (error: any) {
    console.error('[API /api/b2b/payment/orders Error]', error);
    return NextResponse.json(
      { success: false, error: error.message || '주문 내역 조회 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
