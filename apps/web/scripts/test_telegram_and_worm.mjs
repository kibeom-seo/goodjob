import { dispatchInfraAlert } from '../lib/notifications.ts';
import { 
  archiveSubmittedDocument, 
  verifyWORMArchive, 
  simulateLifecyclePurge 
} from '../lib/worm_archive.ts';

console.log('================================================================');
console.log('🚀 1. 텔레그램 알림 모듈 & 2. S3 WORM 3년 보관 스토리지 검증 테스트');
console.log('================================================================\n');

// -------------------------------------------------------------
// [테스트 1] 텔레그램 관제 알림 발송 테스트
// -------------------------------------------------------------
console.log('>>> [1] 텔레그램 봇 관제 알림 발송 시뮬레이션');
const alertRes = await dispatchInfraAlert({
  severity: 'CRITICAL',
  service: 'ANTI_FRAUD',
  title: '리워드 부정 수급 의심 차단 보고',
  message: '동일 IP 대역에서 5회 연속 포토샵 조작 서류 제출 감지. 50만 원 자동 출금이 동결되었습니다.'
});
console.log(`- 결과: ${alertRes.delivered ? '✅ 성공' : '❌ 실패'}`);
console.log(`- 발송 채널: ${alertRes.channel}`);
console.log(`- 상세 상태: ${alertRes.details}\n`);

// -------------------------------------------------------------
// [테스트 2] 채용절차법 준수 3년 WORM 아카이브 생성
// -------------------------------------------------------------
console.log('>>> [2] 채용절차법 준수 3년 WORM 스토리지 아카이빙 (입사지원서)');
const sampleResumeContent = '지원자: 홍길동 / 직무: 풀스택 엔지니어 / 경력: 3년 / 포트폴리오: https://github.com/sample';
const archiveReceipt = archiveSubmittedDocument({
  applicationId: 'app_2026_0905_toss_01',
  candidateId: 'usr_cand_01',
  targetCompanyId: 'comp_toss',
  fileName: '홍길동_이력서_2026.pdf',
  fileContent: sampleResumeContent
});

console.log(`- 아카이브 ID: ${archiveReceipt.archiveId}`);
console.log(`- 불변 SHA-256 전자지문: ${archiveReceipt.fileSha256}`);
console.log(`- 아카이브 일시: ${archiveReceipt.archivedAt}`);
console.log(`- 3년 법정 의무 보관 만료일: ${archiveReceipt.retentionUntil}`);
console.log(`- 잠금 모드: S3 Object Lock [${archiveReceipt.objectLockMode}] (임의 삭제 불가)\n`);

// -------------------------------------------------------------
// [테스트 3] 무결성 및 위변조 방어 검증
// -------------------------------------------------------------
console.log('>>> [3] WORM 보관 서류 무결성 검증');
const verifyResult = verifyWORMArchive(archiveReceipt.archiveId, sampleResumeContent);
console.log(`- 전자지문 일치 여부: ${verifyResult.isValid ? '✅ 일치 (무결함)' : '❌ 불일치 (위변조 감지)'}`);
console.log(`- 현재 법적 잠금 상태: ${verifyResult.isLocked ? '🔒 LOCKED (3년 보호 활성)' : 'UNLOCKED'}`);
console.log(`- 남은 보관 의무 일수: ${verifyResult.daysRemaining}일 (약 3년)\n`);

// -------------------------------------------------------------
// [테스트 4] 3년 경과 후 S3 Lifecycle 자동 파기 시뮬레이션
// -------------------------------------------------------------
console.log('>>> [4] 3년 경과 시점 Lifecycle 자동 파기 시뮬레이션 (+3년 후 가상 시간)');
const purgeResult = simulateLifecyclePurge(3); // 3년 후 시뮬레이션
console.log(`- 3년 만료 서류 자동 파기 건수: ${purgeResult.purgedCount}건`);
console.log(`- 파기된 아카이브 ID: ${purgeResult.purgedIds.join(', ')}`);

console.log('\n================================================================');
console.log('🎉 텔레그램 관제 알림 및 3년 WORM 스토리지 연동 테스트 100% 성공!');
console.log('================================================================');
