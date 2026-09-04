'use client';

import React from 'react';
import { X, Bookmark, ExternalLink, Trash2, Zap, Building2, MapPin } from 'lucide-react';
import { JobPosting } from '../types/job';

interface ScrapDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedJobs: JobPosting[];
  onRemoveBookmark: (id: string) => void;
}

export default function ScrapDrawerModal({
  isOpen,
  onClose,
  bookmarkedJobs,
  onRemoveBookmark
}: ScrapDrawerModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300"
        onClick={e => e.stopPropagation()}
      >
        {/* 드로어 헤더 */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#3182F6] flex items-center justify-center">
              <Bookmark className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-base">내 관심 공고 보관함</h3>
              <p className="text-[11px] text-slate-400">총 {bookmarkedJobs.length}개의 스크랩 공고</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 보관함 목록 */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {bookmarkedJobs.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
              <Bookmark className="w-12 h-12 stroke-1 mb-2 text-slate-300" />
              <p className="text-sm font-bold text-slate-600">보관된 공고가 없습니다.</p>
              <p className="text-xs text-slate-400 mt-1">
                피드에서 관심 있는 채용공고의 북마크 아이콘을 눌러 저장해 보세요!
              </p>
            </div>
          ) : (
            bookmarkedJobs.map(job => (
              <div 
                key={job.id}
                className="bg-slate-50/80 hover:bg-slate-100/80 rounded-2xl p-4 border border-slate-200/60 transition-all text-xs"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <span className="font-bold text-slate-800 text-xs truncate">{job.companyName}</span>
                  <button
                    onClick={() => onRemoveBookmark(job.id)}
                    className="text-slate-400 hover:text-rose-500 p-1 transition-colors"
                    title="보관함에서 삭제"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <h4 className="font-bold text-slate-900 text-sm line-clamp-1 mb-2">
                  {job.title}
                </h4>
                <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-3">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                  <span>·</span>
                  <span className="text-rose-600 font-semibold">{job.deadlineText}</span>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-200/50">
                  <a
                    href={job.originUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-[11px] inline-flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>원문 공고</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href={job.originUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 px-3 rounded-xl bg-[#3182F6] hover:bg-blue-600 text-white font-bold text-[11px] inline-flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>지원하기</span>
                    <Zap className="w-3 h-3 fill-current" />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
