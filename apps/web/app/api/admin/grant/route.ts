import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    if (!email) {
      return NextResponse.json({ success: false, error: '이메일을 입력해주세요.' }, { status: 400 });
    }

    const db = getDb();
    const updateStmt = db.prepare(
      "UPDATE users SET role = 'ADMIN' WHERE email = ?"
    );
    const result = updateStmt.run(email);

    if (result.changes === 0) {
      return NextResponse.json({ success: false, error: '해당 이메일의 사용자를 찾을 수 없습니다.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: '운영자 권한이 부여되었습니다.' });
  } catch (error: any) {
    console.error('Error granting admin role:', error);
    return NextResponse.json(
      { success: false, error: '권한 부여 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
