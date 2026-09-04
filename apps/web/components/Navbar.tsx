'use client';

import Link from 'next/link';
import { Bookmark, Sparkles, UserCircle, Building2, ThumbsUp, LogOut, MessageSquare, Briefcase, Activity, ShieldCheck } from 'lucide-react';
import { UserResumeProfile } from '../types/job';

interface NavbarProps {
  activeTab: 'jobs' | 'community';
  onTabChange: (tab: 'jobs' | 'community') => void;
  onOpenAuthModal: () => void;
  onOpenDirectJobModal: () => void;
  onOpenScrapDrawer: () => void;
  onOpenResumeModal: () => void;
  onOpenMonitoringModal: () => void;
  onOpenMyPageModal: () => void;
  scrapCount?: number;
  currentUser?: { name: string; email: string; avatar: string; provider: string } | null;
  resumeProfile?: UserResumeProfile | null;
  onLogout?: () => void;
}

export default function Navbar({ 
  activeTab,
  onTabChange,
  onOpenAuthModal, 
  onOpenDirectJobModal, 
  onOpenScrapDrawer,
  onOpenResumeModal,
  onOpenMonitoringModal,
  onOpenMyPageModal,
  scrapCount = 0,
  currentUser = null,
  resumeProfile = null,
  onLogout
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/70">
      {/* 상단 취준생 응원 띠배너 */}
      <div className="bg-gradient-to-r from-blue-600 via-[#3182F6] to-indigo-600 text-white text-xs font-medium py-1.5 px-4 text-center flex items-center justify-center gap-2 shadow-xs">
        <ThumbsUp className="w-3.5 h-3.5 animate-bounce" />
        <span>"취준생 여러분, 이미 충분히 잘하고 있어요! Good Job! 굿잡이 당신의 첫 합격을 응원합니다."</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* 굿잡 브랜드 로고 & 메인 탭 전환 */}
        <div className="flex items-center gap-6">
          <div 
            onClick={() => onTabChange('jobs')}
            className="flex items-center gap-3 cursor-pointer select-none"
          >
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#3182F6] to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-sm">
              G
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-slate-900">굿잡</span>
                <span className="text-xs font-bold px-1.5 py-0.5 rounded-md bg-blue-50 text-[#3182F6]">
                  GoodJob
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">좋은 일자리 큐레이션 & 선배 라운지</span>
            </div>
          </div>

          {/* 메인 2대 탭: 채용 큐레이션 vs 익명 커뮤니티 라운지 */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-2xl">
            <button
              onClick={() => onTabChange('jobs')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'jobs'
                  ? 'bg-white text-[#3182F6] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>스마트 채용</span>
            </button>

            <button
              onClick={() => onTabChange('community')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all relative ${
                activeTab === 'community'
                  ? 'bg-white text-emerald-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>익명 블라인드 라운지</span>
              <span className="w-2 h-2 rounded-full bg-rose-500" />
            </button>
          </nav>
        </div>

        {/* 네비게이션 액션 버튼들 */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* 모바일 탭 스위처 */}
          <div className="flex md:hidden items-center bg-slate-100 p-0.5 rounded-xl text-[11px] font-bold">
            <button
              onClick={() => onTabChange('jobs')}
              className={`px-2.5 py-1 rounded-lg ${activeTab === 'jobs' ? 'bg-white text-[#3182F6] shadow-xs' : 'text-slate-500'}`}
            >
              채용
            </button>
            <button
              onClick={() => onTabChange('community')}
              className={`px-2.5 py-1 rounded-lg ${activeTab === 'community' ? 'bg-white text-emerald-600 shadow-xs' : 'text-slate-500'}`}
            >
              라운지
            </button>
          </div>

          {/* 실시간 접속자 모니터링 관제 버튼 (운영자/관리자 뷰) */}
          <button
            onClick={onOpenMonitoringModal}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-xs transition-all"
            title="실시간 접속자 & 트래픽 관제 대시보드"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">LIVE 접속자</span>
          </button>

          {/* 최고 관리자 센터 바로가기 버튼 */}
          <Link
            href="/admin"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-xs transition-all"
            title="수집 사이트 및 DNS 관리자 센터"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>관리자 센터</span>
          </Link>

          {/* 기업 회원 직접 공고 등록 버튼 */}
          <button
            onClick={onOpenDirectJobModal}
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors border border-emerald-200/60"
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>기업 무료 공고</span>
          </button>

          {/* 취준생 내 스펙/이력서 설정 버튼 */}
          <button
            onClick={onOpenResumeModal}
            className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
              resumeProfile
                ? 'bg-blue-50 text-[#3182F6] border-blue-200'
                : 'bg-amber-50 text-amber-800 border-amber-200 animate-pulse'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#3182F6]" />
            <span>{resumeProfile ? '내 스펙' : '스펙 등록'}</span>
          </button>

          {/* 내 보관함 버튼 */}
          <button 
            onClick={onOpenScrapDrawer}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors relative"
          >
            <Bookmark className={`w-4 h-4 ${scrapCount > 0 ? 'text-[#3182F6] fill-current' : 'text-slate-400'}`} />
            <span className="hidden sm:inline">내 보관함</span>
            {scrapCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-[#3182F6] text-white text-[10px] font-bold">
                {scrapCount}
              </span>
            )}
          </button>

          {/* 유저 프로필 또는 3초 간편 로그인 */}
          {currentUser ? (
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <button 
                onClick={onOpenMyPageModal}
                className="flex items-center gap-2 bg-slate-50 hover:bg-blue-50 px-2.5 py-1.5 rounded-2xl border border-slate-200/80 hover:border-blue-200 transition-colors text-left"
                title="마이페이지 열기"
              >
                <img 
                  src={currentUser.avatar} 
                  alt={currentUser.name} 
                  className="w-6 h-6 rounded-full object-cover ring-1 ring-blue-400"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-800 hidden sm:inline leading-none">
                    {currentUser.name}
                  </span>
                  <span className="text-[10px] text-[#3182F6] font-semibold hidden sm:inline leading-tight">
                    마이페이지
                  </span>
                </div>
              </button>
              <button
                onClick={onLogout}
                title="로그아웃"
                className="p-1.5 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-slate-100 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuthModal}
              className="px-3 sm:px-4 py-2 bg-[#3182F6] hover:bg-blue-600 active:scale-95 text-white rounded-2xl text-xs sm:text-sm font-bold shadow-sm transition-all inline-flex items-center gap-1.5"
            >
              <UserCircle className="w-4 h-4" />
              <span>로그인</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
