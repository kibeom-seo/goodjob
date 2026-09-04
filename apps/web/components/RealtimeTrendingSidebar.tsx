'use client';

import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  ArrowUp, 
  ArrowDown, 
  Minus, 
  Sparkles, 
  Flame, 
  Clock, 
  Search,
  ChevronDown,
  ChevronUp,
  RefreshCw
} from 'lucide-react';

export interface TrendingKeyword {
  rank: number;
  keyword: string;
  change: 'up' | 'down' | 'same' | 'new';
  changeAmount?: number;
  tag: string;
  count: number;
}

const INITIAL_TRENDING: TrendingKeyword[] = [
  { rank: 1, keyword: '토스 신입 프론트엔드', change: 'up', changeAmount: 2, tag: '핀테크', count: 2840 },
  { rank: 2, keyword: '오늘 23:59 마감 공고', change: 'new', tag: 'D-Day', count: 2410 },
  { rank: 3, keyword: 'Spring Boot 백엔드', change: 'same', tag: '서버개발', count: 1980 },
  { rank: 4, keyword: '카카오 테크 인턴', change: 'up', changeAmount: 3, tag: '대기업', count: 1750 },
  { rank: 5, keyword: '비전공자 포트폴리오', change: 'down', changeAmount: 1, tag: '취준꿀팁', count: 1520 },
  { rank: 6, keyword: '초봉 5000 판교 IT', change: 'new', tag: '급여', count: 1390 },
  { rank: 7, keyword: '네이버 클라우드', change: 'up', changeAmount: 1, tag: '인프라', count: 1210 },
  { rank: 8, keyword: 'Next.js 14 풀스택', change: 'same', tag: '웹개발', count: 1080 },
  { rank: 9, keyword: '삼성전자 DS 공채', change: 'down', changeAmount: 2, tag: '공채', count: 960 },
  { rank: 10, keyword: '재택근무 개발자', change: 'up', changeAmount: 4, tag: '근무환경', count: 890 },
];

interface RealtimeTrendingSidebarProps {
  onSelectKeyword: (keyword: string) => void;
  onSelectFilter?: (filterType: string) => void;
}

