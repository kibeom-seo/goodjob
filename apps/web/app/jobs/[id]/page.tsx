import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MOCK_JOBS } from '@/data/mockJobs';
import { 
  Building2, MapPin, DollarSign, Calendar, Clock, 
  ExternalLink, ArrowLeft, CheckCircle2, ShieldCheck, 
  Sparkles, Share2, Bookmark
} from 'lucide-react';
import CompanyBrandLogo from '@/components/CompanyBrandLogo';

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return MOCK_JOBS.map((job) => ({
    id: job.id,
  }));
}

// 동적 SEO 메타데이터 생성 (SSR)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = MOCK_JOBS.find(j => j.id === params.id) as any;

  if (!job) {
    return {
      title: '공고를 찾을 수 없습니다 | 굿잡 (GoodJob)',
      description: '요청하신 채용 공고가 마감되었거나 존재하지 않습니다.'
    };
  }

  return {
    title: `${job.title} - ${job.company_name} | 굿잡 AI 채용`,
    description: `[굿잡 AI 3줄 요약] ${job.summary_mission} | 근무지: ${job.location}`,
    openGraph: {
      title: `${job.title} (${job.company_name})`,
      description: job.summary_mission,
      type: 'article',
      url: `https://goodjob-83j.pages.dev/jobs/${params.id}`,
      siteName: '굿잡 (GoodJob)'
    }
  };
}

export default function JobDetailPage({ params }: Props) {
  const mockJob = MOCK_JOBS.find(j => j.id === params.id);

  if (!mockJob) {
    notFound();
  }

  // 매핑
  const job = {
    ...mockJob,
    company_name: mockJob.companyName,
    comp_logo: mockJob.companyLogo,
    summary_mission: mockJob.companyCategory,
    summary_requirements: mockJob.title
  } as any;

  // 관련 기술 태그 조회
  const tags = mockJob.tags || [];

  // 출처 조회
  const primaryOrigin = { source_platform: mockJob.collectedSources?.[0] || 'goodjob', origin_url: mockJob.originUrl || '#' };

  // 구글 검색 리치 스니펫 (JSON-LD JobPosting 스키마)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: `${job.summary_mission}\n\n[주요 요건]\n${job.summary_requirements}\n\n[복리후생]\n${job.summary_benefits}`,
    datePosted: job.posted_at,
    validThrough: job.deadline_at,
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: job.company_name,
      sameAs: job.corporate_domain ? `https://${job.corporate_domain}` : undefined,
      logo: job.company_logo
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: 'KR'
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* 구조화 데이터 주입 (검색 엔진 봇 크롤링 최적화) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 헤더 바 */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 px-6 py-3.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors">
          <ArrowLeft className="w-4 h-4" /> 굿잡 전체 공고 피드로 돌아가기
        </Link>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>굿잡 AI 교차 검증 완료 공고</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-8">
        <article className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-8 space-y-8">
          {/* 상단 기업 헤더 */}
          <div className="flex items-start justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <CompanyBrandLogo 
                logo={job.company_logo} 
                domain={job.corporate_domain}
                name={job.company_name} 
                size="xl" 
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-slate-900">{job.company_name}</span>
                  {job.is_claimed === 1 && (
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-800 rounded-full border border-amber-200">
                      기업 직접 인증 배지
                    </span>
                  )}
                </div>
                <h1 className="text-xl md:text-2xl font-black text-slate-900 mt-1 leading-tight">
                  {job.title}
                </h1>
              </div>
            </div>

            <div className="text-right shrink-0">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 text-xs font-bold">
                <Clock className="w-3.5 h-3.5" />
                {job.deadline_days_left <= 0 ? '오늘 마감' : `D-${job.deadline_days_left}`}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">{job.deadline_text}</div>
            </div>
          </div>

          {/* 핵심 메타 칩 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] text-slate-400">근무 지역</span>
              <div className="text-xs font-bold text-slate-800 mt-0.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" /> {job.location}
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] text-slate-400">경력 조건</span>
              <div className="text-xs font-bold text-slate-800 mt-0.5">{job.experience_level}</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] text-slate-400">급여 조건</span>
              <div className="text-xs font-bold text-slate-800 mt-0.5 flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-slate-400" /> {job.salary}
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] text-slate-400">근무 형태</span>
              <div className="text-xs font-bold text-blue-600 mt-0.5">
                {job.is_remote === 1 ? '풀 리모트 (100% 재택)' : job.is_flexible_work === 1 ? '유연근무/주4.5일' : '일반 출퇴근'}
              </div>
            </div>
          </div>

          {/* 굿잡 AI 3줄 요약 박스 */}
          <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-4">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              굿잡 AI 멀티 에이전트 3줄 요약
            </div>

            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-bold text-[10px] shrink-0 mt-0.5">미션</span>
                <p className="text-slate-800 font-medium">{job.summary_mission}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded bg-indigo-600 text-white font-bold text-[10px] shrink-0 mt-0.5">요건</span>
                <p className="text-slate-800 font-medium">{job.summary_requirements}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px] shrink-0 mt-0.5">복지</span>
                <p className="text-slate-800 font-medium">{job.summary_benefits}</p>
              </div>
            </div>
          </div>

          {/* 요구 기술 스택 칩 */}
          <div>
            <h3 className="text-xs font-bold text-slate-700 mb-2.5">요구 기술 스택 (Tech Stack)</h3>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((t, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs rounded-lg transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 하단 아웃링크 지원 바 */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              출처: <strong className="text-slate-700 capitalize">{primaryOrigin.source_platform}</strong> 원문 공고
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={primaryOrigin.origin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02]"
              >
                <span>원문 공고 확인하고 지원하기</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
