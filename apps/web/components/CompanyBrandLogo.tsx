'use client';

import React, { useState } from 'react';

interface CompanyBrandLogoProps {
  name: string;
  logo?: string;
  domain?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

/**
 * 국내외 주요 테크 기업 공식 도메인 매핑 테이블
 * - 글로벌 Logo API (Google High-Res Favicon CDN)를 통해 정품 로고 자동 실시간 패치
 */
const KNOWN_COMPANY_DOMAINS: Record<string, string> = {
  삼성전자: 'samsung.com',
  삼성: 'samsung.com',
  야놀자: 'yanolja.com',
  토스: 'toss.im',
  비바리퍼블리카: 'toss.im',
  네이버: 'navercorp.com',
  라인: 'linepluscorp.com',
  카카오: 'kakaocorp.com',
  카카오페이: 'kakaopay.com',
  카카오뱅크: 'kakaobank.com',
  당근: 'daangn.com',
  당근마켓: 'daangn.com',
  쿠팡: 'coupang.com',
  우아한형제들: 'woowahan.com',
  배달의민족: 'woowahan.com',
  배민: 'woowahan.com',
  하이브: 'hybecorp.com',
  하이브랩: 'hybelab.com',
  넥슨: 'nexon.com',
  넷마블: 'netmarble.com',
  무신사: 'musinsa.com',
  크래프톤: 'krafton.com',
  직방: 'zigbang.com',
  티맥스: 'tmaxsoft.com',
  티맥스티베로: 'tmaxsoft.com',
  엔에이치엔: 'nhn.com',
  세스코: 'cesco.co.kr',
  비트컴퓨터: 'bit.kr',
  웹젠: 'webzen.com',
  인스피언: 'inspien.co.kr',
  이씨오: 'eco.co.kr',
  테크랩스: 'techlabs.co.kr',
  지에스아이티엠: 'gsitm.com',
  미디어윌: 'mediawill.com',
  굿모닝아이텍: 'gmit.co.kr',
  미소정보기술: 'misoinfo.co.kr',
  원티드랩: 'wantedlab.com',
  사람인: 'saramin.co.kr',
  잡코리아: 'jobkorea.co.kr',
  드라마앤컴퍼니: 'rememberapp.co.kr',
  리멤버: 'rememberapp.co.kr',
  당근페이: 'daangnpay.com'
};

/**
 * 기업 이니셜 뱃지용 프리미엄 그라디언트 테마 (Tailwind Gradients)
 */
const GRADIENT_PALETTES = [
  'from-blue-600 via-indigo-600 to-indigo-700',
  'from-indigo-600 via-purple-600 to-violet-700',
  'from-emerald-600 via-teal-600 to-teal-700',
  'from-sky-600 via-blue-600 to-blue-700',
  'from-violet-600 via-fuchsia-600 to-purple-700',
  'from-rose-500 via-rose-600 to-pink-700',
  'from-amber-500 via-orange-600 to-orange-700',
  'from-cyan-600 via-teal-600 to-emerald-700',
  'from-slate-700 via-slate-800 to-slate-900'
];

const SIZE_CLASSES = {
  sm: 'w-10 h-10 rounded-xl text-xs',
  md: 'w-12 h-12 rounded-xl text-sm',
  lg: 'w-14 h-14 rounded-2xl text-base',
  xl: 'w-16 h-16 rounded-2xl text-lg'
};

export default function CompanyBrandLogo({
  name,
  logo,
  domain,
  size = 'lg',
  className = ''
}: CompanyBrandLogoProps) {
  const [imgError, setImgError] = useState(false);

  // 1. 법인 접두사 정제: "(주)", "주식회사", "㈜", "(유)" 등 제거
  const cleanName = (name || '기업')
    .replace(/[\(\[\{]?(주|유|사|재|합)[\)\]\}]?/g, '')
    .replace(/주식회사/g, '')
    .trim();

  // 2. 기업 도메인 식별 (props.domain 우선, 없으면 사전 정의된 기업명 매핑)
  let resolvedDomain = domain || '';
  if (!resolvedDomain) {
    const matchedKey = Object.keys(KNOWN_COMPANY_DOMAINS).find(
      k => cleanName.includes(k) || (name && name.includes(k))
    );
    if (matchedKey) {
      resolvedDomain = KNOWN_COMPANY_DOMAINS[matchedKey];
    }
  }

  // 3. 글로벌 정품 로고 URL 결정 (Google High-Res Favicon CDN)
  let targetLogoUrl = '';
  if (logo && !logo.includes('unsplash.com')) {
    targetLogoUrl = logo;
  } else if (resolvedDomain) {
    // Google 글로벌 128px 고해상도 파비콘 API (삼성, 야놀자 등 공식 브랜드 로고 실시간 반환)
    targetLogoUrl = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.${resolvedDomain}&size=128`;
  }

  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.lg;

  // 4. 정품 로고 이미지 렌더링 (도메인 기반 패치 성공 시)
  if (targetLogoUrl && !imgError) {
    return (
      <div 
        className={`${sizeClass} bg-white flex items-center justify-center shrink-0 shadow-xs ring-1 ring-slate-200/80 overflow-hidden relative group ${className}`}
        title={name}
      >
        <img
          src={targetLogoUrl}
          alt={name}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-full object-contain p-1.5 transition-transform group-hover:scale-105"
        />
      </div>
    );
  }

  // 5. 도메인 미식별 또는 로고 로드 실패 시: 세련된 모노그램 이니셜 뱃지로 폴백
  const initial = cleanName.length >= 2 ? cleanName.slice(0, 2) : cleanName || '기업';

  let hash = 0;
  for (let i = 0; i < cleanName.length; i++) {
    hash = cleanName.charCodeAt(i) + ((hash << 5) - hash);
  }
  const gradientClass = GRADIENT_PALETTES[Math.abs(hash) % GRADIENT_PALETTES.length];

  return (
    <div 
      className={`${sizeClass} bg-gradient-to-br ${gradientClass} text-white font-black flex items-center justify-center shrink-0 shadow-xs ring-1 ring-black/10 select-none tracking-tight relative overflow-hidden ${className}`}
      title={name}
    >
      {/* 3D 글래스모피즘 상단 입체 하이라이트 */}
      <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />
      <span className="relative z-10 drop-shadow-xs font-mono font-black">{initial}</span>
    </div>
  );
}
