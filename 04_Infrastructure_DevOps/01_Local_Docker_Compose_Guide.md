# [인프라/DevOps] 01. 로컬 Docker 개발 환경 및 모노레포 가이드

## 1. 모노레포(Monorepo) 프로젝트 디렉토리 레이아웃

```
job-platform/
├── apps/
│   ├── web/                     # Next.js 14 프론트엔드
│   ├── api/                     # NestJS 백엔드 API
│   └── admin/                   # 관리자 대시보드
├── packages/
│   ├── database/                # Prisma 스키마 & 마이그레이션
│   └── shared-types/            # 공통 DTO 및 인터페이스
├── crawlers/
│   ├── scrapers/                # 플랫폼별 스크래퍼 (Python/Playwright)
│   │   ├── jobkorea.py
│   │   ├── saramin.py
│   │   ├── remember.py
│   │   └── catch.py
│   ├── config/                  # 외부화된 셀렉터 YAML 파일
│   └── pipeline/                # Kafka 중복제거/병합 Consumer
├── docker/
│   ├── docker-compose.local.yml # 로컬 개발용 인프라 컴포즈
│   └── Dockerfile.scraper       # 크롤러 컨테이너 빌드 파일
└── .env.example                 # 로컬 환경변수 템플릿
```

---

## 2. 로컬 인프라 실행용 `docker-compose.local.yml`

로컬 개발 환경에서 즉시 구동할 수 있는 핵심 서비스 묶음입니다:

```yaml
version: '3.8'

services:
  # 1. PostgreSQL (관계형 메인 DB)
  postgres:
    image: postgres:16-alpine
    container_name: job_postgres
    environment:
      POSTGRES_DB: job_platform
      POSTGRES_USER: dev_user
      POSTGRES_PASSWORD: dev_password
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

  # 2. Redis (캐시, 어뷰징 방지, 세션)
  redis:
    image: redis:7-alpine
    container_name: job_redis
    ports:
      - "6379:6379"

  # 3. Zookeeper (Kafka 코디네이터)
  zookeeper:
    image: confluentinc/cp-zookeeper:7.5.0
    container_name: job_zookeeper
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000

  # 4. Apache Kafka (대용량 크롤링 큐)
  kafka:
    image: confluentinc/cp-kafka:7.5.0
    container_name: job_kafka
    depends_on:
      - zookeeper
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1

volumes:
  pgdata:
```

---

## 3. 로컬 시작 및 검증 절차

```bash
# 1. 인프라 컨테이너 일괄 기동
docker compose -f docker/docker-compose.local.yml up -d

# 2. 컨테이너 헬스체크 확인
docker ps

# 3. DB 마이그레이션 실행
cd packages/database
npx prisma migrate dev --name init

# 4. API 서버 실행
cd ../../apps/api
npm run start:dev

# 5. 프론트엔드 웹 실행
cd ../web
npm run dev
```
