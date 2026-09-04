'use client';

import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, FileText, Send, Zap, ShieldCheck, AlertTriangle } from 'lucide-react';
import { JobPosting, UserResumeProfile } from '../types/job';

interface AiReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: JobPosting | null;
  userProfile: UserResumeProfile | null;
  onOpenResumeModal: () => void;
}

export default function AiReportModal({
  isOpen,
  onClose,
  job,
  userProfile,
  onOpenResumeModal
}: AiReportModalProps) {
  if (!isOpen || !job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 헤더 */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#3182F6] text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Gemini AI 심층 서류 합격 분석기</span>
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
            {job.companyName} 지원 맞춤형 AI 리포트
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            공고의 숨겨진 합격 키워드와 취준생 맞춤 자소서 작성 전략을 분석했습니다.
          </p>
        </div>

        {/* 분석 내용 */}
        <div className="space-y-4 text-xs sm:text-sm">
          {/* 1. 직무 핵심 공략 포인트 */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70">
            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-1.5 text-xs">
              <span className="w-2 h-2 rounded-full bg-[#3182F6]" />
              인사담당자가 가장 먼저 보는 핵심 자격요건
            </h4>
            <p className="text-slate-700 leading-relaxed text-xs">
              {job.geminiSummary.requirements}
            </p>
            <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] font-medium text-slate-400">자소서 필수 키워드:</span>
              {job.geminiSummary.keywordHighlights.map(kw => (
                <span key={kw} className="px-2 py-0.5 rounded bg-blue-100 text-[#3182F6] text-[10px] font-bold">
                  #{kw}
                </span>
              ))}
            </div>
          </div>

          {/* 2. 내 스펙과의 핏(Fit) 진단 */}
          <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-200/70">
            <h4 className="font-bold text-emerald-950 mb-2 flex items-center gap-1.5 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              취준생 서류 합격률을 높이는 자소서 작성 팁
            </h4>
            <ul className="space-y-1.5 text-xs text-emerald-900 leading-relaxed list-disc list-inside">
              <li>기술스택에 대한 단순 나열보다 <strong>'해당 기술을 프로젝트에 도입하여 어떤 문제를 해결했는지'</strong> 트러블슈팅 경험을 1개 이상 반드시 서술하세요.</li>
              <li>{job.experienceLevel.includes('신입') ? '신입 공고이므로 협업 도구(Git, Figma 등)를 활용한 팀 프로젝트 협업 태도를 강조하면 서류 통과율이 급상승합니다.' : '직무 유관 포트폴리오 링크(GitHub, 기술 블로그)를 첫머리에 배치하세요.'}</li>
              <li>마감 일정: <strong>{job.deadlineText}</strong>까지 최종 제출 완료를 권장합니다.</li>
            </ul>
          </div>

          {/* 3. 내 스펙 연동 상태 안내 */}
          {userProfile ? (
            <div className="p-4 bg-indigo-50/60 border border-indigo-200/70 rounded-2xl">
              <h4 className="font-bold text-indigo-950 text-xs mb-1">
                🎯 취준생 보유 스펙과 매칭 진단
              </h4>
              <p className="text-xs text-indigo-800">
                선택하신 스킬 <strong>[{userProfile.skills.slice(0, 4).join(', ')}]</strong> 중 일부가 해당 공고의 요구사항과 잘 부합합니다. 해당 기술을 다룬 프로젝트를 이력서 상단에 배치하세요.
              </p>
            </div>
          ) : (
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between gap-3">
              <div className="text-xs text-amber-900">
                <strong>내 스펙을 등록하시면</strong> 이 공고와의 정밀 매칭 분석을 받아보실 수 있습니다.
              </div>
              <button
                onClick={() => { onClose(); onOpenResumeModal(); }}
                className="px-3 py-1.5 bg-amber-600 text-white rounded-xl text-xs font-bold shrink-0 hover:bg-amber-700"
              >
                스펙 등록
              </button>
            </div>
          )}
        </div>

        {/* 닫기 및 바로 지원 버튼 */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
          >
            닫기
          </button>
          <a
            href={job.originUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#3182F6] hover:bg-blue-600 text-white text-xs font-bold rounded-xl shadow-xs inline-flex items-center gap-1.5 transition-all"
          >
            <span>공고 확인하고 지원하기</span>
            <Zap className="w-3.5 h-3.5 fill-current" />
          </a>
        </div>
      </div>
    </div>
  );
}
