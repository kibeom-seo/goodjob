'use client';

import React, { useState } from 'react';
import { 
  X, Bookmark, Sparkles, MessageSquare, 
  Trash2, Briefcase, MapPin, Calendar,
  ArrowUpRight, ShieldCheck
} from 'lucide-react';
import { JobPosting, UserResumeProfile } from '../types/job';

interface MyPageModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: { name: string; email: string; avatar: string; provider: string } | null;
  resumeProfile: UserResumeProfile | null;
  bookmarkedJobs: JobPosting[];
  onRemoveBookmark: (id: string) => void;
  onOpenResumeModal: () => void;
  onOpenCommunityTab: () => void;
}

export default function MyPageModal({
  isOpen,
  onClose,
  currentUser,
  resumeProfile,
  bookmarkedJobs,
  onRemoveBookmark,
  onOpenResumeModal,
  onOpenCommunityTab,
}: MyPageModalProps) {
  const [activeSubTab, setActiveSubTab] = useState<'bookmarks' | 'resume' | 'activity'>('bookmarks');
  const [sortByDeadline, setSortByDeadline] = useState(true);

  if (!isOpen) return null;

  const sortedBookmarks = [...bookmarkedJobs].sort((a, b) => {
    if (sortByDeadline) {
      return a.deadlineDaysLeft - b.deadlineDaysLeft;
    }
    return 0;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="닫기"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img 
                src={currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'} 
                alt="Profile" 
                className="w-16 h-16 rounded-2xl object-cover ring-2 ring-blue-400/80 shadow-md"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-black">{currentUser?.name || '취준생 회원'}</h2>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    {currentUser?.provider === 'kakao' ? '🟡 카카오' : currentUser?.provider === 'naver' ? '🟢 네이버' : '🔵 구글'} 간편연동
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> 인증 취준생
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1 font-mono">{currentUser?.email || 'user@goodjob.local'}</p>
                <div className="flex items-center gap-3 mt-2 text-xs text-slate-300">
                  <span>스크랩 공고 <strong className="text-white font-bold">{bookmarkedJobs.length}</strong>건</span>
                  <span className="text-slate-500">|</span>
                  <span>등록 희망직무 <strong className="text-blue-300 font-bold">{resumeProfile?.targetRoleName || '미등록'}</strong></span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onOpenResumeModal();
              }}
              className="self-start sm:self-auto px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#3182F6] to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>{resumeProfile ? '내 스펙 수정' : '스펙 등록하고 매칭률 보기'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 mt-6 pt-4 border-t border-slate-700/70">
            <button
              onClick={() => setActiveSubTab('bookmarks')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSubTab === 'bookmarks'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 text-[#3182F6]" />
              <span>보관한 공고 ({bookmarkedJobs.length})</span>
            </button>

            <button
              onClick={() => setActiveSubTab('resume')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSubTab === 'resume'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-amber-500" />
              <span>내 이력서 스펙 현황</span>
            </button>

            <button
              onClick={() => setActiveSubTab('activity')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSubTab === 'activity'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
              <span>내 라운지 활동</span>
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto flex-1 bg-slate-50">
          {activeSubTab === 'bookmarks' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2">
                <div className="text-xs text-slate-500">
                  총 <span className="font-bold text-slate-800">{sortedBookmarks.length}</span>개의 공고가 보관되어 있습니다. 마감일을 놓치지 마세요!
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSortByDeadline(!sortByDeadline)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors ${
                      sortByDeadline
                        ? 'bg-blue-50 text-[#3182F6] border-blue-200'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    ⏰ {sortByDeadline ? '마감일 임박순 (D-Day)' : '기본 정렬'}
                  </button>
                </div>
              </div>

              {sortedBookmarks.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-slate-200/80">
                  <Bookmark className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <p className="text-sm font-bold text-slate-700">보관된 공고가 아직 없습니다.</p>
                  <p className="text-xs text-slate-400 mt-1">공고 카드의 북마크 아이콘을 눌러 관심 있는 공고를 모아보세요!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-3">
                  {sortedBookmarks.map((job) => (
                    <div 
                      key={job.id} 
                      className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <img 
                          src={job.companyLogo} 
                          alt={job.companyName} 
                          className="w-11 h-11 rounded-xl object-contain border border-slate-100 p-1 bg-white shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-bold text-slate-700">{job.companyName}</span>
                            <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                              {job.companyCategory}
                            </span>

                            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                              job.deadlineDaysLeft === 0
                                ? 'bg-rose-100 text-rose-700 border border-rose-200 animate-pulse'
                                : job.deadlineDaysLeft === 1
                                ? 'bg-amber-100 text-amber-800 border border-amber-200'
                                : job.deadlineDaysLeft <= 3
                                ? 'bg-orange-50 text-orange-700 border border-orange-200'
                                : 'bg-slate-100 text-slate-600'
                            }`}>
                              {job.deadlineText}
                            </span>

                            {job.matchScorePercent && job.matchScorePercent > 0 && (
                              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-[#3182F6] border border-blue-200 flex items-center gap-1">
                                <Sparkles className="w-3 h-3" /> 매칭 {job.matchScorePercent}%
                              </span>
                            )}
                          </div>

                          <h4 className="text-sm font-bold text-slate-900 mt-1 truncate">
                            {job.title}
                          </h4>

                          <div className="flex items-center gap-3 text-xs text-slate-400 mt-1.5">
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-3 h-3" /> {job.experienceLevel}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" /> {job.location}
                            </span>
                            {job.deadlineDateStr && (
                              <span className="flex items-center gap-1 font-mono text-slate-500">
                                <Calendar className="w-3 h-3" /> {job.deadlineDateStr}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                        {job.originUrl && (
                          <a
                            href={job.originUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-[#3182F6] text-white text-xs font-bold transition-colors inline-flex items-center gap-1"
                          >
                            <span>원문 보기</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        )}
                        <button
                          onClick={() => onRemoveBookmark(job.id)}
                          className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-colors"
                          title="보관함에서 삭제"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeSubTab === 'resume' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#3182F6] flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">등록된 취준생 스펙 프로필</h3>
                      <p className="text-xs text-slate-500">이 정보를 바탕으로 전체 300+ 공고의 맞춤 매칭률이 실시간 계산됩니다.</p>
                    </div>
                  </div>
                  <button
                    onClick={onOpenResumeModal}
                    className="px-3.5 py-1.5 rounded-xl bg-[#3182F6] hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-xs"
                  >
                    스펙 재설정
                  </button>
                </div>

                {resumeProfile ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="p-3.5 bg-slate-50 rounded-xl">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">희망 직무 분야</span>
                      <p className="text-sm font-bold text-slate-800 mt-1">{resumeProfile.targetRoleName}</p>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">경력 구분</span>
                      <p className="text-sm font-bold text-slate-800 mt-1">{resumeProfile.experienceLevel}</p>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl sm:col-span-2">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">보유 핵심 기술 스택 ({resumeProfile.skills.length}개)</span>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {resumeProfile.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#3182F6] border border-blue-200 text-xs font-bold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl sm:col-span-2">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">선호 근무 지역</span>
                      <p className="text-sm font-bold text-slate-800 mt-1">{resumeProfile.preferredLocation}</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-sm text-slate-600 font-medium">아직 등록된 스펙 정보가 없습니다.</p>
                    <button
                      onClick={onOpenResumeModal}
                      className="mt-3 px-4 py-2 bg-[#3182F6] text-white rounded-xl text-xs font-bold hover:bg-blue-600 transition-colors"
                    >
                      1분 스펙 간편 등록하기
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeSubTab === 'activity' && (
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-800">익명 블라인드 라운지 연동 계정</h4>
                  <p className="text-xs text-slate-500 mt-0.5">굿잡 커뮤니티에서는 실제 이메일이나 이름이 노출되지 않고 안전한 익명 태그로 활동합니다.</p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenCommunityTab();
                  }}
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-colors"
                >
                  라운지 바로가기 →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
                  <span className="text-xs text-slate-400 font-bold">작성한 질문/게시글</span>
                  <p className="text-xl font-black text-slate-800 mt-1">1건</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
                  <span className="text-xs text-slate-400 font-bold">작성한 답변/댓글</span>
                  <p className="text-xl font-black text-slate-800 mt-1">2건</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
                  <span className="text-xs text-slate-400 font-bold">받은 공감 추천</span>
                  <p className="text-xl font-black text-rose-600 mt-1">❤️ 5개</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200">
                <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">최근 라운지 활동 기록</h5>
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-800">[질문] 비전공자 부트캠프 수료 후 첫 포폴 질문드립니다</span>
                      <p className="text-[11px] text-slate-400 mt-0.5">답변 3개 | 추천 4개</p>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">어제</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-800">[댓글] "CS 기초는 네트워크 위주로 복습하시면..." 작성</span>
                      <p className="text-[11px] text-slate-400 mt-0.5">댓글 공감 1개</p>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">2일 전</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-400">
          <span>🛡️ 굿잡의 모든 마이페이지 데이터는 브라우저 및 안전한 로컬 저장소에 암호화 보관됩니다.</span>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
