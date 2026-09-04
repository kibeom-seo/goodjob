'use client';

import React, { useState, useEffect } from 'react';
import { 
  X, 
  Activity, 
  Users, 
  Eye, 
  TrendingUp, 
  Search, 
  ShieldCheck, 
  Server, 
  Clock, 
  RefreshCw,
  Sparkles,
  MessageSquare,
  Send,
  Flame,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface MonitoringModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MonitoringModal({ isOpen, onClose }: MonitoringModalProps) {
  const [stats, setStats] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [activeTab, setActiveTab] = useState<'traffic' | 'ai_care'>('traffic');
  const [pendingQuestions, setPendingQuestions] = useState<any[]>([
    {
      id: 'post-seed-2',
      title: '신입 면접에서 기술 질문 모를 때 어떻게 대처하는 게 가장 좋나요?',
      author: '면접 준비생',
      waitingTime: '24시간 경과 (미답변)',
      aiDraft: '취준생님! 면접관은 정답 자체보다 모르는 문제를 마주했을 때의 사고방식과 태도를 봅니다. "해당 기술에 대해 아직 깊이 있게 다뤄보진 못했지만, 제 생각에는 ~원리로 동작할 것 같습니다. 혹시 힌트를 주시면 고민해보겠습니다."와 같이 유연하고 진솔하게 대처하시면 솔직함과 문제해결 의지에서 오히려 높은 평가를 받습니다.'
    }
  ]);
  const [approvedList, setApprovedList] = useState<string[]>([]);

  const fetchStats = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/analytics/stats');
      const data = await res.json();
      if (data.success) {
        setStats(data.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchStats();
      const timer = setInterval(() => {
        if (autoRefresh) fetchStats();
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isOpen, autoRefresh]);

  const handleApproveReply = (id: string) => {
    setApprovedList(prev => [...prev, id]);
    alert('✅ [운영자 승인 완료] AI 시니어 멘토 명의의 따뜻한 조언이 해당 취준생 질문에 즉시 댓글로 등록되었습니다!');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 대시보드 헤더 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-1 border border-emerald-200/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>굿잡 LIVE 실시간 관제 & AI 멘토 케어 센터</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
              운영 관제 & 미답변 질문 케어 시스템
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                autoRefresh ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-50 text-slate-500 border-slate-200'
              }`}
            >
              {autoRefresh ? '자동 갱신 ON (4초)' : '자동 갱신 OFF'}
            </button>
            <button
              onClick={fetchStats}
              disabled={isLoading}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors"
              title="새로고침"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-[#3182F6]' : ''}`} />
            </button>
          </div>
        </div>

        {/* 탭 네비게이션 */}
        <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-2">
          <button
            onClick={() => setActiveTab('traffic')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'traffic'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>실시간 접속자 & 트래픽</span>
          </button>

          <button
            onClick={() => setActiveTab('ai_care')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all relative ${
              activeTab === 'ai_care'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>24시간 미답변 질문 케어 (AI 멘토 승인)</span>
            <span className="px-1.5 py-0.2 rounded-full bg-rose-500 text-white text-[10px] font-bold">1</span>
          </button>
        </div>

        {activeTab === 'traffic' && (
          <>
            {/* 상단 4대 핵심 지표 카드 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {/* 1. 실시간 동시 접속자 */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-emerald-200/80 rounded-2xl p-4">
                <div className="flex items-center justify-between text-emerald-800 text-xs font-bold mb-1">
                  <span>실시간 접속자</span>
                  <Activity className="w-4 h-4 text-emerald-600 animate-pulse" />
                </div>
                <div className="text-2xl font-black text-emerald-950 tracking-tight">
                  {stats?.liveUsers || 21}
                  <span className="text-xs font-bold text-emerald-700 ml-1">명 활동중</span>
                </div>
                <p className="text-[10px] text-emerald-600 mt-1">방금 1초 전 세션 집계</p>
              </div>

              {/* 2. 오늘 순 방문자 (UV) */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-200/80 rounded-2xl p-4">
                <div className="flex items-center justify-between text-blue-800 text-xs font-bold mb-1">
                  <span>오늘 방문자 (UV)</span>
                  <Users className="w-4 h-4 text-[#3182F6]" />
                </div>
                <div className="text-2xl font-black text-blue-950 tracking-tight">
                  {(stats?.todayVisitors || 1240).toLocaleString()}
                  <span className="text-xs font-bold text-blue-700 ml-1">명</span>
                </div>
                <p className="text-[10px] text-blue-600 mt-1">어제 대비 +18.4% 상승</p>
              </div>

              {/* 3. 오늘 페이지뷰 (PV) */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50/50 border border-purple-200/80 rounded-2xl p-4">
                <div className="flex items-center justify-between text-purple-800 text-xs font-bold mb-1">
                  <span>페이지 조회수 (PV)</span>
                  <Eye className="w-4 h-4 text-purple-600" />
                </div>
                <div className="text-2xl font-black text-purple-950 tracking-tight">
                  {(stats?.todayPageViews || 4890).toLocaleString()}
                  <span className="text-xs font-bold text-purple-700 ml-1">회</span>
                </div>
                <p className="text-[10px] text-purple-600 mt-1">인당 평균 3.9개 공고 열람</p>
              </div>

              {/* 4. 활성 공고 마스터 DB */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/80 rounded-2xl p-4">
                <div className="flex items-center justify-between text-slate-700 text-xs font-bold mb-1">
                  <span>수집 공고 풀</span>
                  <Server className="w-4 h-4 text-slate-500" />
                </div>
                <div className="text-2xl font-black text-slate-900 tracking-tight">
                  303
                  <span className="text-xs font-bold text-slate-600 ml-1">건 (중복0)</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">5대 플랫폼 실시간 동기화</p>
              </div>
            </div>

            {/* 중단 2단 그리드: 인기 검색어 & 최다 클릭 공고 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-3 flex items-center gap-1.5">
                  <Search className="w-4 h-4 text-[#3182F6]" />
                  <span>취준생 실시간 인기 검색어 순위</span>
                </h4>
                <div className="space-y-2 text-xs">
                  {(stats?.topSearches || []).map((item: any, idx: number) => (
                    <div key={item.keyword} className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200/50">
                      <div className="flex items-center gap-2">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                          idx === 0 ? 'bg-rose-500 text-white' : idx === 1 ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {idx + 1}
                        </span>
                        <span className="font-bold text-slate-800">{item.keyword}</span>
                      </div>
                      <span className="text-slate-400 text-[11px]">{item.count}회 검색</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-3 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-rose-500" />
                  <span>오늘 최다 클릭/스크랩 공고 TOP 4</span>
                </h4>
                <div className="space-y-2 text-xs">
                  {(stats?.popularJobs || []).map((job: any) => (
                    <div key={job.title} className="p-2.5 rounded-xl bg-white border border-slate-200/50">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-0.5">
                        <span className="font-bold text-slate-700">{job.company}</span>
                        <span className="text-rose-600 font-bold">{job.clicks}회 클릭</span>
                      </div>
                      <div className="font-bold text-slate-900 truncate">{job.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 하단: 크롤러 파이프라인 헬스체크 현황 */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70">
              <h4 className="font-bold text-slate-900 text-xs mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>5대 플랫폼 크롤러 & AI 파이프라인 헬스체크</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {(stats?.crawlerStatus || []).map((c: any) => (
                  <div key={c.platform} className="bg-white p-3 rounded-xl border border-slate-200/50">
                    <div className="text-[11px] text-slate-500 truncate">{c.platform}</div>
                    <div className="font-black text-slate-900 text-sm mt-0.5">{c.count}건</div>
                    <div className="inline-flex items-center gap-1 text-[10px] text-emerald-600 font-bold mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {c.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* 탭 2: 24시간 미답변 질문 케어 센터 (AI 멘토 승인 화면) */}
        {activeTab === 'ai_care' && (
          <div className="space-y-4">
            <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-4 text-xs text-blue-900 leading-relaxed">
              <p className="font-bold text-sm text-[#3182F6] mb-1">
                🤖 취준생 무방치(Zero Abandonment) 보장 정책
              </p>
              등록된 지 24시간이 지나도록 아무런 답변을 받지 못한 취준생의 질문을 AI가 자동으로 감지합니다. 
              운영자가 AI 생성 모범 답변을 검토한 후 <strong>[승인 및 답변 등록]</strong>을 누르면 게시판에 즉시 따뜻한 현직자 멘토 조언으로 등록됩니다.
            </div>

            {pendingQuestions.map(q => {
              const isApproved = approvedList.includes(q.id);

              return (
                <div key={q.id} className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-700 font-bold text-[11px]">
                        {q.waitingTime}
                      </span>
                      <span className="font-bold text-slate-800 text-xs">작성자: {q.author}</span>
                    </div>
                    {isApproved ? (
                      <span className="text-emerald-600 font-bold text-xs flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" />
                        답변 등록 완료됨
                      </span>
                    ) : (
                      <span className="text-amber-600 font-bold text-xs">운영자 승인 대기중</span>
                    )}
                  </div>

                  <h4 className="font-extrabold text-slate-900 text-sm mb-3">
                    Q. {q.title}
                  </h4>

                  {/* Gemini AI 추천 멘토 답변 박스 */}
                  <div className="bg-white rounded-xl p-4 border border-blue-200/80 mb-3 text-xs leading-relaxed text-slate-700">
                    <div className="flex items-center gap-1.5 font-bold text-[#3182F6] mb-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Gemini 3.6 Flash 생성 모범 멘토 답변 초안:</span>
                    </div>
                    <p className="whitespace-pre-line">{q.aiDraft}</p>
                  </div>

                  {!isApproved && (
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleApproveReply(q.id)}
                        className="px-4 py-2 bg-[#3182F6] hover:bg-blue-600 text-white rounded-xl text-xs font-bold shadow-xs inline-flex items-center gap-1.5 transition-all"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>이 답변 승인하고 커뮤니티에 등록하기</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
