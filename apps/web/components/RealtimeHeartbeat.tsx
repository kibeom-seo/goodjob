'use client';

import { useEffect } from 'react';

export default function RealtimeHeartbeat() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let sessionId = sessionStorage.getItem('goodjob_active_session_id');
    if (!sessionId) {
      sessionId = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      sessionStorage.setItem('goodjob_active_session_id', sessionId);
    }

    const sendHeartbeat = (isLeaving = false) => {
      try {
        const payload = JSON.stringify({ sessionId, isLeaving });
        if (isLeaving && navigator.sendBeacon) {
          const blob = new Blob([payload], { type: 'application/json' });
          navigator.sendBeacon('/api/analytics/heartbeat', blob);
        } else {
          fetch('/api/analytics/heartbeat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: payload,
            keepalive: isLeaving
          }).catch(() => {});
        }
      } catch (e) {}
    };

    // 1. 페이지 열릴 때 즉시 활성 신호
    sendHeartbeat(false);

    // 2. 20초마다 주기적 활성 신호 갱신
    const interval = setInterval(() => sendHeartbeat(false), 20000);

    // 3. 브라우저 탭 닫기 / 페이지 이동 시 즉시 이탈 신호 전송 -> CCU 즉시 감소
    const handleLeave = () => {
      sendHeartbeat(true);
    };

    window.addEventListener('beforeunload', handleLeave);
    window.addEventListener('pagehide', handleLeave);

    return () => {
      clearInterval(interval);
      window.removeEventListener('beforeunload', handleLeave);
      window.removeEventListener('pagehide', handleLeave);
      handleLeave();
    };
  }, []);

  return null;
}
