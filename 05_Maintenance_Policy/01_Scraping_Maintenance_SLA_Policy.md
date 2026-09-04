# [운영 정책] 01. 스크래핑 유지보수 및 사이트 구조 변경 대응 SLA 가이드

## 1. 스크래핑 장애 조기 감지 체계 (Early Detection)

크롤링 대상 사이트(잡코리아, 사람인, 리멤버, 캐치)의 UI/HTML 개편을 사용자가 인지하기 전에 시스템이 먼저 감지합니다.

### 1.1 감지 3단계 매커니즘
1. **DOM 스켈레톤 해시 모니터링**:
   * 매 시간마다 타깃 사이트의 채용 리스트 페이지를 호출하여 텍스트를 제거한 HTML 태그 구조(Skeleton)의 SHA-256 해시를 계산.
   * 저장된 기존 해시와 달라질 경우 즉시 Slack/Discord 봇으로 `[구조 변경 경보]` 전송.
2. **수집 성공률 및 건수 급감 감지**:
   * 직전 크롤링 대비 수집 건수가 50% 미만으로 급감하거나 파싱 오류율이 20%를 초과하면 즉시 P1 경보 발령.
3. **HTTP 403 / 429 봇 탐지 알림**:
   * 프록시 IP 차단 발생 시 자동으로 백업 프록시 풀로 스위칭 후 관리자에게 로그 통보.

---

## 2. 5분 무중단 핫픽스 (YAML 셀렉터 외부화)

HTML 클래스명이나 레이아웃이 변경되었을 때, **서버 소스코드를 수정하여 재배포하지 않고 설정값만 교체**하여 5분 내 복구합니다.

### 2.1 셀렉터 설정 포맷 (`config/scrapers/saramin.yaml`)
```yaml
platform: "saramin"
version: "2026-09-04.v1"
rate_limit_per_minute: 30

selectors:
  list_container: ".item_recruit"
  company_name: ".corp_name a"
  job_title: ".job_tit a"
  career: ".recruit_info .career"
  location: ".recruit_info .work_place"
  deadline: ".support_info .date"
  detail_link: ".job_tit a[href]"

pagination:
  next_page_btn: ".page_list .next"
  max_pages: 50
```

* **적용 절차**:
  1. 관리자 대시보드 (`/admin/scrapers`) 접속
  2. 변경된 사이트의 개발자도구(F12)에서 새 CSS 셀렉터 복사
  3. 웹 화면에서 YAML 수정 후 `[즉시 반영]` 클릭
  4. Redis에 최신 셀렉터 캐시가 갱신되며 다음 크롤링부터 즉각 적용

---

## 3. 서비스 수준 협약 (SLA: Service Level Agreement)

| 등급 | 장애 상황 정의 | 목표 대응 시간 (MTTA) | 목표 복구 시간 (MTTR) | 대응 조치 |
| :---: | :--- | :---: | :---: | :--- |
| **P0 (Critical)** | 4개 플랫폼 전체 수집 중단 | 15분 이내 | **2시간 이내** | 온콜 호출, 프록시 인프라 및 네트워크 긴급 복구 |
| **P1 (High)** | 1개 주요 플랫폼(잡코리아/사람인) 완전 수집 실패 | 30분 이내 | **4시간 이내** | 셀렉터 YAML 핫픽스 및 스크래퍼 패치 배포 |
| **P2 (Medium)** | 특정 직무/일부 필드 파싱 실패 (예: 연봉 누락) | 2시간 이내 | **24시간 이내** | 정규표현식 보완 및 DB 데이터 보정 스크립트 가동 |
| **P3 (Low)** | 간헐적 1~2개 공고 상세 파싱 지연 | 익일 영업일 | **72시간 이내** | dead-letter 큐 분석 후 예외 처리 패턴 추가 |

---

## 4. 법적 이슈 발생 시 긴급 차단 스위치 (Feature Flag)

특정 플랫폼으로부터 크롤링 중단 공문(C&D)을 받거나 분쟁 발생 시, **시스템 재배포 없이 1초 만에 해당 사이트 크롤링 및 노출을 중단**할 수 있는 긴급 킬스위치를 탑재합니다:

```bash
# 긴급 차단 환경변수 (런타임 제어)
DISABLED_PLATFORMS=jobkorea,catch
```
* 해당 플랫폼은 즉시 크롤링 목록에서 제외되며, 뷰어의 멀티소스 뱃지에서도 숨김 처리됩니다.
