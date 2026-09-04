import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true, message: '로그아웃되었습니다.' });
  response.cookies.delete('goodjob_user');
  response.cookies.delete('naver_oauth_state');
  return response;
}
