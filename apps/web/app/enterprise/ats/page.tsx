'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Users, Clock, TrendingUp, UserX, ArrowRight, CheckCircle2, 
  AlertCircle, ChevronRight, Filter, RefreshCw, Building2, 
  FileText, Calendar, MessageSquare, ArrowLeft, Rocket, Sparkles, CreditCard
} from 'lucide-react';
import B2BPaymentModal from '@/components/B2BPaymentModal';

interface ApplicationItem {
  id: string;
  candidateName: string;
  targetRole: string;
  matchScore: number;
  skills: string[];
  appliedAt: string;
  daysInStage: number;
  currentStage: 'APPLIED' | 'DOC_PASS' | 'INTERVIEW' | 'FINAL_OFFER' | 'REJECTED' | 'WITHDRAWN';
  withdrawalReason?: string;
}

const INITIAL_APPLICATIONS: ApplicationItem[] = [
  {
    id: 'app_101',
    candidateName: '김*수',
    targetRole: '프론트엔드 엔지니어',
    matchScore: 96,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
    appliedAt: '2026-09-01',
    daysInStage: 4,
    currentStage: 'APPLIED'
  },
  {
    id: 'app_102',
    candidateName: '이*은',
    targetRole: '프론트엔드 엔지니어',
    matchScore: 92,
    skills: ['React', 'Redux', 'JavaScript', 'GraphQL'],
    appliedAt: '2026-08-30',
    daysInStage: 6,
    currentStage: 'DOC_PASS'
  },
  {
    id: 'app_103',
    candidateName: '박*현',
    targetRole: '풀스택 엔지니어',
    matchScore: 98,
    skills: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    appliedAt: '2026-08-25',
    daysInStage: 11,
    currentStage: 'INTERVIEW'
  },
  {
    id: 'app_104',
    candidateName: '최*우',
    targetRole: '프론트엔드 테크리드',
    matchScore: 95,
    skills: ['Next.js', 'TypeScript', 'Turborepo', 'CI/CD'],
    appliedAt: '2026-08-15',
    daysInStage: 5,
    currentStage: 'FINAL_OFFER'
  },
  {
    id: 'app_105',
    candidateName: '정*민',
    targetRole: '웹 프론트엔드',
    matchScore: 74,
    skills: ['HTML/CSS', 'jQuery', 'Vue.js'],
    appliedAt: '2026-08-20',
    daysInStage: 15,
    currentStage: 'REJECTED'
  },
  {
    id: 'app_106',
    candidateName: '강*훈',
    targetRole: '프론트엔드 엔지니어',
    matchScore: 94,
    skills: ['React', 'TypeScript', 'Zustand', 'Vite'],
    appliedAt: '2026-08-22',
    daysInStage: 3,
    currentStage: 'WITHDRAWN',
    withdrawalReason: '타사(대기업) 최종합격으로 인한 자진 포기 유선 통보'
  }
];

