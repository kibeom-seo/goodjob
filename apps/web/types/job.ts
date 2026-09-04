export type PlatformSource = 'saramin' | 'jobkorea' | 'remember' | 'catch' | 'linkedin' | 'direct';

export type JobSourceType = 'CRAWLED' | 'DIRECT_HIRE';

export interface UserResumeProfile {
  targetRole: string; // 'frontend' | 'backend' | 'data' | 'any'
  targetRoleName: string;
  experienceLevel: string; // '신입' | '인턴' | '1년차' | '경력무관'
  skills: string[]; // ['React', 'TypeScript', 'Next.js', etc.]
  preferredLocation: string; // '서울' | '판교' | '재택'
}

export interface GeminiSummary {
  mission: string;
  requirements: string;
  cultureAndBenefits: string;
  generatedAt: string;
  keywordHighlights: string[];
}

export interface BlindReview {
  id: string;
  authorVerifiedOrg: string;
  authorRole: string;
  tenureYears: string;
  rating: number;
  content: string;
  likes: number;
  commentsCount: number;
  createdAt: string;
  isLikedByUser?: boolean;
}

export interface JobPosting {
  id: string;
  companyName: string;
  companyLogo: string;
  companyCategory: string;
  title: string;
  experienceLevel: string;
  location: string;
  salary: string;
  originUrl?: string;
  deadlineText: string;
  deadlineDateStr?: string; // '2026.09.15(화) 23:59'
  deadlineDaysLeft: number; // 남은 일수
  collectedSources: PlatformSource[];
  sourceSummaryText: string;
  sourceType?: JobSourceType;
  directApplyEmail?: string;
  tags: string[];
  isBookmarked: boolean;
  geminiSummary: GeminiSummary;
  blindReviews: BlindReview[];
  applicantCount: number;
  viewCount: number;
  matchScorePercent?: number; // 이력서 기반 계산된 매칭률
  matchedSkillHighlights?: string[]; // 내 이력서와 일치하는 핵심 기술태그
}
