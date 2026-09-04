import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  const host = request.headers.get('host') || '127.0.0.1:8080';
  const protocol = host.includes('localhost') || host.includes('127.0.0.1') ? 'http' : 'https';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${protocol}://${host}`;

  if (error || !code) {
    return NextResponse.redirect(`${baseUrl}/?auth_error=${error || 'no_code'}`);
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = `${baseUrl}/api/auth/callback/google`;

  try {
    // 1. Google Token 교환 요청
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: clientId || '',
        client_secret: clientSecret || '',
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok || !tokenData.access_token) {
      console.error('Google token exchange error:', tokenData);
      return NextResponse.redirect(`${baseUrl}/?auth_error=token_failed`);
    }

    // 2. Google 사용자 프로필 조회
    const userinfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });

    const profile = await userinfoResponse.json();

    // 3. 사용자 세션 객체 생성
    const userSession = {
      name: profile.name || profile.email?.split('@')[0] || '구글 취준생',
      email: profile.email || '',
      avatar: profile.picture || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      provider: 'google',
      id: profile.id || `google-${Date.now()}`,
    };

    // 4. 쿠키 설정 및 메인 페이지 리디렉션
    const response = NextResponse.redirect(`${baseUrl}/?auth_success=google`);
    response.cookies.set('goodjob_user', JSON.stringify(userSession), {
      httpOnly: false, // 클라이언트 React에서 즉시 동기화할 수 있도록 설정
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30일 유지
      sameSite: 'lax',
    });

    return response;
  } catch (err: any) {
    console.error('Google OAuth callback fatal error:', err);
    return NextResponse.redirect(`${baseUrl}/?auth_error=server_error`);
  }
}