export default function RealtimeTrendingSidebar({
  onSelectKeyword,
  onSelectFilter,
}: RealtimeTrendingSidebarProps) {
  const [trendingList, setTrendingList] = useState<TrendingKeyword[]>(INITIAL_TRENDING);
  const [currentRollingIndex, setCurrentRollingIndex] = useState(0);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [lastUpdatedTime, setLastUpdatedTime] = useState('20:59:00');

  // 실시간 롤링 타이머 (3초마다 1위 -> 2위 -> 3위 회전)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRollingIndex(prev => (prev + 1) % trendingList.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [trendingList.length]);

  // 주기적 시간 갱신
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      setLastUpdatedTime(`${h}:${m}:${s}`);
    };
    updateClock();
    const clockInterval = setInterval(updateClock, 10000);
    return () => clearInterval(clockInterval);
  }, []);

  const currentRollingItem = trendingList[currentRollingIndex];

  return (
    <>
      {/* 1. 모바일 전용: 상단 1줄 롤링 네이버 티커 */}
      <div className="lg:hidden w-full mb-4 bg-white rounded-2xl border border-slate-200/90 shadow-xs p-3">
        <div className="flex items-center justify-between select-none">
          <div 
            onClick={() => onSelectKeyword(currentRollingItem.keyword)}
            className="flex items-center gap-2 overflow-hidden flex-1 cursor-pointer hover:opacity-80 active:scale-[0.99] transition-all"
            title="클릭 시 해당 검색어로 바로 검색합니다"
          >
            <span className="flex items-center gap-1 text-[11px] font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md shrink-0">
              <TrendingUp className="w-3 h-3" />
              <span>실시간 1~10위</span>
            </span>
            <div className="flex items-center gap-2 truncate text-xs">
              <span className="font-extrabold text-[#3182F6] min-w-[16px]">
                {currentRollingItem.rank}
              </span>
              <span className="font-bold text-slate-800 truncate">
                {currentRollingItem.keyword}
              </span>
              {currentRollingItem.change === 'up' && (
                <span className="text-[10px] text-rose-500 font-bold flex items-center">
                  ▲ {currentRollingItem.changeAmount}
                </span>
              )}
              {currentRollingItem.change === 'down' && (
                <span className="text-[10px] text-blue-500 font-bold flex items-center">
                  ▼ {currentRollingItem.changeAmount}
                </span>
              )}
              {currentRollingItem.change === 'new' && (
                <span className="text-[9px] px-1 py-0.2 rounded bg-amber-100 text-amber-800 font-black">
                  NEW
                </span>
              )}
            </div>
          </div>

          <div 
            onClick={() => setIsMobileExpanded(!isMobileExpanded)}
            className="flex items-center gap-1 text-slate-400 pl-2 cursor-pointer hover:text-slate-600 p-1"
            title="전체 순위 펼치기"
          >
            <span className="text-[10px] font-mono">{lastUpdatedTime}</span>
            {isMobileExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </div>

        {/* 모바일 확장 드롭다운 */}
        {isMobileExpanded && (
          <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-1 gap-1.5 animate-fade-in">
            {trendingList.map((item) => (
              <div
                key={item.rank}
                onClick={() => {
                  onSelectKeyword(item.keyword);
                  setIsMobileExpanded(false);
                }}
                className="flex items-center justify-between p-2 rounded-xl hover:bg-blue-50/70 active:bg-blue-100 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <span className={`w-5 text-center text-xs font-black ${
                    item.rank <= 3 ? 'text-[#3182F6]' : 'text-slate-400'
                  }`}>
                    {item.rank}
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    {item.keyword}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">
                    {item.tag}
                  </span>
                </div>
                <div>
                  {item.change === 'up' && (
                    <span className="text-[11px] text-rose-500 font-bold">▲ {item.changeAmount}</span>
                  )}
                  {item.change === 'down' && (
                    <span className="text-[11px] text-blue-500 font-bold">▼ {item.changeAmount}</span>
                  )}
                  {item.change === 'new' && (
                    <span className="text-[10px] px-1 rounded bg-amber-100 text-amber-800 font-black">NEW</span>
                  )}
                  {item.change === 'same' && (
                    <span className="text-[11px] text-slate-300 font-bold">-</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 2. 데스크톱 전용: 좌측 고정 네이버 실검 위젯 (Sticky Left Sidebar) */}
      <aside className="hidden lg:block w-72 shrink-0">
        <div className="sticky top-20 space-y-4">
          {/* 네이버 스타일 실시간 급상승 검색어 카드 */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
            {/* 위젯 헤더 */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                  <h3 className="text-sm font-extrabold tracking-tight flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-rose-400" />
                    <span>실시간 채용 급상승</span>
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-white/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {lastUpdatedTime}
                </span>
              </div>
              <p className="text-[11px] text-slate-300 mt-1">
                지금 취준생들이 가장 많이 검색하는 핫 키워드
              </p>
            </div>

            {/* 1위~10위 리스트 */}
            <div className="p-2 divide-y divide-slate-100">
              {trendingList.map((item) => {
                const isTop3 = item.rank <= 3;
                return (
                  <button
                    key={item.rank}
                    onClick={() => onSelectKeyword(item.keyword)}
                    className="w-full text-left px-3 py-2.5 rounded-2xl hover:bg-blue-50/80 active:scale-[0.98] transition-all flex items-center justify-between group"
                    title={`클릭 시 '${item.keyword}' 공고를 즉시 검색합니다.`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`w-5 text-center text-sm font-black transition-transform group-hover:scale-110 ${
                        isTop3 ? 'text-[#3182F6]' : 'text-slate-400'
                      }`}>
                        {item.rank}
                      </span>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#3182F6] truncate block transition-colors">
                          {item.keyword}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {item.tag} · {item.count.toLocaleString()}회
                        </span>
                      </div>
                    </div>

                    <div className="shrink-0 ml-2">
                      {item.change === 'up' && (
                        <span className="inline-flex items-center gap-0.5 text-[11px] font-extrabold text-rose-500">
                          <ArrowUp className="w-3 h-3 stroke-[2.5]" />
                          {item.changeAmount}
                        </span>
                      )}
                      {item.change === 'down' && (
                        <span className="inline-flex items-center gap-0.5 text-[11px] font-extrabold text-blue-500">
                          <ArrowDown className="w-3 h-3 stroke-[2.5]" />
                          {item.changeAmount}
                        </span>
                      )}
                      {item.change === 'new' && (
                        <span className="text-[10px] font-black px-1.5 py-0.5 rounded-md bg-amber-100 text-amber-800">
                          NEW
                        </span>
                      )}
                      {item.change === 'same' && (
                        <span className="text-slate-300 font-black text-xs">
                          <Minus className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* 하단 팁 */}
            <div className="bg-slate-50 p-3 border-t border-slate-100 text-center">
              <span className="text-[11px] text-slate-500 font-medium">
                💡 순위 클릭 시 해당 공고가 즉시 검색됩니다.
              </span>
            </div>
          </div>

          {/* 취준생 필수 퀵 필터 배너 카드 */}
          <div className="bg-gradient-to-br from-blue-600 via-[#3182F6] to-indigo-600 rounded-3xl p-4 text-white shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-4 h-4 text-amber-300 animate-bounce" />
              <h4 className="text-xs font-black">골든타임 마감 퀵 숏컷</h4>
            </div>
            <p className="text-[11px] text-blue-100 leading-relaxed mb-3">
              오늘 밤 23:59 마감 공고와 내 이력서 스펙 일치 공고를 바로 확인하세요.
            </p>

            <div className="space-y-1.5">
              <button
                onClick={() => onSelectFilter?.('urgent')}
                className="w-full text-left px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 active:scale-95 transition-all text-xs font-bold flex items-center justify-between text-white"
              >
                <span>🔥 오늘 마감 임박 공고 보기</span>
                <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">즉시</span>
              </button>
              <button
                onClick={() => onSelectFilter?.('matching')}
                className="w-full text-left px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 active:scale-95 transition-all text-xs font-bold flex items-center justify-between text-white"
              >
                <span>✨ 내 스펙 고득점 매칭 공고</span>
                <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">AI</span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
