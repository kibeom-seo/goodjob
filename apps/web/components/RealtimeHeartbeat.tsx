'use client';

import { useEffect } from 'react';

export default function RealtimeHeartbeat() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let sessionId = localStorage.getItem('goodjob_session_id');
    if (!sessionId) {
      sessionId = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      localStorage.setItem('goodjob_session_id', sessionId);
    }

    const sendHeartbeat = () => {
      try {
        fetch('/api/analytics/heartbeat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId })
        }).catch(() => {});
      } catch (e) {}
    };

    // 1. 접속 즉시 최초 하트비트 전송
    sendHeartbeat();

    // 2. 45초 주기로 활성 상태 유지 핑
    const interval = setInterval(sendHeartbeat, 45000);
    return () => clearInterval(interval);
  }, []);

  return null;
}
