const fs = require('fs');

const mockCode = fs.readFileSync('apps/web/data/mockJobs.ts', 'utf8');
const match = mockCode.match(/export const MOCK_JOBS: JobPosting\[\] = (\[[\s\S]*?\]);/);
if (!match) throw new Error('Could not parse mockJobs');
const jobs = eval(match[1]);

// 1. Write jobs.json
fs.writeFileSync('apps/web/data/jobs.json', JSON.stringify(jobs, null, 2), 'utf8');

// 2. Write lightweight mockJobs.ts
const tsContent = `import { JobPosting } from '../types/job';
import rawJobs from './jobs.json';

export const MOCK_JOBS: JobPosting[] = rawJobs as unknown as JobPosting[];
`;

fs.writeFileSync('apps/web/data/mockJobs.ts', tsContent, 'utf8');
console.log(`Converted ${jobs.length} jobs to jobs.json and updated mockJobs.ts successfully.`);
