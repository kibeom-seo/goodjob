# 🚀 통합 채용정보 큐레이션 및 하이브리드 커뮤니티 플랫폼 (JobConnect)

> 분산된 주요 채용 플랫폼(잡코리아, 사람인, 리멤버, 캐치)의 공고를 실시간 일원화하고, 블라인드형 철저한 익명 커뮤니티를 결합한 구직/이직 종합 플랫폼 프로젝트입니다.

---

## 📂 프로젝트 산출물 목차 (진행 단계별 폴더 구성)

본 프로젝트는 "기초가 튼튼해야 한다"는 원칙에 따라 요구사항 분석부터 기술 스펙, UI/UX 스토리보드, 인프라 및 운영 정책까지 체계적인 문서화를 완료하고 단계별로 배치했습니다.

```
f:\AI\채용\
├── 00_Project_Management/          # 📌 프로젝트 거버넌스 및 로드맵
│   ├── 01_Cloudflare_Evaluation_Report.md  # Cloudflare 적합성 검토 및 하이브리드 도입 보고서
│   └── 02_Project_Master_Plan.md           # 12주 종합 개발 마스터 플랜 및 운영 원칙
│
├── 01_Requirements/                # 📋 기능 및 비기능 요구사항 명세
│   ├── 01_Functional_Requirements_SRS.md   # 모듈별 상세 기능 요구사항 정의서 (SRS)
│   └── 02_NonFunctional_Legal_Compliance.md# 성능 기준, 개인정보 보호 및 웹 스크래핑 법적 대응 지침
│
├── 02_Architecture_TechSpec/       # ⚙️ 시스템 아키텍처 및 상세 기술 스펙
│   ├── 01_System_Architecture_DataPipeline.md # 전체 엔드투엔드 토폴로지 및 Kafka 메시징 스펙
│   ├── 02_Deduplication_Anonymity_Algorithm.md# SimHash 중복제거 & 단방향 암호화 익명 알고리즘
│   └── 03_Database_ERD_API_Spec.md            # PostgreSQL ERD 및 핵심 REST API 규격서
│
├── 03_UI_UX_Design/                # 🎨 화면 기획 및 UI 스토리보드
│   ├── assets/                     # Google AI Studio(Imagen)로 생성한 7종 고해상도 목업 이미지
│   ├── 01_Information_Architecture_Flow.md    # 정보구조도(IA) 및 주요 사용자 시나리오 플로우
│   └── 02_Screen_Storyboard_Wireframe.md      # 7개 핵심 화면별 상세 컴포넌트 & 인터랙션 스토리보드
│
├── 04_Infrastructure_DevOps/       # 🚀 배포 인프라 및 CI/CD
│   ├── 01_Local_Docker_Compose_Guide.md       # 로컬 Docker 모노레포 환경 구축 가이드
│   └── 02_Cloudflare_and_Deployment_Pipeline.md# Cloudflare Pages + Hetzner VPS + GitHub Actions
│
└── 05_Maintenance_Policy/          # 🔧 운영 및 유지보수 SLA
    └── 01_Scraping_Maintenance_SLA_Policy.md  # DOM 해시 변경 감지, 5분 YAML 핫픽스 및 SLA 정책
```

---

## 🖥️ UI/UX 핵심 화면 프리뷰 (7종)

1. **[랜딩 페이지](03_UI_UX_Design/02_Screen_Storyboard_Wireframe.md#1-랜딩-페이지-landing-page)**: 4개사 통합 검색창, 실시간 수집 통계 배너, 원클릭 소셜 로그인
2. **[채용 공고 목록 뷰어](03_UI_UX_Design/02_Screen_Storyboard_Wireframe.md#2-채용-공고-목록-뷰어-job-listing-viewer)**: 다차원 필터 사이드바 + 멀티소스 출처 뱃지(잡코리아 외 2개) + D-day 뱃지
3. **[공고 상세 뷰어](03_UI_UX_Design/02_Screen_Storyboard_Wireframe.md#3-채용-공고-상세-뷰어-job-detail-viewer)**: **Google Gemini AI 3줄 요약 위젯** + 원본 플랫폼 탭 바로가기
4. **[익명 커뮤니티 게시판](03_UI_UX_Design/02_Screen_Storyboard_Wireframe.md#4-익명-커뮤니티-게시판-anonymous-community-board)**: 인기 해시태그 바 + 직무/연차 태그 피드 + 블라인드형 익명 UI
5. **[게시글 상세 및 스레드](03_UI_UX_Design/02_Screen_Storyboard_Wireframe.md#5-커뮤니티-게시글-상세-및-대댓글-스레드-post-detail)**: 무한 중첩 대댓글 스레드 + 실시간 어뷰징 필터
6. **[마이페이지](03_UI_UX_Design/02_Screen_Storyboard_Wireframe.md#6-마이페이지-mypage)**: 스크랩 공고 보관함 + 본인만 조회 가능한 익명 글/댓글 내역
7. **[관리자 대시보드](03_UI_UX_Design/02_Screen_Storyboard_Wireframe.md#7-관리자-모니터링-대시보드-admin-dashboard)**: 실시간 크롤러 헬스체크 + 셀렉터 무중단 핫픽스

---

## 🛠️ 추천 운영 스택 (월 0~1만원대 고성능 구성)
* **프론트엔드/CDN**: **Cloudflare Pages** (대역폭 완전 무료, 글로벌 CDN, DDoS 방어)
* **백엔드 API**: **Railway** 또는 **Hetzner VPS** (NestJS REST API)
* **데이터베이스**: **Supabase** (PostgreSQL 무료 티어)
* **캐시 / 큐**: **Upstash** (Serverless Redis & Kafka 무료 티어)
* **크롤러 인프라**: **Hetzner VPS** 또는 **Oracle Cloud Free VM** (Docker / Python)
* **AI 모델**: **Google AI Studio** (Gemini API 1.5 Flash 무료 티어)
