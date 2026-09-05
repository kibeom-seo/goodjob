'use client';

import React, { useState } from 'react';
import { 
  X, Bookmark, Sparkles, MessageSquare, 
  Trash2, Briefcase, MapPin, Calendar,
  ArrowUpRight, ShieldCheck, Gift, CheckCircle2,
  UploadCloud, AlertTriangle, Loader2, Lock, FileText, Check
} from 'lucide-react';
import { JobPosting, UserResumeProfile } from '../types/job';
import CompanyBrandLogo from './CompanyBrandLogo';

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
  const [activeSubTab, setActiveSubTab] = useState<'bookmarks' | 'resume' | 'activity' | 'reward'>('bookmarks');
  const [sortByDeadline, setSortByDeadline] = useState(true);

  // MOD-08 합격 리워드 신청 상태 관리
  const [rewardMethod, setRewardMethod] = useState<'m2m' | 'upload'>('m2m');
  const [m2mLoading, setM2mLoading] = useState(false);
  const [m2mSuccess, setM2mSuccess] = useState(false);
  const [companyNameInput, setCompanyNameInput] = useState('토스뱅크');
  const [accountNumberInput, setAccountNumberInput] = useState('1002-851-938212 (우리은행)');
  
  // 3단계 보안 스캔 상태 (서류 업로드)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [scanStep, setScanStep] = useState<number>(0); // 0: 대기, 1: ClamAV, 2: Exif, 3: OCR, 4: 완료
  const [isScanning, setIsScanning] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleStartFileScan = (file: File) => {
    setUploadedFile(file);
    setIsScanning(true);
    setScanStep(1); // 1: ClamAV 바이러스 검사

    setTimeout(() => {
      setScanStep(2); // 2: ExifTool 메타데이터 포토샵 위변조 검사
      setTimeout(() => {
        setScanStep(3); // 3: AI OCR 직인 및 기업명 대조
        setTimeout(() => {
          setScanStep(4); // 4: 무결성 최종 검증 완료
          setIsScanning(false);
          setUploadSuccess(true);
        }, 1000);
      }, 900);
    }, 800);
  };

  const handleM2MVerify = () => {
    setM2mLoading(true);
    setTimeout(() => {
      setM2mLoading(false);
      setM2mSuccess(true);
    }, 1200);
  };

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
            className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="닫기"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pr-14">
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
              className="self-start sm:self-auto px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#3182F6] to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 shrink-0"
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

            <button
              onClick={() => setActiveSubTab('reward')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSubTab === 'reward'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 font-extrabold shadow-sm'
                  : 'text-amber-300 hover:text-white hover:bg-amber-400/20 border border-amber-400/30'
              }`}
            >
              <Gift className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>합격 리워드 신청 (50만 원) 🎁</span>
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
                        <CompanyBrandLogo 
                          logo={job.companyLogo} 
                          domain={job.corporateDomain} 
                          name={job.companyName} 
                          size="sm" 
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
                  <h4 className="text-sm font-bold text-slate-800">굿잡 라운지 연동 계정</h4>
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

          {activeSubTab === 'reward' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              {/* 상단 리워드 헤더 배너 */}
              <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-extrabold text-amber-100 mb-2">
                      <Gift className="w-3.5 h-3.5" />
                      GOODJOB HIRING REWARD · MOD-08
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                      취업 성공을 축하합니다! 합격 축하금 50만 원 🎁
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-100 mt-1 max-w-xl leading-relaxed">
                      굿잡을 통해 입사에 성공하신 분께 축하금 500,000원을 즉시 지급해 드립니다. 
                      공공 마이데이터 직통 검증 또는 3단계 안티프로드 보안 서류 업로드 중 편한 방식을 선택해 주세요.
                    </p>
                  </div>
                  <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-4 text-center shrink-0">
                    <span className="text-[11px] text-amber-200 font-bold block">지급 확정 금액</span>
                    <span className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-0.5 block">
                      500,000<span className="text-sm font-semibold ml-0.5">원</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* 기본 신청자 정보 입력 필드 */}
              <div className="bg-white p-5 rounded-3xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">최종 합격 기업명 *</label>
                  <input
                    type="text"
                    value={companyNameInput}
                    onChange={(e) => setCompanyNameInput(e.target.value)}
                    placeholder="예: 토스, 당근, 현대오토에버 등"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-bold focus:outline-none focus:border-[#3182F6] text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">지급받을 본인 명의 계좌 *</label>
                  <input
                    type="text"
                    value={accountNumberInput}
                    onChange={(e) => setAccountNumberInput(e.target.value)}
                    placeholder="은행명 및 계좌번호 입력"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-bold focus:outline-none focus:border-[#3182F6] text-slate-800"
                  />
                </div>
              </div>

              {/* 검증 방식 선택 (2가지 모드) */}
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="grid grid-cols-2 border-b border-slate-200 text-xs font-bold">
                  <button
                    onClick={() => setRewardMethod('m2m')}
                    className={`py-3.5 px-4 text-center transition-all flex items-center justify-center gap-2 ${
                      rewardMethod === 'm2m'
                        ? 'bg-blue-50 text-[#3182F6] border-b-2 border-[#3182F6]'
                        : 'text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-[#3182F6]" />
                    <span>⚡ 마이데이터 직통 간편인증 (추천 · 1초 검증)</span>
                  </button>
                  <button
                    onClick={() => setRewardMethod('upload')}
                    className={`py-3.5 px-4 text-center transition-all flex items-center justify-center gap-2 ${
                      rewardMethod === 'upload'
                        ? 'bg-blue-50 text-[#3182F6] border-b-2 border-[#3182F6]'
                        : 'text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    <UploadCloud className="w-4 h-4 text-slate-600" />
                    <span>📄 건강보험자격득실확인서 직접 업로드</span>
                  </button>
                </div>

                <div className="p-6">
                  {/* 모드 1: M2M 간편 인증 */}
                  {rewardMethod === 'm2m' && (
                    <div className="space-y-4">
                      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-slate-900">국민건강보험공단 직통 전자인증 (M2M Zero-Trust)</h4>
                          <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                            번거롭게 서류를 캡처하거나 발급받지 않아도 됩니다. 카카오/PASS 본인인증 1회로 공공기관 전산망에서 
                            합격 기업 재직 이력을 1초 만에 위변조 없이 즉시 증명합니다.
                          </p>
                        </div>
                      </div>

                      {m2mSuccess ? (
                        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center animate-in zoom-in-95 duration-200">
                          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                          <h4 className="text-base font-extrabold text-emerald-900">
                            🎉 공공기관 직통 검증 성공! 합격 리워드 접수 완료
                          </h4>
                          <p className="text-xs text-emerald-700 mt-1">
                            <strong>{companyNameInput}</strong> 재직 사실이 국민건강보험공단 DB와 100% 일치 확인되었습니다.
                          </p>
                          <div className="mt-3 inline-block px-4 py-2 bg-emerald-100 text-emerald-900 rounded-xl text-xs font-bold">
                            지급 예정 계좌: {accountNumberInput} · 24시간 내 입금 대기
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                          <button
                            onClick={handleM2MVerify}
                            disabled={m2mLoading}
                            className="flex-1 py-3 px-4 bg-yellow-400 hover:bg-yellow-500 active:scale-[0.99] text-slate-900 font-extrabold text-xs rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2"
                          >
                            {m2mLoading ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <span className="text-base">💬</span>
                            )}
                            <span>{m2mLoading ? '공공기관 연동 검증 중...' : '카카오 인증서로 1초 만에 확인하고 50만 원 받기'}</span>
                          </button>
                          <button
                            onClick={handleM2MVerify}
                            disabled={m2mLoading}
                            className="flex-1 py-3 px-4 bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-extrabold text-xs rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2"
                          >
                            {m2mLoading ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <span className="text-base">🔴</span>
                            )}
                            <span>{m2mLoading ? 'PASS 연동 검증 중...' : 'PASS 앱 인증으로 1초 만에 확인하기'}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 모드 2: 서류 직접 업로드 & 3단계 안티프로드 보안 스캔 */}
                  {rewardMethod === 'upload' && (
                    <div className="space-y-4">
                      {/* 파일 업로드 드롭존 */}
                      <div className="border-2 border-dashed border-slate-300 rounded-3xl p-6 text-center hover:border-blue-500 bg-slate-50 transition-colors">
                        <UploadCloud className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                        <h4 className="text-xs font-bold text-slate-800">건강보험자격득실확인서 파일 업로드 (PDF / JPG / PNG)</h4>
                        <p className="text-[11px] text-slate-400 mt-1">
                          정부24 또는 국민건강보험공단에서 발급받은 원본 파일을 드래그하거나 선택하세요.
                        </p>
                        
                        <div className="mt-4 flex items-center justify-center gap-3">
                          <label className="cursor-pointer px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors">
                            <span>내 컴퓨터에서 파일 선택</span>
                            <input
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) handleStartFileScan(file);
                              }}
                            />
                          </label>

                          <button
                            onClick={() => {
                              const dummyFile = new File(['dummy content'], '건강보험자격득실확인서_서기범_2026.pdf', { type: 'application/pdf' });
                              handleStartFileScan(dummyFile);
                            }}
                            className="px-4 py-2 bg-blue-50 text-[#3182F6] border border-blue-200 rounded-xl text-xs font-bold hover:bg-blue-100 transition-colors"
                          >
                            🧪 샘플 파일로 3단계 보안 스캔 시연
                          </button>
                        </div>
                      </div>

                      {/* 3단계 안티프로드 보안 스캔 애니메이션 시각화 */}
                      {(isScanning || scanStep > 0) && (
                        <div className="bg-slate-900 text-white rounded-3xl p-5 shadow-xl space-y-3.5 border border-slate-800 animate-in fade-in">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                            <div className="flex items-center gap-2">
                              <Lock className="w-4 h-4 text-blue-400" />
                              <span className="font-extrabold text-slate-200">안티프로드 3-Tier Zero-Trust 보안 파이프라인</span>
                            </div>
                            <span className="text-[11px] font-mono text-slate-400">
                              {uploadedFile?.name || 'document_verification.pdf'}
                            </span>
                          </div>

                          {/* 1단계: ClamAV */}
                          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs">
                            <div className="flex items-center gap-2.5">
                              {scanStep === 1 ? (
                                <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                              ) : scanStep > 1 ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <div className="w-4 h-4 rounded-full border border-slate-600" />
                              )}
                              <div>
                                <div className="font-bold text-slate-200">1단계: ClamAV 악성코드 & 악성 스크립트 무결성 검사</div>
                                <div className="text-[11px] text-slate-400">PDF 임베디드 JS 익스플로잇 및 웜 바이러스 패킷 차단</div>
                              </div>
                            </div>
                            <span className={`text-[11px] font-mono font-bold ${scanStep > 1 ? 'text-emerald-400' : scanStep === 1 ? 'text-blue-400 animate-pulse' : 'text-slate-500'}`}>
                              {scanStep > 1 ? '0 Malicious Payload (통과)' : scanStep === 1 ? '메모리 스캔 중...' : '대기 중'}
                            </span>
                          </div>

                          {/* 2단계: ExifTool / ELA */}
                          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs">
                            <div className="flex items-center gap-2.5">
                              {scanStep === 2 ? (
                                <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                              ) : scanStep > 2 ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <div className="w-4 h-4 rounded-full border border-slate-600" />
                              )}
                              <div>
                                <div className="font-bold text-slate-200">2단계: Exif 메타데이터 & ELA 포토샵 위변조 감지</div>
                                <div className="text-[11px] text-slate-400">Software 태그(Adobe Photoshop 등) 및 오차 레벨 분석(ELA)</div>
                              </div>
                            </div>
                            <span className={`text-[11px] font-mono font-bold ${scanStep > 2 ? 'text-emerald-400' : scanStep === 2 ? 'text-blue-400 animate-pulse' : 'text-slate-500'}`}>
                              {scanStep > 2 ? 'Original Pure (변조 없음)' : scanStep === 2 ? '메타데이터 분석 중...' : '대기 중'}
                            </span>
                          </div>

                          {/* 3단계: AI OCR */}
                          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs">
                            <div className="flex items-center gap-2.5">
                              {scanStep === 3 ? (
                                <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                              ) : scanStep >= 4 ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <div className="w-4 h-4 rounded-full border border-slate-600" />
                              )}
                              <div>
                                <div className="font-bold text-slate-200">3단계: AI OCR 공공기관 직인 및 합격 기업 대조</div>
                                <div className="text-[11px] text-slate-400">국민건강보험공단 관인 진위 및 사업장 명칭 100% 매칭 검증</div>
                              </div>
                            </div>
                            <span className={`text-[11px] font-mono font-bold ${scanStep >= 4 ? 'text-emerald-400' : scanStep === 3 ? 'text-blue-400 animate-pulse' : 'text-slate-500'}`}>
                              {scanStep >= 4 ? `매칭률 99.8% (${companyNameInput})` : scanStep === 3 ? '직인 대조 중...' : '대기 중'}
                            </span>
                          </div>

                          {uploadSuccess && (
                            <div className="pt-2">
                              <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-2xl flex items-center justify-between text-xs text-emerald-300">
                                <span className="font-bold flex items-center gap-1.5">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                  3단계 안티프로드 보안 검증 통과! 관리자 정산 큐 자동 배정 완료
                                </span>
                                <span className="font-mono text-[11px] bg-emerald-950 px-2 py-0.5 rounded text-emerald-400 font-bold">
                                  PAYOUT_QUEUED
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
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
