'use client';

import React, { useState } from 'react';
import { X, ShieldCheck, Zap, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface SocialLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { name: string; email: string; avatar: string; provider: string }) => void;
}

export default function SocialLoginModal({ isOpen, onClose, onLoginSuccess }: SocialLoginModalProps) {
  const [showDevBypass, setShowDevBypass] = useState(false);

  if (!isOpen) return null;

  // 실제 OAuth 2.0 리디렉션 처리
  const handleRealOAuth = (provider: 'naver' | 'google') => {
    window.location.href = `/api/auth/${provider}/login`;
  };

  // 로컬/개발자 모의 즉시 로그인 (키 설정 전 테스트용)
  const handleMockLogin = (provider: string) => {
    let mockUser = {
      name: '취준생 라이언 🦁',
      email: 'user@kakao.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      provider: 'kakao'
    };

    if (provider === 'naver') {
      mockUser = {
        name: '도전하는 취준생 🍀',
        email: 'user@naver.com',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
        provider: 'naver'
      };
    } else if (provider === 'google') {
      mockUser = {
        name: '합격러너 알렉스 🏃‍♂️',
        email: 'user@gmail.com',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
        provider: 'google'
      };
    }

    onLoginSuccess(mockUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 animate-fade-in"
        onClick={e => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 헤더 */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#3182F6] flex items-center justify-center mx-auto mb-3">
            <Zap className="w-6 h-6 fill-current" />
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
            3초 만에 굿잡 시작하기
          </h3>
          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
            자소서 쓰느라 지친 취준생 여러분에게<br />
            복잡한 가입 양식을 요구하지 않습니다.
          </p>
        </div>

        {/* 정식 소셜 로그인 버튼 (네이버 & 구글 실제 OAuth) */}
        <div className="space-y-3">
          {/* 1. 네이버 실제 연동 버튼 */}
          <button
            onClick={() => handleRealOAuth('naver')}
            className="w-full flex items-center justify-between py-3.5 px-5 bg-[#03C75A] hover:bg-[#02B350] active:scale-[0.98] text-white text-sm font-bold rounded-2xl transition-all shadow-xs group"
          >
            <div className="flex items-center gap-3">
              <span className="font-black text-base leading-none">N</span>
              <span>네이버 계정으로 로그인</span>
            </div>
            <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded-full font-normal group-hover:translate-x-0.5 transition-transform">
              공식 OAuth ↗
            </span>
          </button>

          {/* 2. 구글 실제 연동 버튼 */}
          <button
            onClick={() => handleRealOAuth('google')}
            className="w-full flex items-center justify-between py-3.5 px-5 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-800 text-sm font-bold rounded-2xl border border-slate-200 transition-all shadow-xs group"
          >
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              <span>구글 계정으로 로그인</span>
            </div>
            <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-normal group-hover:translate-x-0.5 transition-transform">
              공식 OAuth ↗
            </span>
          </button>

          {/* 3. 카카오 버튼 (대표님 지침: 카카오는 추후 정식 연동) */}
          <button
            onClick={() => handleMockLogin('kakao')}
            className="w-full flex items-center justify-between py-3.5 px-5 bg-[#FEE500] hover:bg-[#FDD800] active:scale-[0.98] text-[#191919] text-sm font-bold rounded-2xl transition-all shadow-xs"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.477 3 2 6.477 2 10.767c0 2.807 1.895 5.27 4.75 6.645-.205.748-.74 2.707-.847 3.123-.133.518.19.512.4.373.167-.11 2.65-1.8 3.73-2.535.63.09 1.287.139 1.967.139 5.523 0 10-3.477 10-7.745C22 6.477 17.523 3 12 3z"/>
              </svg>
              <span>카카오 계정으로 로그인</span>
            </div>
            <span className="text-[10px] bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded-full font-medium">
              1초 체험 모드
            </span>
          </button>
        </div>

        {/* 로컬/개발자 1초 테스트 바이패스 옵션 (키 발급 대기 중에도 원활한 테스트 지원) */}
        <div className="mt-4 pt-3 border-t border-slate-100 text-center">
          <button
            onClick={() => setShowDevBypass(!showDevBypass)}
            className="text-[11px] text-slate-400 hover:text-slate-600 transition-colors underline"
          >
            {showDevBypass ? '테스트 로그인 닫기' : '⚡ 클라우드 키 설정 전 빠른 테스트 로그인'}
          </button>

          {showDevBypass && (
            <div className="mt-2.5 p-2 bg-slate-50 rounded-xl flex items-center justify-center gap-2 text-xs">
              <button
                onClick={() => handleMockLogin('naver')}
                className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-bold hover:bg-emerald-200 transition-colors text-[11px]"
              >
                네이버 즉시 로그인
              </button>
              <button
                onClick={() => handleMockLogin('google')}
                className="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-800 font-bold hover:bg-blue-200 transition-colors text-[11px]"
              >
                구글 즉시 로그인
              </button>
            </div>
          )}
        </div>

        {/* 안심 보증 뱃지 */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span>익명 라운지 활동 시 실명과 이메일은 100% 비공개 보호됩니다.</span>
        </div>
      </div>
    </div>
  );
}
