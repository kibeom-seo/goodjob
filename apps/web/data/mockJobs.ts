import { JobPosting } from '../types/job';
import rawJobs from './jobs.json';

// 전체 마스터 공고 데이터
export const ALL_JOBS: JobPosting[] = rawJobs as unknown as JobPosting[];

// 초기 SSR/하이드레이션 최적화 번들 (Cloudflare Pages 25MiB 단일 파일 제한 방지 및 초고속 초기 렌더링)
export const MOCK_JOBS: JobPosting[] = ALL_JOBS.slice(0, 120);
