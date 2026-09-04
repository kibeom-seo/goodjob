# [디자인 시스템] 모아잡 (MoaJob) 공식 디자인 토큰 명세서

> Google AI Studio 기반으로 확정된 토스(Toss) & 애플(Apple) 스타일 미니멀리즘 디자인 시스템

---

## 1. 컬러 팔레트 (Color Tokens)

| 토큰명 | HEX / Tailwind | 용도 및 시각적 위계 |
| :--- | :--- | :--- |
| **Canvas Background** | `#F8FAFC` (`bg-slate-50`) | 눈의 피로를 최소화하는 소프트 오프화이트 캔버스 |
| **Surface Card** | `#FFFFFF` (`bg-white`) | 주요 공고 카드 및 모달 컨테이너 (순백색) |
| **Primary Blue** | `#3182F6` | 토스 시그니처 블루 (CTA, 메인 브랜드 배지, 핵심 액센트) |
| **Accent Indigo** | `#4F46E5` | Gemini AI 요약 영역 그라디언트 및 AI 지능형 기능 강조 |
| **Text Primary** | `#0F172A` (`text-slate-900`) | 헤드라인, 기업명, 공고명 (고대비 볼드) |
| **Text Secondary** | `#64748B` (`text-slate-500`) | 경력, 위치, 연봉 등 메타데이터 라벨 |
| **Text Muted** | `#94A3B8` (`text-slate-400`) | 타임스탬프, 인풋 플레이스홀더 |
| **Badge Emerald** | `#10B981` (`text-emerald-600`) | 현직자 재직 인증 뱃지 및 지원자 매칭률 |
| **Social Kakao** | `#FEE500` | 카카오 3초 원클릭 간편 로그인 (텍스트: `#191919`) |
| **Social Naver** | `#03C75A` | 네이버 3초 원클릭 간편 로그인 (텍스트: `#FFFFFF`) |
| **Social Google** | `#FFFFFF` | 구글 3초 원클릭 간편 로그인 (보더: `border-slate-200`) |

---

## 2. 소프트 섀도우 토큰 (Soft Shadow Tokens)

답답한 1px 검정 테두리를 배제하고, 부드럽게 확산되는 다중 레이어 그림자로 공중에 뜬 듯한 가벼운 입체감을 부여합니다.

```css
/* 1. 기본 카드 섀도우 (답답한 보더 없이 자연스러운 깊이감) */
box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 2px 6px -1px rgba(15, 23, 42, 0.02);

/* 2. 호버 인터랙션 섀도우 (마우스 오버 시 떠오르는 피드백) */
box-shadow: 0 12px 30px -4px rgba(15, 23, 42, 0.08), 0 4px 10px -2px rgba(15, 23, 42, 0.04);

/* 3. 플로팅 모달 / 토스트 팝업 섀도우 */
box-shadow: 0 20px 40px -8px rgba(15, 23, 42, 0.12), 0 1px 3px 0 rgba(15, 23, 42, 0.05);
```

---

## 3. 간격 및 라운딩 규칙 (Spacing & Radius Tokens)

* **카드 외부 패딩**: 모바일 `p-6` (24px), 데스크톱 `p-8` (32px)
* **카드 라운딩**: `rounded-3xl` (24px) - 부드러운 곡률로 모던한 감성
* **인풋 & 버튼 라운딩**: `rounded-2xl` (16px)
* **뱃지 & 상태 칩**: `rounded-full` (9999px)
* **타이포그래피**: `Pretendard Variable` (12px ~ 32px)
