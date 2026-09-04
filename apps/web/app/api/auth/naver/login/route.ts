import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const host = request.headers.get('host') || '127.0.0.1:8080';
  const protocol = host.includes('localhost') || host.includes('127.0.0.1') ? 'http' : 'https';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${protocol}://${host}`;

  const clientId = process.env.NAVER_CLIENT_ID;
  const redirectUri = encodeURIComponent(`${baseUrl}/api/auth/callback/naver`);
  const state = Math.random().toString(36).substring(2, 15);

  if (!clientId) {
    return NextResponse.redirect(
      `${baseUrl}/?auth_notice=naver_not_configured`
    );
  }

  const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;

  const response = NextResponse.redirect(naverAuthUrl);
  response.cookies.set('naver_oauth_state', state, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 10, // 10분 유효
    sameSite: 'lax',
  });

  return response;
}
