#!/usr/bin/env node

/**
 * 굿잡 (GoodJob) 상용 환경변수 정합성 검사 CLI
 * 실행: npm run validate:env
 */

import { validateEnvironment, env } from '../lib/env.ts';

console.log('\n============================================================');
console.log('🛡️  굿잡 (GoodJob) 프로덕션 환경변수 및 비밀키 무결성 검증');
console.log('============================================================');
console.log(`* 동작 모드: ${env.isProduction ? '🚨 상용 프로덕션 (Production)' : '💻 개발/테스트 (Development)'}`);
console.log(`* 서비스 기본 URL: ${env.baseUrl}`);
console.log('------------------------------------------------------------');

const report = validateEnvironment();

console.log('\n[✅ 활성화 및 정상 연동된 기능]');
if (report.configuredFeatures.length > 0) {
  report.configuredFeatures.forEach(f => console.log(`  + ${f}`));
} else {
  console.log('  (활성화된 외부 서비스 없음 - 완전 로컬 모의 모드로 구동 중)');
}

console.log('\n[⚠️  미설정 또는 보완 권장 항목]');
if (report.warnings.length > 0) {
  report.warnings.forEach(w => console.log(`  - ${w}`));
  console.log('\n👉 상용 키 연동 시 .env.production.example 파일을 참조하여 .env.production 파일에 실제 키를 입력하세요.');
} else {
  console.log('  🎉 모든 상용 필수 비밀키가 완벽하게 바인딩되었습니다!');
}

console.log('============================================================\n');
