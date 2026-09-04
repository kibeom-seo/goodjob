import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = cookies();
  const userCookie = cookieStore.get('goodjob_user');

  if (!userCookie || !userCookie.value) {
    return NextResponse.json({ user: null });
  }

  try {
    const user = JSON.parse(userCookie.value);
    return NextResponse.json({ user });
  } catch (e) {
    return NextResponse.json({ user: null });
  }
}
