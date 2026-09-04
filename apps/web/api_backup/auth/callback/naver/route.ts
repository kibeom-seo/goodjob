import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const error = searchParams.get('error');

  const host = request.headers.get('host') || '127.0.0.1:8080';
  const protocol = host.includes('localhost') || host.includes('127.0.0.1') ? 'http' : 'https';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${protocol}://${host}`;

  if (error || !code) {
    return NextResponse.redirect(`${baseUrl}/?auth_error=${error || 'no_code'}`);
  }

  const clientId = process.env.NAVER_CLIENT_ID;
  const clientSecret = process.env.NAVER_CLIENT_SECRET;

  try {
    // 1. Naver Token 발급 요청
    const tokenUrl = new URL('https://nid.naver.com/oauth2.0/token');
    tokenUrl.searchParams.set('grant_type', 'authorization_code');
    tokenUrl.searchParams.set('client_id', clientId || '');
    tokenUrl.searchParams.set('client_secret', clientSecret || '');
    tokenUrl.searchParams.set('code', code);
    tokenUrl.searchParams.set('state', state || '');

    const tokenResponse = await fetch(tokenUrl.toString());
    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok || !tokenData.access_token) {
      console.error('Naver token exchange error:', tokenData);
      return NextResponse.redirect(`${baseUrl}/?auth_error=naver_token_failed`);
    }

    // 2. Naver 회원 프로필 조회
    const profileResponse = await fetch('https://openapi.naver.com/v1/nid/me', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });

    const profileData = await profileResponse.json();

    if (profileData.resultcode !== '00' || !profileData.response) {
      console.error('Naver profile fetch failed:', profileData);
      return NextResponse.redirect(`${baseUrl}/?auth_error=naver_profile_failed`);
    }

    const naverUser = profileData.response;

    // 3. 사용자 세션 객체 생성
    const userSession = {
      name: naverUser.nickname || naverUser.name || '네이버 취준생',
      email: naverUser.email || '',
      avatar: naverUser.profile_image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      provider: 'naver',
      id: naverUser.id || `naver-${Date.now()}`,
    };

    // 4. 세션 쿠키 설정 및 리디렉션
    const response = NextResponse.redirect(`${baseUrl}/?auth_success=naver`);
    response.cookies.set('goodjob_user', JSON.stringify(userSession), {
      httpOnly: false,
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
      sameSite: 'lax',
    });

    return response;
  } catch (err: any) {
    console.error('Naver OAuth callback fatal error:', err);
    return NextResponse.redirect(`${baseUrl}/?auth_error=server_error`);
  }
}
