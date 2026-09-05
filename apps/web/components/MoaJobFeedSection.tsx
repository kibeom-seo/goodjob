'use client';

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  Heart, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  MapPin, 
  Coins, 
  Clock, 
  Share2, 
  CheckCircle2, 
  Send, 
  TrendingUp,
  Zap,
  ShieldCheck,
  Search,
  Calendar,
  AlertCircle,
  FileText,
  RotateCcw,
  Rocket
} from 'lucide-react';
import { JobPosting, UserResumeProfile } from '../types/job';
import { MOCK_JOBS } from '../data/mockJobs';
import AiReportModal from './AiReportModal';
import RealtimeTrendingSidebar from './RealtimeTrendingSidebar';
import CompanyBrandLogo from './CompanyBrandLogo';
import { useAlert } from '@/context/AlertContext';

interface MoaJobFeedSectionProps {
  onOpenAuthModal?: () => void;
  onOpenResumeModal?: () => void;
  additionalJobs?: JobPosting[];
  onScrapChange?: (bookmarkedList: JobPosting[]) => void;
  userProfile?: UserResumeProfile | null;
  currentUser?: { name: string; email: string; avatar: string; provider: string, role?: string } | null;
}

export default function MoaJobFeedSection({ 
  onOpenAuthModal, 
  onOpenResumeModal,
  additionalJobs = [], 
  onScrapChange,
  userProfile = null,
  currentUser = null
}: MoaJobFeedSectionProps) {
  const { showConfirm } = useAlert();
  const [jobs, setJobs] = useState<JobPosting[]>(MOCK_JOBS);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'match' | 'deadline' | 'recent'>(currentUser ? 'match' : 'recent');
  
  // 로그인이 변경될 때 정렬 순서 업데이트
  useEffect(() => {
    setSortBy(currentUser ? 'match' : 'recent');
  }, [currentUser]);
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({
    'real-job-1': true,
  });
  const [newComments, setNewComments] = useState<Record<string, string>>({});
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);
  const [selectedJobForReport, setSelectedJobForReport] = useState<JobPosting | null>(null);

  // 3대 고관여 필터 상태
  const [isRemoteOnly, setIsRemoteOnly] = useState(false);
  const [isFlexibleWorkOnly, setIsFlexibleWorkOnly] = useState(false);
  const [isMilitaryServiceOnly, setIsMilitaryServiceOnly] = useState(false);
  const [isLoadingJobs, setIsLoadingJobs] = useState(false);

  useEffect(() => {
    if (additionalJobs.length > 0) {
      setJobs(prev => {
        const existingIds = new Set(prev.map(j => j.id));
        const newOnes = additionalJobs.filter(j => !existingIds.has(j.id));
        return [...newOnes, ...prev];
      });
    }
  }, [additionalJobs]);

  // 백엔드 SQLite DB (/api/jobs) 실시간 연동
  useEffect(() => {
    let isCancelled = false;
    async function loadJobsFromDb() {
      setIsLoadingJobs(true);
      try {
        const params = new URLSearchParams();
        if (searchQuery.trim()) params.set('q', searchQuery.trim());
        if (isRemoteOnly) params.set('remote', '1');
        if (isFlexibleWorkOnly) params.set('flexible', '1');
        if (isMilitaryServiceOnly) params.set('military', '1');
        params.set('sort', sortBy === 'deadline' ? 'deadline' : sortBy === 'recent' ? 'latest' : 'match');
        params.set('limit', '2000'); // 운영 전체 공고 로딩 (리밋 해제)

        const res = await fetch(`/api/jobs?${params.toString()}`);
        if (!res.ok) throw new Error(`Fetch status: ${res.status}`);
        const data = await res.json();

        if (!isCancelled && data.success && Array.isArray(data.jobs) && data.jobs.length > 0) {
          const mappedJobs: JobPosting[] = data.jobs.map((dbJob: any) => ({
            id: dbJob.id,
            companyName: dbJob.company_name || '테크기업',
            companyLogo: dbJob.company_logo || 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100',
            corporateDomain: dbJob.corporate_domain,
            companyCategory: 'IT/인터넷',
            title: dbJob.title,
            experienceLevel: dbJob.experience_level || '신입/경력',
            location: dbJob.location || '서울',
            salary: dbJob.salary || '회사 내규에 따름',
            deadlineText: dbJob.deadline_text || '상시채용',
            deadlineDateStr: dbJob.deadline_at ? new Date(dbJob.deadline_at).toLocaleDateString('ko-KR') : undefined,
            deadlineDaysLeft: typeof dbJob.deadline_days_left === 'number' ? dbJob.deadline_days_left : 10,
            collectedSources: ['direct'],
            sourceSummaryText: dbJob.is_claimed ? '🏢 공식 채용 연동' : '원티드·사람인 통합 수집',
            sourceType: dbJob.is_claimed ? 'DIRECT_HIRE' : 'CRAWLED',
            tags: (() => {
              try {
                return JSON.parse(dbJob.keyword_highlights || '[]');
              } catch {
                return ['개발', '성장', '자율출퇴근'];
              }
            })(),
            isBookmarked: false,
            geminiSummary: {
              mission: dbJob.summary_mission || '최상의 서비스를 구축하기 위한 엔지니어링',
              requirements: dbJob.summary_requirements || 'CS 기초 역량 및 적극적인 커뮤니케이션 능력',
              cultureAndBenefits: dbJob.summary_benefits || '자율 출퇴근, 최신 장비 지원, 성장 지원',
              generatedAt: '오늘',
              keywordHighlights: (() => {
                try {
                  return JSON.parse(dbJob.keyword_highlights || '[]');
                } catch {
                  return ['개발', '신입', '기술스택'];
                }
              })()
            },
            blindReviews: [],
            applicantCount: dbJob.scrap_count || 18,
            viewCount: dbJob.view_count || 450,
            isBoosted: dbJob.is_boosted === 1,
            boostExpiresAt: dbJob.boost_expires_at,
            matchScorePercent: 92
          }));
          setJobs(mappedJobs);
        }
      } catch (e) {
        // 백엔드 통신 오류 시 기존 목업 데이터 유지
      } finally {
        if (!isCancelled) setIsLoadingJobs(false);
      }
    }

    loadJobsFromDb();
    return () => {
      isCancelled = true;
    };
  }, [isRemoteOnly, isFlexibleWorkOnly, isMilitaryServiceOnly, sortBy]);

  // 유저의 간편 이력서(스킬, 직무) 기반 실시간 AI 매칭률 동적 계산
  const calculateJobMatch = (job: JobPosting): { score: number; matchedSkills: string[] } => {
    if (!userProfile) {
      return { score: 0, matchedSkills: [] };
    }

    let matchPoints = 50; // 기본 기본 점수 (신입 대상)
    const matchedSkills: string[] = [];

    // 1. 보유 기술스택 매칭
    const jobText = `${job.title} ${job.tags.join(' ')} ${job.geminiSummary.requirements} ${job.geminiSummary.keywordHighlights.join(' ')}`.toLowerCase();
    userProfile.skills.forEach(skill => {
      if (jobText.includes(skill.toLowerCase())) {
        matchPoints += 12;
        matchedSkills.push(skill);
      }
    });

    // 2. 희망 직무 매칭
    if (userProfile.targetRole === 'frontend' && (jobText.includes('react') || jobText.includes('프론트') || jobText.includes('frontend'))) {
      matchPoints += 15;
    } else if (userProfile.targetRole === 'backend' && (jobText.includes('spring') || jobText.includes('백엔드') || jobText.includes('backend') || jobText.includes('java'))) {
      matchPoints += 15;
    } else if (userProfile.targetRole === 'data' && (jobText.includes('data') || jobText.includes('데이터') || jobText.includes('ai') || jobText.includes('python'))) {
      matchPoints += 15;
    }

    // 3. 지역 매칭
    if (userProfile.preferredLocation && job.location.includes(userProfile.preferredLocation.split('/')[0])) {
      matchPoints += 5;
    }

    const finalScore = Math.min(99, Math.max(60, matchPoints));
    return { score: finalScore, matchedSkills };
  };

  const handleToggleBookmark = (jobId: string) => {
    setJobs(prev => {
      const updated = prev.map(job => (job.id === jobId ? { ...job, isBookmarked: !job.isBookmarked } : job));
      if (onScrapChange) {
        onScrapChange(updated.filter(j => j.isBookmarked));
      }
      return updated;
    });
  };

  const toggleReviews = (jobId: string) => {
    setExpandedReviews(prev => ({ ...prev, [jobId]: !prev[jobId] }));
  };

  const handleLikeReview = (jobId: string, reviewId: string) => {
    setJobs(prev =>
      prev.map(job => {
        if (job.id !== jobId) return job;
        return {
          ...job,
          blindReviews: job.blindReviews.map(rev => {
            if (rev.id !== reviewId) return rev;
            const isLiked = rev.isLikedByUser;
            return {
              ...rev,
              likes: isLiked ? rev.likes - 1 : rev.likes + 1,
              isLikedByUser: !isLiked
            };
          })
        };
      })
    );
  };

  const handleAddReviewComment = (jobId: string) => {
    const text = (newComments[jobId] || '').trim();
    if (!text) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      authorVerifiedOrg: 'IT 기업 현직자 (굿잡 인증)',
      authorRole: '소프트웨어 엔지니어',
      tenureYears: '익명 선배',
      rating: 4.8,
      content: text,
      likes: 1,
      commentsCount: 0,
      createdAt: '방금 전',
      isLikedByUser: true
    };

    setJobs(prev =>
      prev.map(job => (job.id === jobId ? { ...job, blindReviews: [newRev, ...job.blindReviews] } : job))
    );
    setNewComments(prev => ({ ...prev, [jobId]: '' }));
    setExpandedReviews(prev => ({ ...prev, [jobId]: true }));
  };

  const handleShare = (job: JobPosting) => {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedNotification(`${job.companyName} 공고 링크가 복사되었습니다.`);
      setTimeout(() => setCopiedNotification(null), 2500);
    }
  };

  const handleSelectTrendingKeyword = (keyword: string) => {
    // 1. D-Day / 마감 관련
    if (keyword.includes('오늘') || keyword.includes('마감') || keyword.includes('23:59')) {
      setSelectedFilter('today');
      setSearchQuery('');
      return;
    }
    // 2. 신입 / 인턴 / 포트폴리오
    if (keyword.includes('신입') || keyword.includes('포트폴리오') || keyword.includes('인턴') || keyword.includes('비전공자')) {
      setSelectedFilter('newbie');
      if (keyword.includes('토스')) {
        setSearchQuery('토스');
      } else if (keyword.includes('카카오')) {
        setSearchQuery('카카오');
      } else {
        setSearchQuery('');
      }
      return;
    }
    // 3. 기업명 + 직무 추출
    if (keyword.includes('토스')) {
      setSearchQuery('토스');
      return;
    }
    if (keyword.includes('카카오')) {
      setSearchQuery('카카오');
      return;
    }
    if (keyword.includes('네이버')) {
      setSearchQuery('네이버');
      return;
    }
    if (keyword.includes('삼성')) {
      setSearchQuery('삼성');
      return;
    }
    if (keyword.includes('판교') || keyword.includes('5000')) {
      setSearchQuery('판교');
      return;
    }
    if (keyword.includes('재택')) {
      setSearchQuery('재택');
      return;
    }
    if (keyword.includes('Spring') || keyword.includes('백엔드')) {
      setSelectedCategory('backend');
      setSearchQuery('Spring');
      return;
    }
    if (keyword.includes('Next') || keyword.includes('풀스택') || keyword.includes('프론트')) {
      setSelectedCategory('frontend');
      setSearchQuery('Next');
      return;
    }

    setSearchQuery(keyword.split(' ')[0]);
  };

  // 활성화된 필터 또는 검색어가 존재하는지 판별
  const isAnyFilterActive = Boolean(
    searchQuery.trim() !== '' ||
    selectedFilter !== 'all' ||
    selectedCategory !== 'all' ||
    isRemoteOnly ||
    isFlexibleWorkOnly ||
    isMilitaryServiceOnly
  );

  // 모든 필터와 검색어를 원클릭으로 초기화하여 전체 공고 보기
  const handleResetAllFilters = () => {
    setSearchQuery('');
    setSelectedFilter('all');
    setSelectedCategory('all');
    setIsRemoteOnly(false);
    setIsFlexibleWorkOnly(false);
    setIsMilitaryServiceOnly(false);
  };

  const filteredJobs = jobs.filter(job => {
    const matchesFilter =
      selectedFilter === 'all' ||
      (selectedFilter === 'direct' && job.sourceType === 'DIRECT_HIRE') ||
      (selectedFilter === 'today' && job.deadlineDaysLeft <= 1) ||
      (selectedFilter === 'urgent' && job.deadlineDaysLeft <= 7) ||
      (selectedFilter === 'newbie' && (
        job.experienceLevel.includes('신입') || 
        job.experienceLevel.includes('무관') || 
        job.title.toLowerCase().includes('신입') ||
        job.title.toLowerCase().includes('인턴')
      ));

    const matchesCategory =
      selectedCategory === 'all' ||
      (selectedCategory === 'frontend' && (
        job.tags.some(t => t.toLowerCase().includes('react') || t.toLowerCase().includes('프론트') || t.toLowerCase().includes('frontend') || t.toLowerCase().includes('vue')) ||
        job.title.toLowerCase().includes('프론트') || job.title.toLowerCase().includes('frontend')
      )) ||
      (selectedCategory === 'backend' && (
        job.tags.some(t => t.toLowerCase().includes('백엔드') || t.toLowerCase().includes('backend') || t.toLowerCase().includes('spring') || t.toLowerCase().includes('node') || t.toLowerCase().includes('java')) ||
        job.title.toLowerCase().includes('백엔드') || job.title.toLowerCase().includes('backend') || job.title.toLowerCase().includes('server')
      )) ||
      (selectedCategory === 'data_ai' && (
        job.tags.some(t => t.toLowerCase().includes('데이터') || t.toLowerCase().includes('data') || t.toLowerCase().includes('ai') || t.toLowerCase().includes('ml')) ||
        job.title.toLowerCase().includes('데이터') || job.title.toLowerCase().includes('ai') || job.title.toLowerCase().includes('data')
      )) ||
      (selectedCategory === 'direct' && job.sourceType === 'DIRECT_HIRE');

    const matchesRemote = !isRemoteOnly || (
      job.location.includes('재택') || job.location.includes('리모트') || 
      job.tags.some(t => t.toLowerCase().includes('재택') || t.toLowerCase().includes('리모트')) ||
      (job.geminiSummary?.cultureAndBenefits || '').includes('재택') || (job.geminiSummary?.cultureAndBenefits || '').includes('리모트')
    );

    const matchesFlexible = !isFlexibleWorkOnly || (
      job.tags.some(t => t.includes('유연') || t.includes('자율') || t.includes('4.5') || t.includes('시차')) ||
      (job.geminiSummary?.cultureAndBenefits || '').includes('유연') || (job.geminiSummary?.cultureAndBenefits || '').includes('자율')
    );

    const matchesMilitary = !isMilitaryServiceOnly || (
      job.tags.some(t => t.includes('병역') || t.includes('전문연')) ||
      job.title.includes('병역') || job.title.includes('전문연')
    );

    const q = searchQuery.trim().toLowerCase();
    let matchesSearch = true;
    if (q !== '') {
      const tokens = q.split(/\s+/).filter(Boolean);
      // 토큰 중 하나라도 일치하면 검색 결과에 포함 (유연한 스마트 검색)
      matchesSearch = tokens.some(token =>
        job.companyName.toLowerCase().includes(token) ||
        job.title.toLowerCase().includes(token) ||
        job.location.toLowerCase().includes(token) ||
        job.tags.some(t => t.toLowerCase().includes(token)) ||
        (job.geminiSummary?.keywordHighlights || []).some(k => k.toLowerCase().includes(token)) ||
        (job.geminiSummary?.mission || '').toLowerCase().includes(token) ||
        (job.geminiSummary?.requirements || '').toLowerCase().includes(token)
      );
    }

    return matchesFilter && matchesCategory && matchesRemote && matchesFlexible && matchesMilitary && matchesSearch;
  });

  // 정렬 순서 계산: 부스팅 공고 최우선 + 매칭률순, 마감일 임박순(D-Day), 최신순
  const displayedJobs = [...filteredJobs].sort((a, b) => {
    // 1. 유료 프리미엄 부스팅 공고 무조건 최상단 골든 슬롯 우선 노출
    if (a.isBoosted && !b.isBoosted) return -1;
    if (!a.isBoosted && b.isBoosted) return 1;

    if (sortBy === 'match') {
      const scoreA = userProfile ? calculateJobMatch(a).score : (a.matchScorePercent || 85);
      const scoreB = userProfile ? calculateJobMatch(b).score : (b.matchScorePercent || 85);
      return scoreB - scoreA;
    }
    if (sortBy === 'deadline') {
      return a.deadlineDaysLeft - b.deadlineDaysLeft;
    }
    if (sortBy === 'recent') {
      const idA = parseInt(a.id.replace(/[^0-9]/g, '')) || 0;
      const idB = parseInt(b.id.replace(/[^0-9]/g, '')) || 0;
      return idB - idA;
    }
    return 0;
  });

  return (
    <section id="goodjob-feed" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {copiedNotification && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-xl">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{copiedNotification}</span>
        </div>
      )}

      {/* 헤더 & 검색바 */}
      <div className="flex flex-col gap-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#3182F6] text-xs font-semibold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3182F6] animate-pulse" />
              굿잡(GoodJob) AI 실시간 큐레이션 · 마감 D-Day 실시간 집계
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              오늘의 굿잡 채용 큐레이션
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              자소서 제출 기한을 놓치지 않도록 정확한 마감일정과 실시간 합격 매칭률을 제공합니다.
            </p>
          </div>

          <div className="relative w-full md:w-96">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="기업명, 직무, 기술스택, 지역 검색..."
                className="w-full pl-10 pr-8 py-2.5 text-xs sm:text-sm bg-white border border-slate-200/80 rounded-2xl focus:outline-none focus:border-[#3182F6] focus:ring-4 focus:ring-[#3182F6]/10 transition-all text-slate-900 shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  ×
                </button>
              )}
            </div>

            {/* 실시간 연관검색어 (Related Searches) 추천 칩 */}
            <div className="flex items-center gap-1.5 mt-2 overflow-x-auto text-[11px] text-slate-500">
              <span className="font-bold text-slate-400 shrink-0">연관:</span>
              {[
                { label: '🔥 토스 프론트엔드', q: '토스' },
                { label: '🚀 당근 백엔드', q: '당근' },
                { label: '⚡ React 신입', q: 'React' },
                { label: '🌱 Spring 부트', q: 'Spring' },
                { label: '🤖 AI/ML 엔지니어', q: 'AI' },
                { label: '🏢 네이버', q: '네이버' }
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSearchQuery(item.q)}
                  className="px-2 py-0.5 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-600 transition-colors shrink-0 whitespace-nowrap"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 유저 맞춤 스펙 상태 안내 배너 */}
        {!userProfile && (
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200/70 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#3182F6] text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">
                  취준생님, 내 보유 기술스택을 등록하고 '진짜 AI 매칭률'을 확인하세요!
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                  1분 만에 스킬(React, Spring 등)을 선택하면 303개 공고 중 나와 가장 잘 맞는 공고를 계산해 드립니다.
                </p>
              </div>
            </div>
            <button
              onClick={onOpenResumeModal}
              className="px-4 py-2 bg-[#3182F6] hover:bg-blue-600 text-white text-xs font-bold rounded-xl shrink-0 transition-all shadow-xs"
            >
              내 스펙 1분 등록하기 ↗
            </button>
          </div>
        )}
      </div>

      {/* 2열 레이아웃: 좌측 네이버 스타일 실시간 검색어(PC)/롤링 티커(모바일) + 우측 채용 피드 */}
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* 좌측 실시간 급상승 검색어 순위 사이드바 */}
        <RealtimeTrendingSidebar 
          onSelectKeyword={handleSelectTrendingKeyword}
          onSelectFilter={(f) => {
            if (f === 'all') handleResetAllFilters();
            if (f === 'urgent') setSelectedFilter('today');
            if (f === 'matching') onOpenResumeModal?.();
          }}
        />

        {/* 우측 메인 공고 피드 영역 */}
        <div className="flex-1 min-w-0 w-full space-y-6">
          {/* 취준생 중심 실질 필터 칩 */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-200/60">
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-medium pb-1 sm:pb-0">
            <button
              onClick={handleResetAllFilters}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                !isAnyFilterActive
                  ? 'bg-slate-900 text-white font-semibold shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
              title="모든 검색과 필터를 해제하고 전체 공고 보기"
            >
              전체 ({filteredJobs.length}/{jobs.length})
            </button>
            
            <button
              onClick={() => setSelectedFilter('today')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl transition-all ${
                selectedFilter === 'today'
                  ? 'bg-rose-600 text-white font-semibold shadow-xs animate-pulse'
                  : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200/80'
              }`}
            >
              <AlertCircle className="w-3 h-3 text-rose-500" />
              <span>오늘 23:59 마감 🔥</span>
            </button>

            <button
              onClick={() => setSelectedFilter('urgent')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl transition-all ${
                selectedFilter === 'urgent'
                  ? 'bg-amber-600 text-white font-semibold shadow-xs'
                  : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200/80'
              }`}
            >
              <Clock className="w-3 h-3" />
              <span>마감 임박 (D-7)</span>
            </button>

            <button
              onClick={() => setSelectedFilter('newbie')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl transition-all ${
                selectedFilter === 'newbie'
                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200/80'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>신입/인턴 우대</span>
            </button>

            <button
              onClick={() => setSelectedFilter('direct')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl transition-all ${
                selectedFilter === 'direct'
                  ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
              }`}
            >
              <Building2 className="w-3 h-3" />
              <span>기업 직접등록</span>
            </button>
          </div>

          <div className="flex items-center gap-1 text-xs">
            {[
              { id: 'all', label: '전체 직군' },
              { id: 'frontend', label: '프론트엔드' },
              { id: 'backend', label: '백엔드' },
              { id: 'data_ai', label: '데이터/AI' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  selectedCategory === cat.id ? 'text-[#3182F6] bg-blue-50 font-bold' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 3대 고관여 필터 칩 (독립 토글 & SQLite DB 실시간 연동) */}
          <div className="w-full flex items-center gap-2 pt-2.5 border-t border-slate-100 overflow-x-auto text-xs">
            <span className="text-slate-400 font-bold shrink-0 text-[11px] hidden sm:inline">🎯 3대 고관여 필터:</span>
            <button
              onClick={() => setIsRemoteOnly(!isRemoteOnly)}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 shrink-0 ${
                isRemoteOnly
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200'
              }`}
            >
              <span>🏡 풀 리모트/재택</span>
              {isRemoteOnly && <span className="text-[10px] bg-white/20 px-1 rounded font-mono">ON</span>}
            </button>

            <button
              onClick={() => setIsFlexibleWorkOnly(!isFlexibleWorkOnly)}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 shrink-0 ${
                isFlexibleWorkOnly
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200'
              }`}
            >
              <span>⏰ 유연근무/주4.5일</span>
              {isFlexibleWorkOnly && <span className="text-[10px] bg-white/20 px-1 rounded font-mono">ON</span>}
            </button>

            <button
              onClick={() => setIsMilitaryServiceOnly(!isMilitaryServiceOnly)}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 shrink-0 ${
                isMilitaryServiceOnly
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
              }`}
            >
              <span>🎖️ 병역특례/전문연</span>
              {isMilitaryServiceOnly && <span className="text-[10px] bg-white/20 px-1 rounded font-mono">ON</span>}
            </button>

            {isLoadingJobs && (
              <span className="text-[11px] text-blue-600 animate-pulse font-bold ml-2">
                ⚡ DB 실시간 쿼리 중...
              </span>
            )}
          </div>
        </div>

        {/* 정렬 옵션 바: 매칭률순 (추천) / 마감일 임박순 (D-Day) / 최신순 */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-1 py-1">
          <div className="flex items-center gap-2.5 text-xs text-slate-500">
            <div>
              총 <strong className="text-slate-900 font-bold">{displayedJobs.length}</strong>개의 공고
              {userProfile && sortBy === 'match' && (
                <span className="text-[#3182F6] font-semibold ml-1.5">
                  (내 스펙 일치도 실시간 반영 중)
                </span>
              )}
            </div>

            {isAnyFilterActive && (
              <button
                onClick={handleResetAllFilters}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 active:scale-95 border border-rose-200/90 rounded-xl transition-all shadow-xs"
                title="모든 검색어와 필터를 초기화하고 전체 채용 공고로 돌아갑니다"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>전체 공고 보기 (필터 초기화)</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-400 font-medium hidden sm:inline">정렬:</span>
            
            {/* 1. 매칭률순 버튼 */}
            <button
              onClick={() => {
                if (!userProfile) {
                  showConfirm(
                    '취준생 맞춤 스펙 등록 안내',
                    '내 스펙(보유 기술스택)을 1분 만에 등록하시면 기술스택 일치도 기반 진짜 AI 매칭률순으로 정렬됩니다.\n지금 스펙을 등록하시겠습니까?',
                    () => {
                      onOpenResumeModal?.();
                    }
                  );
                  return;
                }
                setSortBy('match');
              }}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold transition-all ${
                sortBy === 'match'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>매칭률순</span>
            </button>

            {/* 2. 마감일 임박순 버튼 */}
            <button
              onClick={() => setSortBy('deadline')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold transition-all ${
                sortBy === 'deadline'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>마감일순 (D-Day)</span>
            </button>

            {/* 3. 최신순 버튼 */}
            <button
              onClick={() => setSortBy('recent')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                sortBy === 'recent'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              최신순
            </button>
          </div>
        </div>

        {/* 공고 카드 피드 */}
        <div className="flex flex-col gap-6">
        {displayedJobs.map(job => {
          const isReviewsExpanded = !!expandedReviews[job.id];
          const isDirectHire = job.sourceType === 'DIRECT_HIRE';
          const matchResult = calculateJobMatch(job);

          const isUrgent = job.deadlineDaysLeft <= 3;
          const isToday = job.deadlineDaysLeft <= 1;

          return (
            <article
              key={job.id}
              className={`group relative bg-white rounded-3xl border transition-all duration-300 p-6 sm:p-8 ${
                job.isBoosted 
                  ? 'border-amber-300 ring-2 ring-amber-400/30 bg-gradient-to-b from-amber-50/20 to-white shadow-[0_8px_30px_rgb(251,191,36,0.12)]' 
                  : isDirectHire 
                  ? 'border-emerald-200/90 ring-1 ring-emerald-500/10 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)]' 
                  : 'border-slate-100/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_30px_-4px_rgba(15,23,42,0.08)]'
              }`}
            >
              {/* 상단 배지 헤더 (마감일정 & 진짜 AI 매칭률 & 부스팅 뱃지) */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 flex-wrap">
                  {/* B2B 유료 부스팅 골든 뱃지 */}
                  {job.isBoosted && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-black shadow-xs animate-pulse">
                      <Rocket className="w-3.5 h-3.5 text-amber-200" />
                      <span>프리미엄 부스팅</span>
                    </div>
                  )}

                  {isDirectHire ? (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200/70">
                      <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>기업 직접 등록 (굿잡 인증 채용)</span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-[#3182F6] text-xs font-semibold border border-blue-100/80">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#3182F6]" />
                      <span>굿잡 AI 중복 정제 완료</span>
                    </div>
                  )}

                  {/* 마감 일정 뱃지: 취준생 맞춤 D-Day & 상세 마감시각 */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                    isToday
                      ? 'bg-rose-500 text-white border-rose-600 animate-pulse shadow-xs'
                      : isUrgent
                      ? 'bg-rose-50 text-rose-700 border-rose-200'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{job.deadlineText}</span>
                    {job.deadlineDateStr && (
                      <span className={`text-[11px] font-normal pl-1 border-l ${isToday ? 'border-rose-300 text-rose-100' : 'border-slate-300 text-slate-500'}`}>
                        {job.deadlineDateStr}
                      </span>
                    )}
                  </div>

                  {/* 진짜 이력서 기반 실시간 매칭률 배지 */}
                  {userProfile ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                      <span>내 스펙 매칭률 {matchResult.score}%</span>
                      {matchResult.matchedSkills.length > 0 && (
                        <span className="text-[10px] bg-emerald-200/60 text-emerald-900 px-1.5 py-0.2 rounded">
                          {matchResult.matchedSkills.slice(0, 2).join(', ')} 일치
                        </span>
                      )}
                    </span>
                  ) : (
                    <button
                      onClick={onOpenResumeModal}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-500 hover:text-[#3182F6] text-xs font-medium transition-colors"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>스펙 등록 시 매칭률 확인</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-1">
                  <button onClick={() => handleShare(job)} className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleToggleBookmark(job.id)}
                    className={`p-2 rounded-xl transition-colors ${job.isBookmarked ? 'text-[#3182F6] bg-blue-50' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'}`}
                  >
                    {job.isBookmarked ? <BookmarkCheck className="w-4 h-4 fill-current" /> : <Bookmark className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* 회사 및 직무 정보 */}
              <div className="flex items-start gap-4 mb-5">
                <CompanyBrandLogo 
                  logo={job.companyLogo} 
                  domain={job.corporateDomain} 
                  name={job.companyName} 
                  size="lg" 
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-slate-900">{job.companyName}</span>
                    <span className="text-xs text-slate-400 font-medium">{job.companyCategory}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-[#3182F6] transition-colors">
                    <a href={`/jobs/${job.id}`} className="hover:underline">
                      {job.title}
                    </a>
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2 text-xs sm:text-sm text-slate-600">
                    <span className="flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5 text-slate-400" />{job.experienceLevel}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-slate-400" />{job.location}</span>
                    <span className="flex items-center gap-1.5 font-bold text-slate-800"><Coins className="w-3.5 h-3.5 text-[#3182F6]" />{job.salary}</span>
                  </div>
                </div>
              </div>

              {/* 기술스택 태그 */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {job.tags.map(tag => {
                  const isUserMatched = userProfile?.skills.some(s => s.toLowerCase() === tag.toLowerCase());
                  return (
                    <span 
                      key={tag} 
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors ${
                        isUserMatched 
                          ? 'bg-blue-50 text-[#3182F6] border-blue-200 font-bold'
                          : 'bg-slate-50 text-slate-600 border-slate-200/50'
                      }`}
                    >
                      {isUserMatched ? `✓ ${tag}` : tag}
                    </span>
                  );
                })}
              </div>

              {/* 취준생 시간 절약 3줄 요약 */}
              <div className="rounded-2xl bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF]/60 to-[#F1F5F9] border border-blue-100/70 p-4 sm:p-5 mb-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#3182F6] to-indigo-600 flex items-center justify-center text-white shadow-xs">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight">
                      {isDirectHire ? '기업 담당자 작성 핵심 3줄 브리핑' : '굿잡 AI 공고 3줄 요약 (취준생 필수 정보)'}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-[#3182F6]">
                      핵심만 쏙
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 hidden sm:inline-block">{job.geminiSummary.generatedAt}</span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="px-1.5 py-0.5 rounded bg-blue-100 text-[#3182F6] text-[10px] font-bold shrink-0 mt-0.5">미션</span>
                    <span>{job.geminiSummary.mission}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-700 text-[10px] font-bold shrink-0 mt-0.5">요건</span>
                    <span>{job.geminiSummary.requirements}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 text-[10px] font-bold shrink-0 mt-0.5">처우</span>
                    <span>{job.geminiSummary.cultureAndBenefits}</span>
                  </li>
                </ul>

                <div className="flex items-center gap-1.5 mt-3 pt-2.5 border-t border-blue-100/60 flex-wrap">
                  <span className="text-[11px] font-medium text-slate-400">키워드:</span>
                  {job.geminiSummary.keywordHighlights.map(kw => (
                    <span key={kw} className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#3182F6] bg-white px-2 py-0.5 rounded-md border border-blue-200/50">
                      <Zap className="w-2.5 h-2.5" />{kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* 익명 조언 라운지 */}
              <div className="pt-2">
                <div className="flex items-center justify-between pb-3">
                  <button
                    onClick={() => toggleReviews(job.id)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 hover:text-[#3182F6] transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>{isDirectHire ? '채용담당자 Q&A 및 익명 썰' : '선배 현직자 익명 조언 라운지'}</span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                      {job.blindReviews.length}개 답변
                    </span>
                    {isReviewsExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  <span className="text-[11px] text-slate-400">굿잡 검증 완료</span>
                </div>

                {isReviewsExpanded && (
                  <div className="space-y-3 mt-2">
                    {job.blindReviews.map(review => (
                      <div key={review.id} className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 text-xs sm:text-sm">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              {review.authorVerifiedOrg}
                            </span>
                            <span className="text-slate-400 text-xs">{review.authorRole} · {review.tenureYears}</span>
                          </div>
                          <span className="text-[11px] text-slate-400">{review.createdAt}</span>
                        </div>
                        <p className="text-slate-700 leading-relaxed font-normal mb-3">{review.content}</p>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-200/50">
                          <button
                            onClick={() => handleLikeReview(job.id, review.id)}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                              review.isLikedByUser ? 'bg-rose-50 text-rose-600' : 'text-slate-500 hover:bg-slate-200/60'
                            }`}
                          >
                            <Heart className={`w-3.5 h-3.5 ${review.isLikedByUser ? 'fill-current' : ''}`} />
                            <span>도움돼요 {review.likes}</span>
                          </button>
                          <span className="inline-flex items-center gap-1 text-slate-400 text-xs">
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>댓글 {review.commentsCount}</span>
                          </span>
                        </div>
                      </div>
                    ))}

                    <div className="flex items-center gap-2 mt-2 pt-1">
                      <input
                        type="text"
                        value={newComments[job.id] || ''}
                        onChange={e => setNewComments(prev => ({ ...prev, [job.id]: e.target.value }))}
                        onKeyDown={e => { if (e.key === 'Enter') handleAddReviewComment(job.id); }}
                        placeholder="이 회사에 대해 궁금한 점이나 서류/면접 팁을 물어보세요..."
                        className="flex-1 px-3.5 py-2 text-xs bg-slate-50 border border-slate-200/70 rounded-xl focus:outline-none focus:border-[#3182F6] focus:bg-white text-slate-800 placeholder:text-slate-400"
                      />
                      <button
                        onClick={() => handleAddReviewComment(job.id)}
                        className="px-3.5 py-2 bg-[#3182F6] hover:bg-blue-600 text-white rounded-xl text-xs font-bold inline-flex items-center gap-1 shrink-0 transition-colors"
                      >
                        <Send className="w-3 h-3" />
                        <span>질문 등록</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* 하단 지원 영역 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-5 mt-5 border-t border-slate-100">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span>지원자 {job.applicantCount}명</span>
                  <span>·</span>
                  <span>조회수 {job.viewCount.toLocaleString()}회</span>
                  {isDirectHire && job.directApplyEmail && (
                    <span className="text-emerald-600 font-bold">📩 직접접수: {job.directApplyEmail}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedJobForReport(job)}
                    className="px-3 py-2 rounded-xl text-xs font-bold text-[#3182F6] hover:bg-blue-50 bg-blue-50/50 border border-blue-200/60 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#3182F6]" />
                    <span>AI 합격 리포트</span>
                  </button>

                  {!isDirectHire && (
                    <a
                      href={job.originUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 inline-flex items-center gap-1.5 transition-colors border border-slate-200/70"
                    >
                      <span>원문 공고</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  )}
                  <button
                    onClick={onOpenAuthModal}
                    className={`w-full sm:w-auto px-5 py-2.5 ${
                      isDirectHire ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-[#3182F6] hover:bg-blue-600'
                    } active:scale-[0.98] text-white rounded-2xl text-xs sm:text-sm font-bold shadow-sm inline-flex items-center justify-center gap-2 transition-all`}
                  >
                    <span>{isDirectHire ? '기업 다이렉트 지원' : '3초 원클릭 간편 지원'}</span>
                    <Zap className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
        </div>
      </div>
    </div>

      {/* AI 심층 분석 리포트 모달 */}
      <AiReportModal
        isOpen={!!selectedJobForReport}
        onClose={() => setSelectedJobForReport(null)}
        job={selectedJobForReport}
        userProfile={userProfile}
        onOpenResumeModal={() => {
          setSelectedJobForReport(null);
          if (onOpenResumeModal) onOpenResumeModal();
        }}
      />
    </section>
  );
}
