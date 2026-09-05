import { NextRequest, NextResponse } from 'next/server';
import { updateApplicationStageWithAudit } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const applicationId = params.id;
    const body = await request.json();
    const { stage, changeReason, withdrawalReason, changedByUserId } = body;

    if (!stage) {
      return NextResponse.json(
        { success: false, error: '전형 단계(stage)가 지정되지 않았습니다.' },
        { status: 400 }
      );
    }

    const validStages = ['DOC_PASS', 'INTERVIEW', 'FINAL_OFFER', 'REJECTED', 'WITHDRAWN'];
    if (!validStages.includes(stage)) {
      return NextResponse.json(
        { success: false, error: `유효하지 않은 전형 단계입니다: ${stage}` },
        { status: 400 }
      );
    }

    const result = updateApplicationStageWithAudit({
      applicationId,
      newStage: stage,
      changedByUserId: changedByUserId || 'user_hr_toss',
      changeReason,
      withdrawalReason
    });

    return NextResponse.json({
      success: true,
      message: `지원자 전형 단계가 '${stage}'(으)로 갱신되었으며, 감사 원장에 기록되었습니다.`,
      ...result
    });
  } catch (error: any) {
    console.error('Error updating application stage:', error);
    return NextResponse.json(
      { success: false, error: error.message || '전형 상태 변경 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

export const runtime = 'edge';
