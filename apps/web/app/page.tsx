'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MoaJobFeedSection from '../components/MoaJobFeedSection';
import AnonymousCommunitySection from '../components/AnonymousCommunitySection';
import SocialLoginModal from '../components/SocialLoginModal';
import DirectJobPostingModal from '../components/DirectJobPostingModal';
import ScrapDrawerModal from '../components/ScrapDrawerModal';
import ResumeSetupModal from '../components/ResumeSetupModal';
import MonitoringModal from '../components/MonitoringModal';
import MyPageModal from '../components/MyPageModal';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { JobPosting, UserResumeProfile } from '../types/job';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'jobs' | 'community'>('jobs');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isDirectJobModalOpen, setIsDirectJobModalOpen] = useState(false);
  const [isScrapDrawerOpen, setIsScrapDrawerOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isMonitoringModalOpen, setIsMonitoringModalOpen] = useState(false);
  const [isMyPageModalOpen, setIsMyPageModalOpen] = useState(false);
  const [customJobs, setCustomJobs] = useState<JobPosting[]>([]);
  const [bookmarkedJobs, setBookmarkedJobs] = useState<JobPosting[]>([]);
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string; avatar: string; provider: string, role?: string } | null>(null);
  const [userProfile, setUserProfile] = useState<UserResumeProfile | null>(null);

  // 마운트 시 소셜 로그인 세션 확인 및 OAuth 리디렉션 처리
  React.useEffect(() => {
    fetch('/api/auth/me')
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          setCurrentUser(data.user);
        }
      })
      .catch(err => console.error('Failed to fetch auth session:', err));

    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const authSuccess = urlParams.get('auth_success');
      const authNotice = urlParams.get('auth_notice');

      if (authSuccess) {
        const providerName = authSuccess === 'google' ? '구글' : '네이버';
        alert(`🎉 ${providerName} 계정으로 성공적으로 로그인되었습니다!`);
        window.history.replaceState({}, document.title, window.location.pathname);
      } else if (authNotice) {
        alert('ℹ️ 클라우드 정식 배포 후 발급된 URL을 콘솔에 등록하시면 실시간 연동됩니다.\n현재는 [⚡ 빠른 테스트 로그인]으로 즉시 체험하실 수 있습니다.');
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }
  }, []);

  const handleDirectJobSubmit = (newJob: JobPosting) => {
    setCustomJobs(prev => [newJob, ...prev]);
  };

  const handleLoginSuccess = (user: { name: string; email: string; avatar: string; provider: string }) => {
    setCurrentUser(user);
    if (!userProfile) {
      setTimeout(() => setIsResumeModalOpen(true), 500);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (e) {}
    setCurrentUser(null);
    setUserProfile(null);
    alert('로그아웃되었습니다.');
  };

  const handleRemoveBookmark = (id: string) => {
    setBookmarkedJobs(prev => prev.filter(j => j.id !== id));
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* 굿잡 상단 네비게이션 (채용 vs 익명 라운지 듀얼 탭 & LIVE 모니터링) */}
      <Navbar 
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        onOpenAuthModal={() => setIsAuthModalOpen(true)} 
        onOpenDirectJobModal={() => setIsDirectJobModalOpen(true)}
        onOpenScrapDrawer={() => setIsScrapDrawerOpen(true)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenMonitoringModal={() => setIsMonitoringModalOpen(true)}
        onOpenMyPageModal={() => setIsMyPageModalOpen(true)}
        scrapCount={bookmarkedJobs.length}
        currentUser={currentUser}
        resumeProfile={userProfile}
        onLogout={handleLogout}
      />

      {/* 탭 1: 스마트 채용 큐레이션 (마감 D-Day + 진짜 AI 매칭률) */}
      {activeTab === 'jobs' && (
        <MoaJobFeedSection 
          onOpenAuthModal={() => setIsAuthModalOpen(true)} 
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          additionalJobs={customJobs}
          onScrapChange={(list) => setBookmarkedJobs(list)}
          userProfile={userProfile}
          currentUser={currentUser}
        />
      )}

      {/* 탭 2: 블라인드 스타일 취준생 & 현직자 익명 라운지 커뮤니티 */}
      {activeTab === 'community' && (
        <AnonymousCommunitySection />
      )}

      {/* 3초 원클릭 소셜 로그인 팝업 모달 */}
      <SocialLoginModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onLoginSuccess={handleLoginSuccess}
      />

      {/* 1분 초간단 취준생 스펙/이력서 등록 모달 */}
      <ResumeSetupModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        currentProfile={userProfile}
        onSaveProfile={(profile) => setUserProfile(profile)}
      />

      {/* 실시간 접속자 & 트래픽 관제 대시보드 모달 */}
      <MonitoringModal
        isOpen={isMonitoringModalOpen}
        onClose={() => setIsMonitoringModalOpen(false)}
      />

      {/* 취준생 마이페이지 모달 (보관함 D-Day 정렬, 스펙 관리, 커뮤니티 활동) */}
      <MyPageModal
        isOpen={isMyPageModalOpen}
        onClose={() => setIsMyPageModalOpen(false)}
        currentUser={currentUser}
        resumeProfile={userProfile}
        bookmarkedJobs={bookmarkedJobs}
        onRemoveBookmark={handleRemoveBookmark}
        onOpenResumeModal={() => {
          setIsMyPageModalOpen(false);
          setIsResumeModalOpen(true);
        }}
        onOpenCommunityTab={() => setActiveTab('community')}
      />

      {/* 기업 직접 공고 등록 팝업 모달 */}
      <DirectJobPostingModal
        isOpen={isDirectJobModalOpen}
        onClose={() => setIsDirectJobModalOpen(false)}
        onSubmit={handleDirectJobSubmit}
      />

      {/* 내 관심 공고 보관함 슬라이드 드로어 */}
      <ScrapDrawerModal
        isOpen={isScrapDrawerOpen}
        onClose={() => setIsScrapDrawerOpen(false)}
        bookmarkedJobs={bookmarkedJobs}
        onRemoveBookmark={handleRemoveBookmark}
      />

      {/* 하단 푸터 */}
      <footer className="w-full border-t border-slate-200/60 py-10 mt-16 text-center text-xs text-slate-400">
        <div className="max-w-5xl mx-auto px-4 space-y-2">
          <p className="font-bold text-slate-600">굿잡 (GoodJob) - 당신의 첫 합격을 응원하는 스마트 채용 큐레이션 & 굿잡 라운지</p>
          <p>중복 공고를 AI로 정제하고 취준생의 이력서 스펙 기반 실시간 매칭률과 익명 커뮤니티를 제공합니다.</p>
          <p className="text-[11px] text-slate-400">© 2026 GoodJob. All rights reserved. 취준생 여러분, Good Job!</p>
        </div>
      </footer>

      {/* 우측 하단 플로팅 TOP 스크롤 버튼 */}
      <ScrollToTopButton />
    </main>
  );
}
