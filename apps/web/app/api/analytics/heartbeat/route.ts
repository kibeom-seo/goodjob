import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const sessionId = body?.sessionId || request.headers.get('x-session-id') || `sess_${Math.random().toString(36).substring(2, 10)}`;
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const ip = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for') || '127.0.0.1';
    const nowIso = new Date().toISOString();

    const db = getDb();
    if (db) {
      await db.prepare(`
        INSERT INTO active_sessions (session_id, ip, user_agent, last_active_at, created_at)
        VALUES (?, ?, ?, ?, ?)
        ON CONFLICT(session_id) DO UPDATE SET
          last_active_at = excluded.last_active_at
      `).bind(sessionId, ip, userAgent, nowIso, nowIso).run();
    }

    return NextResponse.json({ success: true, sessionId });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
