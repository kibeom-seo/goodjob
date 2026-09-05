'use client';

import React, { useState } from 'react';
import { 
  X, Rocket, Zap, ShieldCheck, Check, CreditCard, Sparkles, 
  HelpCircle, AlertCircle, ChevronRight, CheckCircle2, RefreshCw 
} from 'lucide-react';

export interface B2BPackage {
  id: 'BOOST_7D' | 'BOOST_30D' | 'CREDIT_100K' | 'CREDIT_300K';
  name: string;
  badge: string;
  price: number;
  originalPrice?: number;
  periodText: string;
  description: string;
  benefits: string[];
  popular?: boolean;
}

const PACKAGES: B2BPackage[] = [
  {
    id: 'BOOST_7D',
    name: '공고 상단 부스팅 (7일)',
    badge: '인기 가성비',
    price: 99000,
    originalPrice: 150000,
    periodText: '7일간 유효',
    description: '단기 집중 채용! 메인 채용 피드 최상단 골든 슬롯 우선 노출',
    benefits: [
      '메인 피드 최상단 황금 영역 고정 노출',
      '[🚀 프리미엄 부스팅] 네온 골드 뱃지 부착',
      '취준생 지원율 평균 3.8배 상승 효과',
      '검색 결과 및 카테고리 탭 최우선 정렬'
    ]
  },
  {
    id: 'BOOST_30D',
    name: '공고 상단 부스팅 (30일)',
    badge: '최고 추천',
    price: 290000,
    originalPrice: 450000,
    periodText: '30일간 유효 (월간)',
    description: '핵심 인재 대량 채용! 30일간 지속적인 브랜드 브랜딩 & 상단 노출',
    benefits: [
      '30일간 피드 최상단 및 추천 섹션 영구 고정',
      '실시간 급상승 검색어 매칭 시 1순위 가중치',
      '[🔥 긴급 채용 / 상시 부스팅] 듀얼 뱃지',
      '굿잡 주간 뉴스레터 채용 픽 우선 송출',
      '전담 채용 매니저 1:1 ATS 컨설팅 지원'
    ],
    popular: true
  },
  {
    id: 'CREDIT_100K',
    name: 'B2B 열람 크레딧 (10만P)',
    badge: '실속 충전',
    price: 100000,
    periodText: '유효기간 1년',
    description: '합격자 검증 리포트 열람 및 시니어 인재풀 다이렉트 컨택',
    benefits: [
      '100,000 크레딧 즉시 지급',
      '검증된 구직자 심층 포트폴리오 열람 (1회당 2,000P)',
      '다이렉트 커피챗 면접 제안 메시지 발송',
      '결제 금액 100% 세금계산서/현금영수증 발행'
    ]
  },
  {
    id: 'CREDIT_300K',
    name: 'B2B 열람 크레딧 (30만P)',
    badge: '10% 보너스',
    price: 270000,
    originalPrice: 300000,
    periodText: '유효기간 1년 (10% 할인)',
    description: '대규모 공채 필수! 3만 포인트 추가 할인 혜택',
    benefits: [
      '300,000 크레딧 즉시 지급 (실결제 27만 원)',
      'ATS 지원자 AI 적합도 심층 리포트 무제한 언락',
      '비공개 시니어 탤런트 풀 우선 매칭 권한',
      '잔여 크레딧 미사용 시 전액 환불 보장'
    ]
  }
];

interface B2BPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetJobId?: string;
  targetJobTitle?: string;
  onPaymentSuccess?: (order: any) => void;
}

