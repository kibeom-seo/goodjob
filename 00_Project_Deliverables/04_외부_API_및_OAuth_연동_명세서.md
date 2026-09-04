# [외부 API 및 OAuth 연동 명세서] 굿잡 (GoodJob)

## 1. 소셜 OAuth 2.0 연동
### 1) Google OAuth 2.0
- 로그인 진입점: /api/auth/google/login
- 콜백 처리기: /api/auth/callback/google
- 스코프: openid email profile

### 2) Naver OAuth 2.0
- 로그인 진입점: /api/auth/naver/login
- 콜백 처리기: /api/auth/callback/naver
- 응답 데이터: 
esponse.id, 
esponse.email, 
esponse.name

## 2. Google Gemini 3.6 Flash AI 연동
- 엔드포인트: Google Generative Language API v1beta
- 활용 모델: gemini-3.6-flash
- 용도: 커뮤니티 24시간 미답변 질문 감지 시 1초 내 합격자 기준 멘토링 초안 자동 생성

## 3. 국세청 홈택스 사업자등록 진위확인 API
- 연동 방식: REST API POST / 국세청 사업자등록 상태조회
- 입력: _no (10자리 숫자)
- 판정: 계속사업자(01) 여부 검증 후 기업 공고 등록 자격 부여