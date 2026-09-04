# [도메인(DNS) 설정 및 SEO 검색 노출 가이드] 굿잡 (GoodJob)

- **희망 도메인**: www.goodjob.co.kr (또는 goodjob.co.kr)
- **현재 임시 라이브 도메인**: https://combined-doors-accepts-sean.trycloudflare.com

---

## 1. 정식 도메인 (www.goodjob.co.kr) DNS 연결 절차

### 1단계: 도메인 구매 (가비아, 후이즈, 호스팅케이알 등)
1. goodjob.co.kr 또는 goodjob.kr 등록 여부 확인 및 구매
2. 도메인의 네임서버(NS)를 Cloudflare 네임서버로 변경 (무료 계정 생성 후 안내되는 2개 주소)

### 2단계: Cloudflare DNS 레코드 설정 (트래픽 비용  무제한 적용)
- **타입**: CNAME
- **이름 (Name)**: www
- **대상 (Target)**: Cloudflare Tunnel 주소
- **프록시 상태 (Proxy status)**: 켜짐 (오렌지 구름 아이콘) -> **DDoS 방어 및 무제한 대역폭  자동 적용**

### 3단계: 루트 도메인 자동 이동 (goodjob.co.kr -> www.goodjob.co.kr)
- Cloudflare Rules -> Redirect Rules 설정에서 goodjob.co.kr 접속 시 https://www.goodjob.co.kr 로 자동 301 리디렉션 연결.

---

## 2. 네이버/구글 검색 상위 노출(SEO) 및 연관검색어 공략

### 1) 네이버 서치어드바이저 (Search Advisor) 등록
1. [네이버 서치어드바이저](https://searchadvisor.naver.com/) 접속 -> 웹마스터 도구
2. 사이트 등록: https://www.goodjob.co.kr
3. HTML 소유확인 메타태그 복사 후 관리자 센터 또는 웹 헤더에 적용
4. 사이트맵(sitemap.xml) 및 RSS 제출

### 2) 구글 서치 콘솔 (Google Search Console) 등록
1. [Google Search Console](https://search.google.com/search-console) 접속
2. URL 접두사 등록: https://www.goodjob.co.kr
3. 소유권 확인 완료 후 sitemap.xml 제출

### 3) 핵심 연관검색어 타겟 키워드 클러스터
- 굿잡 채용, IT 채용 포털, 개발자 취업, 신입 초봉, 원티드 점핏 모아보기, 익명 직장인 라운지, 자소서 마감 디데이
