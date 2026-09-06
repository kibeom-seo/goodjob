const fs = require('fs');
const path = require('path');

const mockCode = fs.readFileSync('apps/web/data/mockJobs.ts', 'utf8');
const match = mockCode.match(/export const MOCK_JOBS: JobPosting\[\] = (\[[\s\S]*?\]);/);
if (!match) throw new Error('Could not parse mockJobs');
const existingJobs = eval(match[1]);

const unifiedPath = 'crawlers/data/unified_jobs.json';
let unifiedJobs = [];
if (fs.existsSync(unifiedPath)) {
  unifiedJobs = JSON.parse(fs.readFileSync(unifiedPath, 'utf8'));
}

const existingIds = new Set(existingJobs.map(j => j.id));

let addedCount = 0;
for (const uj of unifiedJobs) {
  const newId = uj.id || ('goodjob-' + (existingJobs.length + 1));
  if (!existingIds.has(newId)) {
    existingJobs.push({
      id: newId,
      companyName: uj.companyName || uj.companyRaw || '테크기업',
      companyLogo: uj.companyLogo || 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100',
      corporateDomain: uj.corporateDomain,
      companyCategory: 'IT/인터넷',
      title: uj.title,
      experienceLevel: uj.experienceLevel || '신입/경력',
      location: uj.location || '서울',
      salary: uj.salary || '회사 내규에 따름',
      deadlineText: uj.deadlineText || '상시채용',
      deadlineDaysLeft: 14,
      collectedSources: uj.collectedSources || ['saramin'],
      sourceSummaryText: uj.sourceSummaryText || '굿잡 AI 검증 완료',
      sourceType: 'CRAWLED',
      tags: uj.collectedSources || ['개발', '채용'],
      isBookmarked: false,
      geminiSummary: {
        mission: '[' + (uj.sourceSummaryText || '굿잡 AI 검증') + '] ' + uj.title,
        requirements: uj.title,
        cultureAndBenefits: '4대보험, 유연근무제, 최신 개발 장비 지원',
        generatedAt: '오늘',
        keywordHighlights: uj.collectedSources || ['개발', '신입', '기술스택']
      },
      blindReviews: [],
      applicantCount: 12,
      viewCount: 320,
      isBoosted: false,
      matchScorePercent: 90
    });
    existingIds.add(newId);
    addedCount++;
  }
}

console.log(`Total jobs now in mockJobs: ${existingJobs.length} (added ${addedCount} new jobs)`);

const newFileContent = `import { JobPosting } from '../types/job';\n\nexport const MOCK_JOBS: JobPosting[] = ${JSON.stringify(existingJobs, null, 2)};\n`;
fs.writeFileSync('apps/web/data/mockJobs.ts', newFileContent, 'utf8');
