# [마스터 플랜] 통합 채용정보 큐레이션 및 커뮤니티 플랫폼

## 1. 프로젝트 개요 및 미션
* **프로젝트명**: 통합 채용정보 큐레이션 및 하이브리드 커뮤니티 플랫폼 (JobConnect)
* **핵심 미션**: 분산된 채용 플랫폼(잡코리아, 사람인, 리멤버, 캐치)의 공고를 실시간 일원화하고, 블라인드형 철저한 익명 커뮤니티를 결합하여 구직자와 현직자 간의 신뢰도 높은 정보 생태계를 조성한다.
* **핵심 슬로건**: "흩어진 채용공고, 한 곳에서 비교하고 현직자와 솔직하게 이야기하세요."

---

## 2. 프로젝트 관리 원칙 (Engineering Principles)
1. **기초와 명세 우선 (Specs Before Code)**:
   * 모든 기능은 요구사항 정의서(SRS)와 데이터 명세서(API/ERD)를 기준으로 구현한다.
2. **복원력 있는 데이터 파이프라인 (Resilient Pipeline)**:
   * 외부 사이트 UI 변경이나 차단에 대비하여 셀렉터를 외부화(YAML)하고, Kafka 분산 큐 기반 비동기 파이프라인을 구축한다.
3. **타협 없는 개인정보 및 익명 보안 (Zero-Knowledge Privacy)**:
   * 커뮤니티 작성자의 신원은 관리자나 DB 탈취자도 역추적할 수 없도록 단방향 솔트 해시(SHA-256) 처리한다.
4. **비용 효율적 인프라 (Cost-Effective Scalability)**:
   * Cloudflare(무료 CDN/Pages), Supabase(DB), Hetzner/Oracle(크롤러)을 연계하여 월 0~1만 원대의 저비용 고성능 구조를 달성한다.

---

## 3. 폴더 구조 및 산출물 맵

```
f:\AI\채용\
├── 00_Project_Management/           # 프로젝트 거버넌스 및 관리 산출물
│   ├── 01_Cloudflare_Evaluation_Report.md
│   └── 02_Project_Master_Plan.md
├── 01_Requirements/                 # 요구사항 정의서 (기초 명세)
│   ├── 01_Functional_Requirements_SRS.md
│   └── 02_NonFunctional_Legal_Compliance.md
├── 02_Architecture_TechSpec/        # 기술 아키텍처 및 상세 알고리즘
│   ├── 01_System_Architecture_DataPipeline.md
│   ├── 02_Deduplication_Anonymity_Algorithm.md
│   └── 03_Database_ERD_API_Spec.md
├── 03_UI_UX_Design/                 # 화면 기획 및 디자인 시스템
│   ├── assets/                      # 생성된 고해상도 UI 목업 7종
│   ├── 01_Information_Architecture_Flow.md
│   └── 02_Screen_Storyboard_Wireframe.md
├── 04_Infrastructure_DevOps/        # 배포 및 인프라 명세서
│   ├── 01_Local_Docker_Compose_Guide.md
│   └── 02_Cloudflare_and_Deployment_Pipeline.md
└── 05_Maintenance_Policy/           # 운영 유지보수 정책
    └── 01_Scraping_Maintenance_SLA_Policy.md
```

---

## 4. 단계별 진행 일정 (12주 로드맵)

| 단계 | 기간 | 주요 과업 | 완료 산출물 |
| :--- | :--- | :--- | :--- |
| **Phase 0: 설계 및 환경 구축** | 1~2주차 | 요구사항 확정, DB ERD, Docker 로컬 인프라 세팅 | 요구사항서, DB 마이그레이션 파일, Docker Compose |
| **Phase 1: 데이터 수집 엔진** | 3~4주차 | 4개사 스크래퍼 개발, 프록시 로테이션, robots.txt 준수 | 수집 엔진(Python), 셀렉터 YAML 파일 |
| **Phase 2: 파이프라인 및 중복 필터링** | 5주차 | Kafka 메시징, SimHash 중복 필터링 및 교차 머징 | 중복제거 Consumer, 데이터 정규화 모듈 |
| **Phase 3: 백엔드 코어 & 익명 보안** | 6~7주차 | 소셜 로그인, 익명 해시 게시판, 어뷰징 레이트 리밋 | NestJS REST API, Swagger 명세 |
| **Phase 4: 프론트엔드 구현** | 8~9주차 | Next.js 화면 7종(랜딩, 공고목록/상세, 커뮤니티, 마이페이지) | 반응형 웹 프론트엔드 코드 |
| **Phase 5: Google AI 연동** | 10주차 | Gemini API (공고 3줄 요약, 개인화 추천, 악성글 탐지) | AI 연동 서비스 레이어 |
| **Phase 6: Cloudflare & VPS 배포** | 11주차 | Cloudflare Pages + Hetzner/Railway 배포, CI/CD 구축 | 프로덕션 배포 완료 URL |
| **Phase 7: QA 및 모니터링 가동** | 12주차 | 장애 시뮬레이션(DOM 변경 테스트), Grafana 모니터링 오픈 | 최종 검수 확인서, 운영 가이드 |