const STAGE_COLUMNS = [
  { id: 'APPLIED', title: '서류 접수', badgeColor: 'bg-blue-50 text-blue-700 border-blue-200' },
  { id: 'DOC_PASS', title: '서류 통과', badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  { id: 'INTERVIEW', title: '면접 전형', badgeColor: 'bg-purple-50 text-purple-700 border-purple-200' },
  { id: 'FINAL_OFFER', title: '최종 합격', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { id: 'REJECTED', title: '불합격', badgeColor: 'bg-gray-100 text-gray-600 border-gray-200' },
  { id: 'WITHDRAWN', title: '자진포기 / 노쇼', badgeColor: 'bg-amber-50 text-amber-700 border-amber-200' },
] as const;

export default function EnterpriseAtsDashboard() {
  const [applications, setApplications] = useState<ApplicationItem[]>(INITIAL_APPLICATIONS);
  const [selectedApp, setSelectedApp] = useState<ApplicationItem | null>(null);
  const [changeStageModal, setChangeStageModal] = useState<{ open: boolean; appId: string; toStage: string } | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [reasonInput, setReasonInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // 전형 상태 변경 트랜잭션 호출
  const handleStageChangeSubmit = async () => {
    if (!changeStageModal) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/ats/applications/${changeStageModal.appId}/stage`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          stage: changeStageModal.toStage,
          changeReason: reasonInput || 'HR 담당자 전형 단계 변경',
          withdrawalReason: changeStageModal.toStage === 'WITHDRAWN' ? reasonInput : undefined,
          changedByUserId: 'user_enterprise_kbseo'
        })
      });
      const data = await res.json();
      if (data.success) {
        setApplications(prev => prev.map(app => 
          app.id === changeStageModal.appId 
            ? { ...app, currentStage: changeStageModal.toStage as any, withdrawalReason: reasonInput }
            : app
        ));
        setStatusMessage(`✅ 전형 단계가 '${changeStageModal.toStage}'(으)로 갱신되었으며 불변 감사 원장에 영구 기록되었습니다.`);
        setChangeStageModal(null);
        setReasonInput('');
      } else {
        alert(data.error || '상태 변경 중 오류가 발생했습니다.');
      }
    } catch (err: any) {
      alert('서버 통신 실패: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* 상단 네비게이션 */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-4 h-4" /> 굿잡 홈으로
          </Link>
          <div className="h-4 w-px bg-slate-200" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm shadow-sm shadow-blue-500/30">
              G
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-slate-900">굿잡 테크놀로지스 (GoodJob Corp) 채용 대시보드</span>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-800 rounded-full border border-amber-300">
                  기업 공식 인증 (Claimed)
                </span>
              </div>
              <span className="text-[11px] text-slate-500">B2B 경량 ATS & 불변 감사 원장 시스템</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsPaymentModalOpen(true)}
            className="px-3.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-sm shadow-blue-500/25 flex items-center gap-1.5 transition-all hover:scale-[1.02]"
          >
            <Rocket className="w-3.5 h-3.5 text-amber-300" />
            <span>공고 상단 부스팅 / 크레딧 충전</span>
          </button>
          <span className="text-xs text-slate-500 hidden sm:inline">대표 채용담당자: <strong className="text-slate-800">kbseo82@gmail.com</strong></span>
          <button 
            onClick={() => setApplications([...INITIAL_APPLICATIONS])}
            className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1.5 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" /> 새로고침
          </button>
        </div>
      </header>

      {/* 상태 메시지 알림 바 */}
      {statusMessage && (
        <div className="bg-emerald-50 border-b border-emerald-200 px-6 py-2.5 flex items-center justify-between text-xs text-emerald-800">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{statusMessage}</span>
          </div>
          <button onClick={() => setStatusMessage(null)} className="text-emerald-700 hover:underline">닫기</button>
        </div>
      )}

      <main className="p-6 max-w-[1800px] mx-auto space-y-6">
        {/* 1. 상단 채용 성과 및 퍼널 분석 KPI 위젯 */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-medium text-slate-500">총 지원자 수</span>
              <div className="text-2xl font-black text-slate-900 mt-1">142<span className="text-sm font-normal text-slate-500 ml-1">명</span></div>
              <div className="text-[11px] text-blue-600 font-semibold mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> 최근 7일간 +18명 유입
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-medium text-slate-500">평균 채용 소요시간 (Time-to-Hire)</span>
              <div className="text-2xl font-black text-slate-900 mt-1">21.4<span className="text-sm font-normal text-slate-500 ml-1">일</span></div>
              <div className="text-[11px] text-slate-500 mt-1">
                서류 4.2일 ➔ 면접 11.5일 ➔ 오퍼 5.7일
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-medium text-slate-500">전형 단계별 전환율 (Conversion)</span>
              <div className="text-2xl font-black text-slate-900 mt-1">21.4<span className="text-sm font-normal text-slate-500 ml-1">%</span></div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                서류합격(26.7%) ➔ 면접합격(36.8%)
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-medium text-slate-500">자진 포기 / 노쇼율 (Drop-out)</span>
              <div className="text-2xl font-black text-amber-700 mt-1">3.5<span className="text-sm font-normal text-slate-500 ml-1">%</span></div>
              <div className="text-[11px] text-amber-700 font-semibold mt-1">
                타사 합격 3명 / 면접 노쇼 2명
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <UserX className="w-6 h-6" />
            </div>
          </div>
        </section>

        {/* 2. 중앙 6개 컬럼 칸반 보드 */}
        <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                지원자 전형 파이프라인 칸반 보드
                <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                  불변 감사 원장(`application_history`) 자동 연동 중
                </span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">각 단계로 지원자를 이동시키면 변경 이력과 사유가 감사 로그로 즉시 기록됩니다.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 overflow-x-auto pb-4">
            {STAGE_COLUMNS.map(col => {
              const colApps = applications.filter(a => a.currentStage === col.id);
              return (
                <div key={col.id} className="bg-slate-50/70 rounded-xl p-3.5 border border-slate-200/80 flex flex-col min-w-[260px]">
                  {/* 컬럼 헤더 */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                    <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      {col.title}
                    </span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${col.badgeColor}`}>
                      {colApps.length}명
                    </span>
                  </div>

                  {/* 지원자 카드 리스트 */}
                  <div className="space-y-3 flex-1">
                    {colApps.map(app => (
                      <div 
                        key={app.id} 
                        className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all hover:border-blue-400 group cursor-pointer"
                        onClick={() => setSelectedApp(app)}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                              {app.candidateName}
                            </span>
                            <div className="text-[11px] text-slate-500">{app.targetRole}</div>
                          </div>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700">
                            매칭 {app.matchScore}%
                          </span>
                        </div>

                        {/* 기술 스택 칩 */}
                        <div className="flex flex-wrap gap-1 mt-2.5">
                          {app.skills.slice(0, 3).map(s => (
                            <span key={s} className="px-1.5 py-0.5 text-[9px] font-medium bg-slate-100 text-slate-600 rounded">
                              {s}
                            </span>
                          ))}
                          {app.skills.length > 3 && (
                            <span className="text-[9px] text-slate-400">+{app.skills.length - 3}</span>
                          )}
                        </div>

                        {/* 노쇼/자진포기 사유 표시 */}
                        {app.currentStage === 'WITHDRAWN' && app.withdrawalReason && (
                          <div className="mt-2.5 p-2 bg-amber-50 border border-amber-200 rounded text-[10px] text-amber-800 leading-snug">
                            ⚠️ <strong>사유:</strong> {app.withdrawalReason}
                          </div>
                        )}

                        {/* 하단 메타 및 단계 변경 버튼 */}
                        <div className="flex items-center justify-between pt-2.5 mt-2.5 border-t border-slate-100 text-[10px] text-slate-400">
                          <span>체류 D+{app.daysInStage}일</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              // 다음 단계 추천 모달 호출
                              const nextStage = col.id === 'APPLIED' ? 'DOC_PASS' : col.id === 'DOC_PASS' ? 'INTERVIEW' : 'FINAL_OFFER';
                              setChangeStageModal({ open: true, appId: app.id, toStage: nextStage });
                            }}
                            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-0.5"
                          >
                            단계 이동 <ChevronRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}

                    {colApps.length === 0 && (
                      <div className="h-28 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-[11px] text-slate-400">
                        지원자 없음
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* 상태 변경 및 사유 입력 모달 */}
      {changeStageModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              전형 단계 변경 및 감사 로그 기록
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              지원자의 단계를 변경하면 <strong className="text-blue-600">`application_history`</strong> 불변 원장에 변경자 HR 계정(`recruiter@toss.im`)과 타임스탬프가 영구 보존됩니다.
            </p>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">변경할 전형 단계</label>
              <select 
                value={changeStageModal.toStage}
                onChange={(e) => setChangeStageModal({ ...changeStageModal, toStage: e.target.value })}
                className="w-full text-xs p-2.5 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {STAGE_COLUMNS.map(c => (
                  <option key={c.id} value={c.id}>{c.title} ({c.id})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {changeStageModal.toStage === 'WITHDRAWN' ? '자진 포기 / 노쇼 상세 사유 (필수)' : '단계 변경 사유 및 코멘트'}
              </label>
              <textarea 
                rows={3}
                value={reasonInput}
                onChange={(e) => setReasonInput(e.target.value)}
                placeholder={changeStageModal.toStage === 'WITHDRAWN' ? '예: 지원자 유선 연락으로 타사 입사 의사 밝힘' : '예: 1차 직무 인터뷰 합격'}
                className="w-full text-xs p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button 
                onClick={() => setChangeStageModal(null)}
                className="flex-1 py-2.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                취소
              </button>
              <button 
                onClick={handleStageChangeSubmit}
                disabled={loading}
                className="flex-1 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm shadow-blue-500/30"
              >
                {loading ? '기록 중...' : '원장 기록 및 변경'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* B2B 기업 전용 공고 부스팅 & 크레딧 결제 모달 */}
      <B2BPaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        targetJobId="goodjob-remember-112"
        targetJobTitle="굿잡 테크놀로지스 풀스택/플랫폼 엔지니어 채용"
        onPaymentSuccess={(order) => {
          setStatusMessage(`🚀 B2B 결제 승인 완료: 주문번호 [${order.orderId}]로 공고 부스팅이 즉시 활성화되었습니다!`);
        }}
      />
    </div>
  );
}
