'use client';

import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, User, FileText, Code2, MapPin, Briefcase } from 'lucide-react';
import { UserResumeProfile } from '../types/job';

interface ResumeSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProfile: UserResumeProfile | null;
  onSaveProfile: (profile: UserResumeProfile) => void;
}

const COMMON_SKILLS = [
  'React', 'TypeScript', 'Next.js', 'Vue.js', 'JavaScript',
  'Node.js', 'Spring Boot', 'Java', 'Python', 'FastAPI',
  'SQL', 'PostgreSQL', 'Docker', 'AWS', 'Kafka',
  'Git', 'Figma', '데이터분석'
];

export default function ResumeSetupModal({
  isOpen,
  onClose,
  currentProfile,
  onSaveProfile
}: ResumeSetupModalProps) {
  const [targetRole, setTargetRole] = useState(currentProfile?.targetRole || 'frontend');
  const [experienceLevel, setExperienceLevel] = useState(currentProfile?.experienceLevel || '신입');
  const [selectedSkills, setSelectedSkills] = useState<string[]>(
    currentProfile?.skills || ['React', 'TypeScript', 'Git']
  );
  const [customSkillInput, setCustomSkillInput] = useState('');
  const [preferredLocation, setPreferredLocation] = useState(
    currentProfile?.preferredLocation || '서울/수도권'
  );

  if (!isOpen) return null;

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(prev => prev.filter(s => s !== skill));
    } else {
      setSelectedSkills(prev => [...prev, skill]);
    }
  };

  const handleAddCustomSkill = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && customSkillInput.trim()) {
      e.preventDefault();
      const val = customSkillInput.trim();
      if (!selectedSkills.includes(val)) {
        setSelectedSkills(prev => [...prev, val]);
      }
      setCustomSkillInput('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const roleNames: Record<string, string> = {
      frontend: '프론트엔드 엔지니어',
      backend: '백엔드/서버 엔지니어',
      data: '데이터/AI 엔지니어',
      fullstack: '풀스택 엔지니어',
      any: '직무 무관'
    };

    const newProfile: UserResumeProfile = {
      targetRole,
      targetRoleName: roleNames[targetRole] || '소프트웨어 엔지니어',
      experienceLevel,
      skills: selectedSkills,
      preferredLocation
    };

    onSaveProfile(newProfile);
    alert('🎯 취준생 간편 이력서가 저장되었습니다!\n이제 각 채용공고마다 내 스펙과의 실시간 AI 매칭률이 정확하게 표시됩니다.');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
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
            <span>1분 초간단 스펙 등록</span>
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
            내 맞춤 채용공고 & 진짜 AI 매칭률 설정
          </h3>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            긴 자기소개서를 쓸 필요 없습니다. 핵심 직무와 보유 기술만 선택하면 303개 공고 중 나에게 딱 맞는 순서대로 정렬해 드립니다.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
          {/* 1. 희망 직무 */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-2 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-[#3182F6]" />
              <span>희망 직무 분야 *</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'frontend', label: '프론트엔드' },
                { id: 'backend', label: '백엔드' },
                { id: 'data', label: '데이터/AI' },
                { id: 'fullstack', label: '풀스택' }
              ].map(item => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setTargetRole(item.id)}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs border text-center transition-all ${
                    targetRole === item.id 
                      ? 'bg-[#3182F6] text-white border-[#3182F6] shadow-xs' 
                      : 'bg-slate-50 text-slate-600 border-slate-200/80 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. 경력 상태 */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-2 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-emerald-600" />
              <span>현재 경력 상태 *</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['신입 (첫 취업 도전)', '인턴/부트캠프 수료', '주니어 (1~2년차)'].map(exp => (
                <button
                  type="button"
                  key={exp}
                  onClick={() => setExperienceLevel(exp)}
                  className={`py-2 px-2.5 rounded-xl font-semibold text-xs border text-center transition-all ${
                    experienceLevel === exp
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-50 text-slate-600 border-slate-200/80 hover:bg-slate-100'
                  }`}
                >
                  {exp}
                </button>
              ))}
            </div>
          </div>

          {/* 3. 보유 기술스택 */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>내가 다뤄본 기술스택 (복수 선택) *</span>
              </span>
              <span className="text-[11px] text-slate-400 font-normal">{selectedSkills.length}개 선택됨</span>
            </label>
            <div className="flex flex-wrap gap-1.5 mb-2.5 p-3 bg-slate-50 rounded-2xl border border-slate-200/70 max-h-36 overflow-y-auto">
              {COMMON_SKILLS.map(skill => {
                const isSelected = selectedSkills.includes(skill);
                return (
                  <button
                    type="button"
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-[#3182F6] text-white shadow-xs'
                        : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200/70'
                    }`}
                  >
                    {isSelected ? `✓ ${skill}` : skill}
                  </button>
                );
              })}
            </div>
            <input
              type="text"
              value={customSkillInput}
              onChange={e => setCustomSkillInput(e.target.value)}
              onKeyDown={handleAddCustomSkill}
              placeholder="목록에 없는 기술 직접 입력 후 Enter (예: Flutter, C++)"
              className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200/80 rounded-xl focus:outline-none focus:border-[#3182F6] text-slate-900"
            />
          </div>

          {/* 4. 희망 근무지 */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>희망 근무 지역</span>
            </label>
            <select
              value={preferredLocation}
              onChange={e => setPreferredLocation(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200/80 rounded-xl focus:outline-none focus:border-[#3182F6] text-slate-800 font-medium"
            >
              <option value="서울/수도권">서울 / 수도권 전체</option>
              <option value="강남/서초">강남 · 서초 테크밸리</option>
              <option value="판교/분당">판교 · 분당 IT밸리</option>
              <option value="재택/원격">100% 재택 · 원격 근무 선호</option>
              <option value="전국">전국 무관</option>
            </select>
          </div>

          {/* 제출 버튼 */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100 transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#3182F6] hover:bg-blue-600 active:scale-95 text-white rounded-xl text-xs font-bold shadow-sm transition-all inline-flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>내 스펙 저장하고 실시간 매칭률 계산하기</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
