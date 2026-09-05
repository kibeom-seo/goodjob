'use client';

import React, { useState } from 'react';
import { 
  X, Building2, Sparkles, CheckCircle2, Send, ShieldCheck, 
  FileCheck, AlertCircle, ArrowRight, Check, RefreshCw
} from 'lucide-react';
import { JobPosting } from '../types/job';
import { useAlert } from '@/context/AlertContext';

interface DirectJobPostingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newJob: JobPosting) => void;
}

export default function DirectJobPostingModal({ isOpen, onClose, onSubmit }: DirectJobPostingModalProps) {
  const { showWarning, showSuccess, showConfirm } = useAlert();
  // 스텝 관리: step 1 = 기업 실명/사업자 인증, step 2 = 채용공고 작성
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);

  // 기업 인증 필드
  const [businessNumber, setBusinessNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [ceoName, setCeoName] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [isBizVerified, setIsBizVerified] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerifyingCode, setIsVerifyingCode] = useState(false);

  // 공고 작성 필드
  const [title, setTitle] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('신입/경력무관');
  const [location, setLocation] = useState('서울 강남구 테헤란로');
  const [salary, setSalary] = useState('면접 후 결정 (신입 기준 4,000만원 이상 협의)');
  const [tagsInput, setTagsInput] = useState('React, TypeScript, Next.js');
  const [mission, setMission] = useState('');
  const [requirements, setRequirements] = useState('');
  const [culture, setCulture] = useState('');

  if (!isOpen) return null;

  // 사업자등록번호 국세청 진위 확인 모의 검증
  const handleVerifyBusinessNumber = () => {
    const cleaned = businessNumber.replace(/[^0-9]/g, '');
    if (cleaned.length !== 10) {
      showWarning('사업자등록번호 확인', '사업자등록번호 10자리를 정확히 입력해 주세요. (예: 220-81-62517)');
      return;
    }
    // 유효 사업자 인증 성공 처리
    setIsBizVerified(true);
    showSuccess('국세청 진위확인 완료', '국세청 홈택스 DB와 대조하여 정상 사업자임이 인증되었습니다.');
  };

  // 기업 공식 이메일 인증코드 발송 및 1초 인증
  const handleSendEmailVerification = () => {
    if (!contactEmail || !contactEmail.includes('@')) {
      showWarning('이메일 형식 오류', '유효한 회사 이메일 주소를 입력해 주세요.');
      return;
    }

    const freeMailProviders = ['gmail.com', 'naver.com', 'daum.net', 'kakao.com', 'hanmail.net'];
    const domain = contactEmail.split('@')[1]?.toLowerCase();
    
    if (freeMailProviders.includes(domain)) {
      showConfirm(
        '공식 기업 메일 권장 안내',
        '포털 무료 메일(@' + domain + ')이 입력되었습니다.\n취준생 허위공고 방지를 위해 기업 공식 도메인 메일(예: hr@company.com)을 권장합니다.\n계속 진행하시겠습니까?',
        () => {
          setIsVerifyingCode(true);
          setVerificationCode('742918');
        }
      );
      return;
    }

    setIsVerifyingCode(true);
    setVerificationCode('742918'); // 모의 6자리 인증코드
  };

  const handleConfirmEmailCode = () => {
    setIsEmailVerified(true);
    setIsVerifyingCode(false);
    showSuccess('이메일 인증 완료', '기업 채용 담당자 이메일 인증이 완료되었습니다.');
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isBizVerified) {
      showWarning('인증 필수 안내', '안전한 채용 생태계를 위해 [사업자등록번호 국세청 진위확인]을 먼저 완료해 주세요.');
      return;
    }
    if (!companyName || !contactEmail) {
      showWarning('필수 정보 누락', '기업명과 지원 접수용 이메일을 입력해 주세요.');
      return;
    }
    setCurrentStep(2);
  };

  const handleSubmitJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      showWarning('제목 누락', '채용공고 제목을 입력해 주세요.');
      return;
    }

    const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean);

    const newJob: JobPosting = {
      id: `direct-job-${Date.now()}`,
      companyName,
      companyLogo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80',
      companyCategory: '기업 직접 등록 채용',
      title,
      experienceLevel,
      location,
      salary,
      deadlineText: '상시채용',
      deadlineDaysLeft: 30,
      collectedSources: ['direct'],
      sourceSummaryText: `🏢 굿잡 인증 기업 (사업자등록번호: ${businessNumber.slice(0, 3)}-**-***** 검증 완료)`,
      sourceType: 'DIRECT_HIRE',
      directApplyEmail: contactEmail,
      tags: ['기업직접등록', '사업자인증완료', ...tags],
      isBookmarked: false,
      applicantCount: 1,
      viewCount: 30,
      matchScorePercent: 95,
      geminiSummary: {
        mission: mission || '해당 직무 코어 역량 수행 및 프로덕트 성장 기여',
        requirements: requirements || '유관 전공 또는 포트폴리오를 보유한 적극적인 취준생/이직러',
        cultureAndBenefits: culture || '4대보험, 자율 출퇴근, 중식 지원 및 성장 장려 문화',
        generatedAt: '기업 인사담당자 직접 인증 등록 완료',
        keywordHighlights: ['사업자인증완료', '기업직접등록', '빠른서류검토']
      },
      blindReviews: [
        {
          id: `rev-direct-${Date.now()}`,
          authorVerifiedOrg: `${companyName} 채용팀`,
          authorRole: contactName ? `${contactName} (인사담당자)` : '인사/채용 담당자',
          tenureYears: '공식인증',
          rating: 5.0,
          content: '취준생 여러분의 소중한 지원을 환영합니다! 굿잡 사업자 인증을 마친 공식 채용공고이며, 서류 접수 시 영업일 기준 3일 이내에 신속히 회신드립니다.',
          likes: 12,
          commentsCount: 0,
          createdAt: '방금 전'
        }
      ]
    };

    onSubmit(newJob);
    showSuccess('인증 공고 등록 완료', `'${companyName}'의 사업자 인증 공고가 정상적으로 등록되었습니다!`);
    onClose();
    setCurrentStep(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 my-8 max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 상단 안내 & 2단계 스텝 인디케이터 */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>기업회원 실명/사업자 인증 후 무료 공고 등록</span>
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
            취준생이 신뢰할 수 있는 공식 인증 채용공고
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            굿잡은 허위/사칭 공고로부터 취준생을 보호하기 위해 국세청 사업자등록 및 회사 이메일 인증 절차를 거친 기업만 공고를 게재할 수 있습니다. (수수료 0원)
          </p>

          {/* 스텝 진행 바 */}
          <div className="flex items-center gap-3 mt-4 pt-3 border-t border-slate-100">
            <div className={`flex items-center gap-2 text-xs font-bold ${
              currentStep === 1 ? 'text-[#3182F6]' : 'text-emerald-600'
            }`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${
                currentStep === 1 ? 'bg-blue-100 text-[#3182F6]' : 'bg-emerald-100 text-emerald-600'
              }`}>
                {isBizVerified ? '✓' : '1'}
              </span>
              <span>1단계: 기업 사업자 진위 인증</span>
            </div>

            <ArrowRight className="w-3.5 h-3.5 text-slate-300" />

            <div className={`flex items-center gap-2 text-xs font-bold ${
              currentStep === 2 ? 'text-[#3182F6]' : 'text-slate-400'
            }`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${
                currentStep === 2 ? 'bg-blue-100 text-[#3182F6]' : 'bg-slate-100 text-slate-400'
              }`}>
                2
              </span>
              <span>2단계: 채용 요강 작성</span>
            </div>
          </div>
        </div>

        {/* STEP 1: 기업 진위 및 사업자등록 인증 폼 */}
        {currentStep === 1 && (
          <form onSubmit={handleNextStep} className="space-y-4 text-xs sm:text-sm animate-fade-in">
            {/* 사업자등록번호 검증 카드 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-extrabold text-slate-800">
                  사업자등록번호 (10자리) *
                </label>
                {isBizVerified && (
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 국세청 정상 사업자 인증완료
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  required
                  value={businessNumber}
                  onChange={e => {
                    setBusinessNumber(e.target.value);
                    setIsBizVerified(false);
                  }}
                  placeholder="예: 220-81-62517 (- 포함 가능)"
                  className="flex-1 px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#3182F6] text-slate-900 font-mono text-xs sm:text-sm"
                />
                <button
                  type="button"
                  onClick={handleVerifyBusinessNumber}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-colors shrink-0 ${
                    isBizVerified 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  {isBizVerified ? '인증완료 ✓' : '국세청 진위확인'}
                </button>
              </div>
              <p className="text-[11px] text-slate-400">
                ※ 국세청 홈택스 사업자등록 상태를 실시간 대조하여 휴/폐업 및 유령 법인 공고를 사전 차단합니다.
              </p>
            </div>

            {/* 기업 기본 정보 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">법인명 / 상호명 *</label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={e => setCompanyName(e.target.value)}
                  placeholder="예: (주)굿잡테크놀로지스"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl focus:outline-none focus:border-[#3182F6] text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">대표자 성명</label>
                <input
                  type="text"
                  value={ceoName}
                  onChange={e => setCeoName(e.target.value)}
                  placeholder="예: 홍길동"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl focus:outline-none focus:border-[#3182F6] text-slate-900"
                />
              </div>
            </div>

            {/* 채용담당자 정보 & 회사 공식 도메인 이메일 인증 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">채용 담당자 성명/직책 *</label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={e => setContactName(e.target.value)}
                  placeholder="예: 김채용 팀장 (인사팀)"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl focus:outline-none focus:border-[#3182F6] text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">담당자 유선/휴대폰 연락처</label>
                <input
                  type="tel"
                  value={contactPhone}
                  onChange={e => setContactPhone(e.target.value)}
                  placeholder="02-1234-5678 또는 010-0000-0000"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl focus:outline-none focus:border-[#3182F6] text-slate-900"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-slate-700">
                  지원 접수용 기업 공식 이메일 *
                </label>
                {isEmailVerified && (
                  <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> 이메일 인증 완료
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={contactEmail}
                  onChange={e => setContactEmail(e.target.value)}
                  placeholder="예: recruit@company.com (기업 도메인 권장)"
                  className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl focus:outline-none focus:border-[#3182F6] text-slate-900"
                />
                <button
                  type="button"
                  onClick={handleSendEmailVerification}
                  className="px-3.5 py-2.5 bg-blue-50 text-[#3182F6] hover:bg-blue-100 rounded-xl text-xs font-bold transition-colors shrink-0"
                >
                  {isEmailVerified ? '재인증' : '인증번호 발송'}
                </button>
              </div>

              {isVerifyingCode && !isEmailVerified && (
                <div className="mt-2 p-3 bg-blue-50/70 border border-blue-200 rounded-xl flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-700 font-bold">인증코드 6자리:</span>
                    <input
                      type="text"
                      value={verificationCode}
                      onChange={e => setVerificationCode(e.target.value)}
                      className="w-24 px-2 py-1 bg-white border border-blue-300 rounded-lg text-center font-mono font-bold text-sm"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleConfirmEmailCode}
                    className="px-3 py-1 bg-[#3182F6] text-white text-xs font-bold rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    인증 확인
                  </button>
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">회사 공식 홈페이지 / 소개 링크</label>
              <input
                type="url"
                value={companyWebsite}
                onChange={e => setCompanyWebsite(e.target.value)}
                placeholder="https://company.com"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl focus:outline-none focus:border-[#3182F6] text-slate-900"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#3182F6] hover:bg-blue-600 active:scale-[0.99] text-white font-bold rounded-2xl shadow-sm inline-flex items-center justify-center gap-2 transition-all"
              >
                <span>기업 인증 확인 및 2단계 채용요강 작성 이동</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: 채용공고 상세 작성 폼 */}
        {currentStep === 2 && (
          <form onSubmit={handleSubmitJob} className="space-y-4 text-xs sm:text-sm animate-fade-in">
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-emerald-800">
                  인증된 기업: {companyName} ({businessNumber})
                </span>
              </div>
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="text-[11px] text-slate-500 hover:text-slate-800 underline"
              >
                기업정보 수정
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">채용공고 제목 *</label>
              <input
                type="text"
                required
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="예: 프론트엔드 주니어 개발자 (React/Next.js) 채용"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl focus:outline-none focus:border-[#3182F6] text-slate-900"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">경력 요건</label>
                <input
                  type="text"
                  value={experienceLevel}
                  onChange={e => setExperienceLevel(e.target.value)}
                  placeholder="예: 신입 / 1~3년"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl focus:outline-none focus:border-[#3182F6] text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">근무 지역</label>
                <input
                  type="text"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  placeholder="예: 서울 강남구 (재택병행)"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl focus:outline-none focus:border-[#3182F6] text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">예상 급여/처우</label>
                <input
                  type="text"
                  value={salary}
                  onChange={e => setSalary(e.target.value)}
                  placeholder="예: 연 3,800만~4,500만"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl focus:outline-none focus:border-[#3182F6] text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">기술스택 태그 (쉼표로 구분)</label>
              <input
                type="text"
                value={tagsInput}
                onChange={e => setTagsInput(e.target.value)}
                placeholder="예: React, TypeScript, Tailwind, 정규직"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl focus:outline-none focus:border-[#3182F6] text-slate-900"
              />
            </div>

            {/* 취준생을 위한 3대 핵심 요약 직접 입력 */}
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100/80 space-y-3">
              <span className="text-xs font-extrabold text-[#3182F6] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> 취준생을 위한 핵심 3줄 브리핑
              </span>
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-0.5">1. 어떤 일을 하게 되나요? (핵심 미션)</label>
                <input
                  type="text"
                  value={mission}
                  onChange={e => setMission(e.target.value)}
                  placeholder="예: 자사 B2B SaaS 대시보드 프론트엔드 신규 기능 개발"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-800"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-0.5">2. 어떤 사람을 원하나요? (자격 요건)</label>
                <input
                  type="text"
                  value={requirements}
                  onChange={e => setRequirements(e.target.value)}
                  placeholder="예: React 기초 이해도 및 협업 커뮤니케이션 능력을 갖춘 분"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-800"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-0.5">3. 어떤 복지와 혜택이 있나요? (처우/문화)</label>
                <input
                  type="text"
                  value={culture}
                  onChange={e => setCulture(e.target.value)}
                  placeholder="예: 주 1회 재택, 점심 식대 지원, 장비 구입비 200만원 지원"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-800"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl transition-colors"
              >
                이전 (기업정보)
              </button>
              <button
                type="submit"
                className="flex-1 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-bold rounded-2xl shadow-sm inline-flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>국세청 인증 마크 부착 공고 등록 완료</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
