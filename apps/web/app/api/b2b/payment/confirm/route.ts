import { NextRequest, NextResponse } from 'next/server';
import { executeB2BPaymentOrder } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      userId = 'user_hr_toss', 
      companyId = 'comp_toss', 
      packageType, 
      targetJobId, 
      amount, 
      paymentMethod = 'CARD', 
      pgPaymentKey, 
      receiptUrl 
    } = body;

    // 1. 필수 파라미터 유효성 검사
    if (!packageType || !amount) {
      return NextResponse.json(
        { success: false, error: 'packageType 및 amount는 필수 항목입니다.' },
        { status: 400 }
      );
    }

    const validPackages = ['BOOST_7D', 'BOOST_30D', 'CREDIT_100K', 'CREDIT_300K'];
    if (!validPackages.includes(packageType)) {
      return NextResponse.json(
        { success: false, error: `유효하지 않은 패키지 유형입니다: ${packageType}` },
        { status: 400 }
      );
    }

    if ((packageType === 'BOOST_7D' || packageType === 'BOOST_30D') && !targetJobId) {
      return NextResponse.json(
        { success: false, error: '공고 부스팅 상품은 대상 공고(targetJobId)가 필수입니다.' },
        { status: 400 }
      );
    }

    // 2. 단일 ACID 트랜잭션으로 주문 기록, 크레딧 적재 또는 공고 부스팅 활성화
    const result = await executeB2BPaymentOrder({
      userId,
      companyId,
      packageType,
      targetJobId,
      amount: Number(amount),
      paymentMethod,
      pgProvider: 'TOSS_PAYMENTS',
      pgPaymentKey: pgPaymentKey || `toss_pay_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      receiptUrl
    });

    return NextResponse.json({
      success: true,
      message: 'B2B 결제가 성공적으로 승인되었으며 원장에 기록되었습니다.',
      order: result
    });
  } catch (error: any) {
    console.error('[API /api/b2b/payment/confirm Error]', error);
    return NextResponse.json(
      { success: false, error: error.message || '결제 처리 중 서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

export const runtime = 'edge';
