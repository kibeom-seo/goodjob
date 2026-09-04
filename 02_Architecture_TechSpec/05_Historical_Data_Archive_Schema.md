# [기술 명세서] 05. 만료/종료 채용공고 영구 보존 및 빅데이터 분석 아키텍처

## 1. 개요 및 비즈니스 분석 가치
* **목표**: 채용이 마감된 공고를 절대 삭제(Hard Delete)하지 않고, 영구 아카이빙하여 향후 **취준생을 위한 채용 주기 예측, 연봉 변동 추이, 요구 기술 스택 변화 분석(AI Analytics)** 자산으로 활용.
* **성능 격리 (Performance Isolation)**:
  * 전체 공고가 수십만 건으로 늘어나도, **진행 중인 활성 공고(`status = 'ACTIVE'`)**에 대해서만 부분 인덱스(Partial Index)를 적용하여 일반 구직자의 검색/조회 성능(p95 < 20ms)을 완벽하게 보장.

---

## 2. 데이터베이스 스키마 설계 (PostgreSQL DDL)

```sql
-- 1. 공고 상태 열거형
CREATE TYPE job_status AS ENUM ('ACTIVE', 'CLOSED_EARLY', 'EXPIRED', 'ARCHIVED');
CREATE TYPE job_source_type AS ENUM ('CRAWLED', 'DIRECT_HIRE');

-- 2. 통합 채용 공고 마스터 테이블 (종료 공고 영구 보존)
CREATE TABLE jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- 기본 기업 및 공고 정보
    company_name VARCHAR(100) NOT NULL,
    company_normalized VARCHAR(100) NOT NULL,    -- 정규화 사명 (분석용 그룹화 키)
    company_category VARCHAR(50),                -- '핀테크', '이커머스', '스타트업' 등
    title VARCHAR(255) NOT NULL,
    source_type job_source_type DEFAULT 'CRAWLED',
    
    -- 분석용 정량 데이터 (Quantitative Analytics Fields)
    experience_min_years INT DEFAULT 0,          -- 최소 경력 (0: 신입)
    experience_max_years INT,                    -- 최대 경력
    min_salary BIGINT,                           -- 분석용 환산 최저 연봉 (단위: 원)
    max_salary BIGINT,                           -- 분석용 환산 최고 연봉 (단위: 원)
    salary_text VARCHAR(100),                    -- 표기 연봉 텍스트 ("연 4,500만~6,000만")
    location_city VARCHAR(50),                   -- '서울', '경기', '판교' 등 지역 분석용
    location_detail TEXT,
    
    -- 기술 스택 및 역량 분석용 JSONB
    required_skills JSONB DEFAULT '[]',          -- ["React", "TypeScript", "Next.js"]
    preferred_skills JSONB DEFAULT '[]',         -- ["GraphQL", "Tailwind", "CI/CD"]
    
    -- AI 요약 영구 데이터
    gemini_mission TEXT,
    gemini_requirements TEXT,
    gemini_benefits TEXT,
    
    -- 공고 수명 주기 및 상태 관리
    status job_status DEFAULT 'ACTIVE',
    opened_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    closed_at TIMESTAMP WITH TIME ZONE,          -- 실제 마감/만료 시각
    deadline_at TIMESTAMP WITH TIME ZONE,        -- 예정 마감 시각 (null이면 상시)
    is_always_open BOOLEAN DEFAULT FALSE,
    
    -- 수집 메타데이터
    fingerprint_simhash VARCHAR(64) NOT NULL,
    view_count INT DEFAULT 0,
    scrap_count INT DEFAULT 0,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. 빠른 활성 공고 조회를 위한 부분 인덱스 (Partial Index)
-- status가 ACTIVE인 행만 인덱싱하므로 수백만 건의 종료 공고가 쌓여도 활성 공고 조회가 초고속으로 유지됨.
CREATE INDEX idx_jobs_active_search ON jobs (created_at DESC) WHERE status = 'ACTIVE';
CREATE INDEX idx_jobs_company_normalized ON jobs (company_normalized);
CREATE INDEX idx_jobs_required_skills ON jobs USING GIN (required_skills);
CREATE INDEX idx_jobs_status_deadline ON jobs (status, deadline_at);

-- 4. 공고 플랫폼별 원본 출처 이력 테이블 (1:N 매핑)
CREATE TABLE job_sources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_id UUID NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
    platform VARCHAR(30) NOT NULL,               -- 'saramin', 'jobkorea', 'catch', 'remember'
    origin_url TEXT NOT NULL,
    origin_job_id VARCHAR(100),
    crawled_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_active_on_origin BOOLEAN DEFAULT TRUE,    -- 원본 사이트에서 삭제되었는지 여부
    UNIQUE(platform, origin_job_id)
);

-- 5. 취준생 채용 트렌드 분석 뷰 (Analytics View 예시)
-- 특정 기업이 주로 어떤 기술 스택을 언제 뽑았는지 분석
CREATE VIEW view_company_hiring_trends AS
SELECT 
    company_normalized,
    COUNT(*) AS total_postings_count,
    AVG(experience_min_years) AS avg_required_career,
    jsonb_agg(DISTINCT required_skills) AS historical_tech_stacks,
    date_trunc('month', opened_at) AS hiring_season
FROM jobs
GROUP BY company_normalized, date_trunc('month', opened_at);
```

---

## 3. 만료 공고 자동 상태 전환 크론 (Daily Expiration Worker)

```sql
-- 매일 자정 자동 실행: 마감일 지난 공고를 EXPIRED로 전환
UPDATE jobs
SET status = 'EXPIRED', 
    closed_at = NOW(), 
    updated_at = NOW()
WHERE status = 'ACTIVE'
  AND is_always_open = FALSE
  AND deadline_at < NOW();
```
