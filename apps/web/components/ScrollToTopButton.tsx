'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 300px 이상 스크롤되면 버튼 노출
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // 초기 스크롤 위치 검사
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-40 transition-all duration-300 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-white/95 hover:bg-white text-slate-700 hover:text-[#3182F6] shadow-lg hover:shadow-xl border border-slate-200/90 backdrop-blur-md flex flex-col items-center justify-center transition-all active:scale-90 hover:-translate-y-1 group"
        aria-label="페이지 상단으로 이동"
        title="맨 위로 가기"
      >
        <ArrowUp className="w-4 h-4 text-slate-600 group-hover:text-[#3182F6] transition-transform group-hover:-translate-y-0.5 duration-200" />
        <span className="text-[10px] font-black tracking-tight text-slate-500 group-hover:text-[#3182F6] transition-colors leading-none mt-0.5">
          TOP
        </span>
      </button>
    </div>
  );
}
