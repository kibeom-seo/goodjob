import { JobPosting } from '../types/job';
import rawJobs from './jobs.json';

export const MOCK_JOBS: JobPosting[] = rawJobs as unknown as JobPosting[];
