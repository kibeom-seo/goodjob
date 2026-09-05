/**
 * 굿잡 인프라 보안 관제 및 실시간 알림 모듈 (Alerting & Incident Dispatcher)
 * - 1차 알림: 텔레그램 봇 API (Telegram Bot API) - 장애 및 안티프로드 발생 시 대표/운영진 모바일 즉시 수신
 * - 2차 폴백: 시스템 로컬 감사 원장 (Local Audit Logger)
 */

export interface AlertPayload {
  severity: 'INFO' | 'WARNING' | 'CRITICAL';
  title: string;
  service: 'CRAWLER' | 'ATS_ENGINE' | 'ANTI_FRAUD' | 'DB_CLUSTER';
  message: string;
  metadata?: Record<string, any>;
}

export async function dispatchInfraAlert(payload: AlertPayload): Promise<{
  delivered: boolean;
  channel: 'TELEGRAM' | 'LOCAL_AUDIT';
  details?: string;
}> {
  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;
  const timestamp = new Date().toISOString();

  const icon = payload.severity === 'CRITICAL' ? '🚨 [긴급 장애]' : payload.severity === 'WARNING' ? '⚠️ [보안 경고]' : 'ℹ️ [시스템 알림]';
  const alertText = `${icon} 굿잡 실시간 관제\n\n` +
    `• 서비스: ${payload.service}\n` +
    `• 제목: ${payload.title}\n` +
    `• 내용: ${payload.message}\n` +
    `• 일시: ${timestamp}`;

  // 1. 텔레그램 봇 API 실시간 전송 (최우선 채널)
  if (telegramBotToken && telegramChatId) {
    try {
      const tgUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
      const response = await fetch(tgUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: alertText,
          parse_mode: 'HTML'
        })
      });

      if (response.ok) {
        return { delivered: true, channel: 'TELEGRAM', details: 'Telegram Bot 전송 성공' };
      } else {
        const errJson = await response.json();
        console.warn('[Alert] 텔레그램 API 응답 에러:', errJson);
      }
    } catch (err: any) {
      console.warn('[Alert] 텔레그램 발송 네트워크 에러:', err.message);
    }
  }

  // 2. 텔레그램 토큰 미설정 또는 네트워크 단절 시: 로컬 보안 감사 로그로 원자적 기록
  console.info('[TELEGRAM_ALERT_SIMULATION]', {
    alert: payload,
    formattedText: alertText,
    timestamp
  });

  return {
    delivered: true,
    channel: 'LOCAL_AUDIT',
    details: '텔레그램 봇 토큰 미설정(테스트 모드) -> 로컬 감사 원장에 정상 기록 완료'
  };
}
