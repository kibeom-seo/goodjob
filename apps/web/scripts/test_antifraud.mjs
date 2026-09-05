import { verifyHiringRewardDocument } from '../lib/antifraud.ts';
import { dispatchInfraAlert } from '../lib/notifications.ts';

console.log('=== 굿잡 안티프로드(Anti-Fraud) & 관제 알림 검증 테스트 ===\n');

// 1. 정상 서류 시뮬레이션
const cleanDocBuffer = Buffer.from('대한민국 국민건강보험공단 자격득실확인서 사업장명: 토스뱅크 직인생략');
const result1 = verifyHiringRewardDocument(cleanDocBuffer, '건강보험자격득실_서기범.pdf', '토스뱅크');
console.log('[테스트 1] 정상 서류 검증:');
console.log(`- 통과 여부: ${result1.passed ? '✅ PASSED' : '❌ FAILED'}`);
console.log(`- ClamAV 스캔: ${result1.step1_clamav.details}`);
console.log(`- Exif 위변조 검사: ${result1.step2_exif.details}`);
console.log(`- OCR 직인/기업 대조: ${result1.step3_ocr.details}`);
console.log(`- 위험도 점수: ${result1.riskScore}점\n`);

// 2. 포토샵 위조 서류 시뮬레이션
const forgedDocBuffer = Buffer.from('대한민국 국민건강보험공단 자격득실확인서 Software: Adobe Photoshop 2024');
const result2 = verifyHiringRewardDocument(forgedDocBuffer, '자격득실확인서_포토샵수정본.pdf', '토스뱅크');
console.log('[테스트 2] 포토샵 위조 서류 검출:');
console.log(`- 통과 여부: ${result2.passed ? '✅ PASSED' : '❌ FAILED (정상 차단)'}`);
console.log(`- Exif 위변조 검사: ${result2.step2_exif.details}`);
console.log(`- 위험도 점수: ${result2.riskScore}점\n`);

// 3. 인프라 관제 웹훅 발송 시뮬레이션
console.log('[테스트 3] 인프라 관제 및 알림 라우팅:');
const alertResult = await dispatchInfraAlert({
  severity: 'WARNING',
  title: '위조 서류 안티프로드 차단 보고',
  service: 'ANTI_FRAUD',
  message: '서류 내 Adobe Photoshop 메타데이터 변조 감지되어 50만 원 지급이 자동 차단되었습니다.'
});
console.log(`- 발송 채널: ${alertResult.channel}`);
console.log(`- 결과: ${alertResult.delivered ? '전송 완료' : '전송 실패'}`);
console.log('\n=== 모든 보안 및 안티프로드 테스트 완료 ===');