export default function B2BPaymentModal({
  isOpen,
  onClose,
  targetJobId,
  targetJobTitle,
  onPaymentSuccess
}: B2BPaymentModalProps) {
  const [selectedPkgId, setSelectedPkgId] = useState<'BOOST_7D' | 'BOOST_30D' | 'CREDIT_100K' | 'CREDIT_300K'>('BOOST_7D');
  const [paymentMethod, setPaymentMethod] = useState<'CARD' | 'TOSS_PAY' | 'KAKAO_PAY' | 'NAVER_PAY'>('CARD');
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<any | null>(null);

  if (!isOpen) return null;

  const selectedPkg = PACKAGES.find(p => p.id === selectedPkgId)!;

  const handlePaymentSubmit = async () => {
    if (!agreeTerms) {
      alert('결제 진행 필수 약관 및 환불 규정에 동의해 주세요.');
      return;
    }

    setIsProcessing(true);
    try {
      // 1. 토스페이먼츠(Toss Payments) 모의 결제 승인 API 호출
      const res = await fetch('/api/b2b/payment/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'user_enterprise_kbseo',
          companyId: 'comp_user_corp',
          packageType: selectedPkg.id,
          targetJobId: targetJobId || 'goodjob-remember-112',
          amount: selectedPkg.price,
          paymentMethod,
          pgPaymentKey: `toss_pay_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
          receiptUrl: `https://receipt.tosspayments.com/mock/${Date.now()}`
        })
      });

      const data = await res.json();
      if (data.success) {
        setCompletedOrder(data.order);
        if (onPaymentSuccess) {
          onPaymentSuccess(data.order);
        }
      } else {
        alert(data.error || '결제 승인 중 오류가 발생했습니다.');
      }
    } catch (err: any) {
      alert('결제 통신 실패: ' + err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8">
        {/* 닫기 버튼 */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!completedOrder ? (
          <div className="space-y-6">
            {/* 상단 타이틀 */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" /> B2B 기업 전용 프리미엄 스폰서십
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                공고 상단 부스팅 & 인재풀 크레딧 결제
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {targetJobTitle ? (
                  <span>적용 대상 공고: <strong className="text-blue-600">{targetJobTitle}</strong></span>
                ) : (
                  '상위 1% 인재를 빠르게 영입할 수 있는 굿잡 공식 B2B 솔루션입니다.'
                )}
              </p>
            </div>

            {/* 1. 요금제 상품 선택 그리드 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {PACKAGES.map(pkg => {
                const isSelected = selectedPkgId === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/40 shadow-md shadow-blue-500/10'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-black shadow-xs">
                        BEST CHOICE
                      </span>
                    )}

                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500">{pkg.badge}</span>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          isSelected ? 'bg-blue-600 text-white' : 'border border-slate-300'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 mt-1">{pkg.name}</h3>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">{pkg.description}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-baseline justify-between">
                      <span className="text-[11px] text-slate-400">{pkg.periodText}</span>
                      <div className="text-right">
                        {pkg.originalPrice && (
                          <span className="text-[11px] text-slate-400 line-through mr-1.5">
                            {pkg.originalPrice.toLocaleString()}원
                          </span>
                        )}
                        <span className="text-base font-black text-slate-900">
                          {pkg.price.toLocaleString()}<span className="text-xs font-bold ml-0.5">원</span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 2. 선택된 패키지 혜택 요약 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Rocket className="w-4 h-4 text-blue-600" />
                선택 상품 제공 혜택: <span className="text-blue-600">{selectedPkg.name}</span>
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                {selectedPkg.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. 결제 수단 선택 */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">결제 수단 (Toss Payments 연동)</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'CARD', label: '신용/법인카드', icon: CreditCard },
                  { id: 'TOSS_PAY', label: '토스페이', icon: Zap },
                  { id: 'KAKAO_PAY', label: '카카오페이', icon: Sparkles },
                  { id: 'NAVER_PAY', label: '네이버페이', icon: ShieldCheck }
                ].map(m => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPaymentMethod(m.id as any)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      paymentMethod === m.id
                        ? 'border-blue-600 bg-blue-50 text-blue-700 font-extrabold shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <m.icon className="w-3.5 h-3.5" />
                    <span>{m.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. 약관 동의 및 환불 정책 안내 */}
            <div className="p-3.5 rounded-xl bg-slate-100/70 border border-slate-200 text-[11px] text-slate-500 space-y-2">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input 
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
                />
                <span className="font-semibold text-slate-700">
                  구매 조건 확인 및 전자금융거래 결제 대행 서비스 약관 동의 (필수)
                </span>
              </label>
              <p className="text-[10px] text-slate-400 pl-6 leading-relaxed">
                * 부스팅 서비스는 결제 완료 즉시 시스템에 실시간 반영되며, 개시 후 중도 취소 시 잔여 일수 기준으로 환불 규정이 적용됩니다.
              </p>
            </div>

            {/* 하단 결제 실행 버튼 */}
            <button
              onClick={handlePaymentSubmit}
              disabled={isProcessing}
              className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-black text-sm sm:text-base transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>토스페이먼츠 보안 승인 중...</span>
                </>
              ) : (
                <>
                  <span>{selectedPkg.price.toLocaleString()}원 안전 결제하기</span>
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        ) : (
          /* 결제 완료 영수증 뷰 */
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                결제 승인 완료
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-2">
                프리미엄 부스팅이 즉시 활성화되었습니다!
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                주문번호: <strong className="text-slate-800">{completedOrder.orderId}</strong>
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left space-y-3 max-w-md mx-auto text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">구매 패키지</span>
                <span className="font-bold text-slate-900">{selectedPkg.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">결제 금액</span>
                <span className="font-black text-blue-600">{completedOrder.amount?.toLocaleString()}원</span>
              </div>
              {completedOrder.boostExpiresAt && (
                <div className="flex justify-between">
                  <span className="text-slate-500">부스팅 만료 일시</span>
                  <span className="font-bold text-slate-900">{completedOrder.boostExpiresAt}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-slate-500">전자 영수증</span>
                <a 
                  href={completedOrder.receiptUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="font-bold text-blue-600 hover:underline"
                >
                  매출전표 확인 ➔
                </a>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors shadow-sm"
            >
              확인 및 대시보드로 돌아가기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
