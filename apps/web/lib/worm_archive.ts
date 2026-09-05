import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

/**
 * 채용절차법 준수 3년 보관 S3 WORM (Write-Once-Read-Many) 아카이브 시뮬레이터
 * - 법적 근거: 채용절차의 공정화에 관한 법률 제11조 (채용서류의 반환 및 보관의무)
 * - 보관 기간: 전형 종료일로부터 3년 (법정 의무 보관)
 * - 불변성 보장: SHA-256 전자지문 생성 및 AWS S3 Object Lock (COMPLIANCE 모드)
 */

export interface WORMArchiveRecord {
  archiveId: string;
  applicationId: string;
  candidateId: string;
  targetCompanyId: string;
  fileName: string;
  fileSha256: string;
  archivedAt: string;
  retentionUntil: string; // 정확히 3년 후 (ISO8601)
  objectLockMode: 'COMPLIANCE' | 'GOVERNANCE';
  status: 'LOCKED' | 'PURGED_BY_LIFECYCLE';
}

const ARCHIVE_DIR = path.join(process.cwd(), 'data', 'worm_archives');

// 보관함 디렉터리 준비
function ensureArchiveDir() {
  if (!fs.existsSync(ARCHIVE_DIR)) {
    fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
  }
}

/**
 * 1. 구직자 서류 WORM 아카이브 (3년 락 적용)
 */
export function archiveSubmittedDocument(params: {
  applicationId: string;
  candidateId: string;
  targetCompanyId: string;
  fileName: string;
  fileContent: Buffer | string;
}): WORMArchiveRecord {
  ensureArchiveDir();

  const buffer = Buffer.isBuffer(params.fileContent) ? params.fileContent : Buffer.from(params.fileContent);
  const sha256 = crypto.createHash('sha256').update(buffer).digest('hex');
  const now = new Date();
  
  // 3년 후 날짜 계산
  const retentionDate = new Date(now);
  retentionDate.setFullYear(now.getFullYear() + 3);

  const archiveId = `worm_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
  
  const record: WORMArchiveRecord = {
    archiveId,
    applicationId: params.applicationId,
    candidateId: params.candidateId,
    targetCompanyId: params.targetCompanyId,
    fileName: params.fileName,
    fileSha256: sha256,
    archivedAt: now.toISOString(),
    retentionUntil: retentionDate.toISOString(),
    objectLockMode: 'COMPLIANCE', // 관리자조차 3년 만료 전 임의 삭제 불가
    status: 'LOCKED'
  };

  // 아카이브 영구 원장 파일 저장
  const recordPath = path.join(ARCHIVE_DIR, `${archiveId}.json`);
  fs.writeFileSync(recordPath, JSON.stringify(record, null, 2), 'utf-8');

  return record;
}

/**
 * 2. WORM 보관 무결성 검증 (해시 일치 & 락 만료 여부 확인)
 */
export function verifyWORMArchive(archiveId: string, currentFileContent: Buffer | string): {
  isValid: boolean;
  isLocked: boolean;
  daysRemaining: number;
  record: WORMArchiveRecord | null;
} {
  ensureArchiveDir();
  const recordPath = path.join(ARCHIVE_DIR, `${archiveId}.json`);
  if (!fs.existsSync(recordPath)) {
    return { isValid: false, isLocked: false, daysRemaining: 0, record: null };
  }

  const record: WORMArchiveRecord = JSON.parse(fs.readFileSync(recordPath, 'utf-8'));
  const buffer = Buffer.isBuffer(currentFileContent) ? currentFileContent : Buffer.from(currentFileContent);
  const currentSha256 = crypto.createHash('sha256').update(buffer).digest('hex');

  const isValid = record.fileSha256 === currentSha256;
  const now = new Date();
  const retentionUntil = new Date(record.retentionUntil);
  const msRemaining = retentionUntil.getTime() - now.getTime();
  const daysRemaining = Math.max(0, Math.ceil(msRemaining / (1000 * 60 * 60 * 24)));
  const isLocked = daysRemaining > 0 && record.status === 'LOCKED';

  return {
    isValid,
    isLocked,
    daysRemaining,
    record
  };
}

/**
 * 3. 3년 경과 서류 S3 Lifecycle 자동 파기 시뮬레이션
 */
export function simulateLifecyclePurge(simulatedCurrentYearOffset: number = 3): {
  purgedCount: number;
  purgedIds: string[];
} {
  ensureArchiveDir();
  const files = fs.readdirSync(ARCHIVE_DIR).filter(f => f.endsWith('.json'));
  const purgedIds: string[] = [];

  const simulatedNow = new Date();
  simulatedNow.setFullYear(simulatedNow.getFullYear() + simulatedCurrentYearOffset);

  for (const file of files) {
    const filePath = path.join(ARCHIVE_DIR, file);
    const record: WORMArchiveRecord = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    if (record.status === 'LOCKED' && new Date(record.retentionUntil) <= simulatedNow) {
      record.status = 'PURGED_BY_LIFECYCLE';
      fs.writeFileSync(filePath, JSON.stringify(record, null, 2), 'utf-8');
      purgedIds.push(record.archiveId);
    }
  }

  return {
    purgedCount: purgedIds.length,
    purgedIds
  };
}
