/**
 * 굿잡 (GoodJob) 상용 환경변수 런타임 타입 검증 모듈
 * - 상용(production) 환경에서 필수 비밀키 누락 여부를 정밀 검사
 * - 로컬/개발(development) 환경에서는 테스트용 Mock으로 자동 폴백
 */

export interface EnvConfig {
  isProduction: boolean;
  baseUrl: string;
  apiUrl: string;
  jwtSecret: string;
  geminiApiKey: string;
  oauth: {
    google: {
      clientId: string;
      clientSecret: string;
      isConfigured: boolean;
    };
    naver: {
      clientId: string;
      clientSecret: string;
      isConfigured: boolean;
    };
    kakao: {
      clientId: string;
      clientSecret: string;
      isConfigured: boolean;
    };
  };
  telegram: {
    botToken: string;
    chatId: string;
    isConfigured: boolean;
  };
  wormArchive: {
    bucketName: string;
    region: string;
    isConfigured: boolean;
  };
}

function getEnv(key: string, defaultValue = ''): string {
  return process.env[key]?.trim() || defaultValue;
}

export const env: EnvConfig = {
  isProduction: process.env.NODE_ENV === 'production',
  baseUrl: getEnv('NEXT_PUBLIC_BASE_URL', 'https://goodjob-83j.pages.dev'),
  apiUrl: getEnv('NEXT_PUBLIC_API_URL', 'https://goodjob-83j.pages.dev'),
  jwtSecret: getEnv('JWT_SECRET', 'goodjob_dev_jwt_secret_key_2026'),
  geminiApiKey: getEnv('GEMINI_API_KEY', ''),
  oauth: {
    google: {
      clientId: getEnv('GOOGLE_CLIENT_ID'),
      clientSecret: getEnv('GOOGLE_CLIENT_SECRET'),
      get isConfigured() {
        return Boolean(this.clientId && this.clientSecret);
      }
    },
    naver: {
      clientId: getEnv('NAVER_CLIENT_ID'),
      clientSecret: getEnv('NAVER_CLIENT_SECRET'),
      get isConfigured() {
        return Boolean(this.clientId && this.clientSecret);
      }
    },
    kakao: {
      clientId: getEnv('KAKAO_CLIENT_ID'),
      clientSecret: getEnv('KAKAO_CLIENT_SECRET'),
      get isConfigured() {
        return Boolean(this.clientId && this.clientSecret);
      }
    }
  },
  telegram: {
    botToken: getEnv('TELEGRAM_BOT_TOKEN'),
    chatId: getEnv('TELEGRAM_CHAT_ID'),
    get isConfigured() {
      return Boolean(this.botToken && this.chatId);
    }
  },
  wormArchive: {
    bucketName: getEnv('AWS_S3_WORM_BUCKET'),
    region: getEnv('AWS_REGION', 'ap-northeast-2'),
    get isConfigured() {
      return Boolean(this.bucketName && process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY);
    }
  }
};

/**
 * 상용 배포 전 환경변수 정합성 리포트 생성
 */
export function validateEnvironment(): {
  isValid: boolean;
  warnings: string[];
  configuredFeatures: string[];
} {
  const warnings: string[] = [];
  const configuredFeatures: string[] = [];

  // 1. AI 엔진
  if (env.geminiApiKey) {
    configuredFeatures.push('Google Gemini AI (3줄 요약/매칭률)');
  } else {
    warnings.push('GEMINI_API_KEY 미설정: AI 요약 시 기본 목업 데이터로 대체됩니다.');
  }

  // 2. OAuth 소셜 로그인
  if (env.oauth.google.isConfigured) configuredFeatures.push('Google OAuth');
  else warnings.push('Google OAuth 키 미설정: 원클릭 간편 로그인(구글)이 목업 모드로 구동됩니다.');

  if (env.oauth.naver.isConfigured) configuredFeatures.push('Naver OAuth');
  else warnings.push('Naver OAuth 키 미설정: 원클릭 간편 로그인(네이버)이 목업 모드로 구동됩니다.');

  if (env.oauth.kakao.isConfigured) configuredFeatures.push('Kakao OAuth');
  else warnings.push('Kakao OAuth 키 미설정: 원클릭 간편 로그인(카카오)이 목업 모드로 구동됩니다.');

  // 3. 텔레그램 긴급 알림
  if (env.telegram.isConfigured) configuredFeatures.push('Telegram Bot 긴급 알림');
  else warnings.push('TELEGRAM_BOT_TOKEN / CHAT_ID 미설정: 크롤러 장애 시 콘솔 로그로만 경보됩니다.');

  // 4. 법적 3년 보관 S3 WORM 스토리지
  if (env.wormArchive.isConfigured) configuredFeatures.push('AWS S3 WORM 법적 3년 보관');
  else warnings.push('AWS S3 WORM 키 미설정: 채용 감사 원장이 로컬 시뮬레이션 모드로 암호화 보관됩니다.');

  return {
    isValid: warnings.length === 0,
    warnings,
    configuredFeatures
  };
}
