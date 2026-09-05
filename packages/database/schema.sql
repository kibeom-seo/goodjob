-- ============================================================================
-- 굿잡 (GoodJob) 엔터프라이즈 중앙 데이터베이스 마스터 DDL
-- 표준: SQLite 3 / PostgreSQL 15+ 호환
-- ============================================================================

PRAGMA foreign_keys = ON;

-- 1. B2B 기업 마스터 테이블
CREATE TABLE IF NOT EXISTS companies (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,                  -- 대표 법인명/기업명
    biz_reg_number TEXT UNIQUE,          -- 사업자등록번호
    corporate_domain TEXT,               -- 공식 도메인 (예: toss.im, navercorp.com)
    logo_url TEXT,                       -- 브랜드 공식 로고 이미지 URL
    website_url TEXT,                    -- 공식 웹사이트
    description TEXT,                    -- 기업 소개 및 브랜딩 문구
    industry TEXT,                       -- 산업군 분류
    is_claimed INTEGER DEFAULT 0,        -- 1: 소유권 인증 완료
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_companies_domain ON companies (corporate_domain);

-- 2. 사용자 및 계정 관리 테이블
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    company_id TEXT REFERENCES companies(id) ON DELETE SET NULL, -- ENTERPRISE 계정의 소속 기업 매핑
    email TEXT NOT NULL,                  -- 동일 이메일 다중 소셜 로그인 허용 (UNIQUE 제거)
    name TEXT NOT NULL,
    avatar_url TEXT,
    oauth_provider TEXT NOT NULL CHECK (oauth_provider IN ('google', 'naver', 'kakao', 'direct')),
    oauth_provider_id TEXT NOT NULL,     -- OAuth 제공자가 발급한 고유 회원 식별자 (sub, id 등)
    role TEXT DEFAULT 'USER' CHECK (role IN ('USER', 'ENTERPRISE', 'ADMIN')),
    is_active INTEGER DEFAULT 1,          -- 1: 활성 회원, 0: 탈퇴 회원
    deleted_at DATETIME,                  -- 탈퇴 일시 (논리적 삭제: GDPR/PIPA 파기 추적)
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_user_oauth UNIQUE (oauth_provider, oauth_provider_id)
);

CREATE INDEX IF NOT EXISTS idx_users_email_provider ON users (email, oauth_provider);
CREATE INDEX IF NOT EXISTS idx_users_active_lookup ON users (is_active, deleted_at);
CREATE INDEX IF NOT EXISTS idx_users_company ON users (company_id) WHERE role = 'ENTERPRISE';

-- 3. 사용자 스펙 프로필
CREATE TABLE IF NOT EXISTS resume_profiles (
    id TEXT PRIMARY KEY,
    user_id TEXT UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    target_role TEXT NOT NULL DEFAULT 'frontend',
    preferred_location TEXT DEFAULT '서울/수도권',
    experience_type TEXT DEFAULT '신입',
    github_url TEXT,
    blog_url TEXT,
    resume_file_url TEXT,
    parsed_resume_json TEXT DEFAULT '{}',
    deleted_at DATETIME,                  -- 구직자 이력서 논리적 삭제 일시
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 4. 사용자 보유 기술스택 매핑 테이블
CREATE TABLE IF NOT EXISTS user_skills (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    skill_name TEXT NOT NULL,
    proficiency_level INTEGER DEFAULT 3, -- 1~5 척도
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_id, skill_name)
);

CREATE INDEX IF NOT EXISTS idx_user_skills_lookup ON user_skills (skill_name, user_id);

-- 5. 채용 공고 메인 테이블
CREATE TABLE IF NOT EXISTS job_postings (
    id TEXT PRIMARY KEY,
    company_id TEXT REFERENCES companies(id) ON DELETE SET NULL, -- 소유 기업 마스터 외래키
    company_name TEXT NOT NULL,
    company_raw TEXT NOT NULL,
    company_logo TEXT NOT NULL,
    title TEXT NOT NULL,
    experience_level TEXT DEFAULT '신입/경력무관',
    location TEXT DEFAULT '전국',
    salary TEXT DEFAULT '회사내규에 따름',
    posted_at DATETIME NOT NULL,          -- 원문 공고 등록일 (최신순 정렬 기준)
    deadline_at DATETIME NOT NULL,        -- 원문 공고 마감일 (마감임박순 정렬 기준)
    deadline_text TEXT NOT NULL,          -- 화면 표시용 텍스트 (예: 🔥 오늘 23:59 마감!)
    first_crawled_at DATETIME NOT NULL,   -- 최초 시스템 발견/적재 일시
    last_updated_at DATETIME NOT NULL,    -- 다채널 변동사항 최종 동기화/갱신 일시
    source_type TEXT DEFAULT 'CRAWLED' CHECK (source_type IN ('CRAWLED', 'DIRECT_HIRE')),
    is_claimed INTEGER DEFAULT 0,         -- 1: 기업 직접 인증 완료(Claimed)
    is_remote INTEGER DEFAULT 0,          -- 1: 풀 리모트 (100% 재택근무)
    is_flexible_work INTEGER DEFAULT 0,   -- 1: 유연근무 / 주 4.5일제
    is_military_service INTEGER DEFAULT 0,-- 1: 병역특례 (산업기능요원/전문연구요원)
    summary_mission TEXT NOT NULL,
    summary_requirements TEXT NOT NULL,
    summary_benefits TEXT NOT NULL,
    keyword_highlights TEXT NOT NULL DEFAULT '[]', -- JSON 배열
    kafka_published_at DATETIME,          -- Kafka 이벤트 브로커 발행 일시
    kafka_offset BIGINT,                  -- 파티션 오프셋 (재처리 추적용)
    view_count INTEGER DEFAULT 0,         -- 조회수 (Redis Write-Back 배치 업데이트)
    scrap_count INTEGER DEFAULT 0,
    is_boosted INTEGER DEFAULT 0,         -- 1: B2B 유료 상단 부스팅 적용 공고
    boost_expires_at DATETIME,            -- 부스팅 만료 일시
    is_active INTEGER DEFAULT 1,          -- 1: 활성 공고, 0: 관리자 숨김
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_jobs_active_posted 
ON job_postings (is_active, deadline_at, posted_at DESC);

CREATE INDEX IF NOT EXISTS idx_jobs_active_deadline 
ON job_postings (is_active, deadline_at ASC);

CREATE INDEX IF NOT EXISTS idx_jobs_remote_active 
ON job_postings (is_remote, is_active, deadline_at, posted_at DESC);

CREATE INDEX IF NOT EXISTS idx_jobs_flexible_active 
ON job_postings (is_flexible_work, is_active, deadline_at, posted_at DESC);

CREATE INDEX IF NOT EXISTS idx_jobs_military_active 
ON job_postings (is_military_service, is_active, deadline_at, posted_at DESC);

-- 6. 공고 요구 기술스택 태그 매핑 테이블
CREATE TABLE IF NOT EXISTS job_tags (
    id TEXT PRIMARY KEY,
    job_posting_id TEXT NOT NULL REFERENCES job_postings(id) ON DELETE CASCADE,
    tag_name TEXT NOT NULL,
    is_primary INTEGER DEFAULT 1,
    UNIQUE (job_posting_id, tag_name)
);

CREATE INDEX IF NOT EXISTS idx_job_tags_lookup ON job_tags (tag_name, job_posting_id);

-- 7. 원본 수집 출처 이력 테이블 (1:N 다채널 병합 & 중복 수집 방지)
CREATE TABLE IF NOT EXISTS crawled_origins (
    id TEXT PRIMARY KEY,
    job_posting_id TEXT NOT NULL REFERENCES job_postings(id) ON DELETE CASCADE,
    source_platform TEXT NOT NULL,
    origin_url TEXT NOT NULL,
    platform_posted_at DATETIME,
    platform_deadline_at DATETIME,
    kafka_published_at DATETIME,
    kafka_offset BIGINT,
    crawled_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_crawled_origins UNIQUE (source_platform, origin_url)
);

-- 8. 선배 현직자 리뷰 & 채용 브랜딩 방어
CREATE TABLE IF NOT EXISTS company_reviews (
    id TEXT PRIMARY KEY,
    job_posting_id TEXT NOT NULL REFERENCES job_postings(id) ON DELETE CASCADE,
    user_id TEXT REFERENCES users(id) ON DELETE SET NULL,
    author_verified_org TEXT NOT NULL,
    author_role TEXT NOT NULL,
    tenure_years TEXT DEFAULT '2년차',
    rating REAL DEFAULT 4.5,
    content TEXT NOT NULL,
    likes INTEGER DEFAULT 0,
    official_reply TEXT,                  -- 기업 HR 공식 답변 및 해명 코멘트
    official_reply_by TEXT REFERENCES users(id) ON DELETE SET NULL,
    official_replied_at DATETIME,
    is_disputed INTEGER DEFAULT 0,
    dispute_reason TEXT,
    dispute_status TEXT DEFAULT 'NONE' CHECK (dispute_status IN ('NONE', 'REQUESTED', 'ACCEPTED_BLINDED', 'REJECTED')),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_company_reviews_dispute 
ON company_reviews (dispute_status, created_at DESC) WHERE is_disputed = 1;

-- 9. 유료 크레딧 계좌 및 불변 원장(Ledger) 테이블
CREATE TABLE IF NOT EXISTS user_credits (
    id TEXT PRIMARY KEY,
    user_id TEXT UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    balance INTEGER DEFAULT 0 CHECK (balance >= 0),
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS credit_transactions (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    transaction_type TEXT NOT NULL CHECK (transaction_type IN ('CHARGE', 'USE', 'REFUND', 'REWARD_BONUS')),
    amount INTEGER NOT NULL,
    balance_after INTEGER NOT NULL,
    service_type TEXT NOT NULL,
    order_id TEXT,
    description TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_credit_transactions_user_time 
ON credit_transactions (user_id, created_at DESC);

-- 9-1. B2B 유료 패키지 및 공고 부스팅 주문 원장 테이블
CREATE TABLE IF NOT EXISTS b2b_orders (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    company_id TEXT REFERENCES companies(id) ON DELETE SET NULL,
    package_type TEXT NOT NULL CHECK (package_type IN ('BOOST_7D', 'BOOST_30D', 'CREDIT_100K', 'CREDIT_300K')),
    target_job_id TEXT REFERENCES job_postings(id) ON DELETE SET NULL,
    amount INTEGER NOT NULL,
    payment_method TEXT NOT NULL DEFAULT 'CARD',
    pg_provider TEXT DEFAULT 'TOSS_PAYMENTS',
    pg_payment_key TEXT,
    pg_status TEXT DEFAULT 'SUCCESS' CHECK (pg_status IN ('SUCCESS', 'CANCELLED', 'REFUNDED')),
    receipt_url TEXT,
    boost_started_at DATETIME,
    boost_expires_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_b2b_orders_company_time ON b2b_orders (company_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_b2b_orders_user_time ON b2b_orders (user_id, created_at DESC);

-- 10. 기업 직접 인증(Claim) 관리 테이블
CREATE TABLE IF NOT EXISTS company_claims (
    id TEXT PRIMARY KEY,
    company_id TEXT REFERENCES companies(id) ON DELETE CASCADE,
    job_posting_id TEXT NOT NULL REFERENCES job_postings(id) ON DELETE CASCADE,
    company_name TEXT NOT NULL,
    biz_reg_number TEXT,
    applicant_email TEXT NOT NULL,
    is_auto_approved INTEGER DEFAULT 0,
    verification_code TEXT,
    status TEXT DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'APPROVED', 'REJECTED')),
    rejection_reason TEXT,
    applied_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    reviewed_at DATETIME
);

CREATE INDEX IF NOT EXISTS idx_company_claims_status 
ON company_claims (status, applied_at DESC);

-- 11. ATS 지원자 현재 상태 스냅샷 테이블
CREATE TABLE IF NOT EXISTS candidate_applications (
    id TEXT PRIMARY KEY,
    job_posting_id TEXT NOT NULL REFERENCES job_postings(id) ON DELETE CASCADE,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    application_type TEXT DEFAULT 'OUTLINK_CLICK' CHECK (application_type IN ('OUTLINK_CLICK', 'DIRECT_ATS')),
    current_stage TEXT DEFAULT 'APPLIED' CHECK (current_stage IN ('APPLIED', 'DOC_PASS', 'INTERVIEW', 'FINAL_OFFER', 'REJECTED', 'WITHDRAWN')),
    withdrawal_reason TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 12. 지원자 전형 단계 변경 불변 감사 원장 테이블 (Audit Trail)
CREATE TABLE IF NOT EXISTS application_history (
    id TEXT PRIMARY KEY,
    application_id TEXT NOT NULL REFERENCES candidate_applications(id) ON DELETE CASCADE,
    from_stage TEXT,
    to_stage TEXT NOT NULL,
    changed_by TEXT REFERENCES users(id) ON DELETE SET NULL,
    change_reason TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_app_history_timeline 
ON application_history (application_id, created_at ASC);

-- 13. 합격 축하금(50만 원) 신청 및 채용 수수료 정산
CREATE TABLE IF NOT EXISTS candidate_rewards (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    job_posting_id TEXT NOT NULL REFERENCES job_postings(id) ON DELETE CASCADE,
    reward_amount INTEGER DEFAULT 500000,
    proof_doc_type TEXT DEFAULT 'HEALTH_INSURANCE_CERT' CHECK (proof_doc_type IN ('HEALTH_INSURANCE_CERT', 'MYDATA_DIRECT')),
    proof_doc_url TEXT,
    bank_name TEXT NOT NULL,
    bank_account TEXT NOT NULL,
    employed_at DATETIME NOT NULL,
    one_month_verified INTEGER DEFAULT 0,
    status TEXT DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'APPROVED', 'PAID', 'REJECTED')),
    rejection_reason TEXT,
    enterprise_fee_billed INTEGER DEFAULT 0,
    enterprise_fee_amount INTEGER,
    applied_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    paid_at DATETIME
);

CREATE INDEX IF NOT EXISTS idx_candidate_rewards_status 
ON candidate_rewards (status, applied_at DESC);

-- 14. 크롤러 관제 및 감사 로그 테이블
CREATE TABLE IF NOT EXISTS crawler_run_logs (
    id TEXT PRIMARY KEY,
    run_timestamp DATETIME NOT NULL,
    batch_trigger TEXT NOT NULL,
    saramin_count INTEGER DEFAULT 0,
    jobkorea_count INTEGER DEFAULT 0,
    wanted_count INTEGER DEFAULT 0,
    jumpit_count INTEGER DEFAULT 0,
    linkedin_count INTEGER DEFAULT 0,
    catch_count INTEGER DEFAULT 0,
    remember_count INTEGER DEFAULT 0,
    raw_total_count INTEGER NOT NULL,
    dedup_merged_count INTEGER NOT NULL,
    new_inserted_count INTEGER NOT NULL,
    expired_count INTEGER DEFAULT 0,
    dedup_rate_percent REAL NOT NULL,
    status TEXT NOT NULL,
    log_summary TEXT
);

CREATE INDEX IF NOT EXISTS idx_crawler_run_logs_time 
ON crawler_run_logs (run_timestamp DESC);

-- 15. 크롤러 서킷 브레이커 상태 관리 테이블
CREATE TABLE IF NOT EXISTS crawler_circuit_breakers (
    platform TEXT PRIMARY KEY,
    status TEXT DEFAULT 'CLOSED' CHECK (status IN ('CLOSED', 'OPEN')),
    error_rate_10m REAL DEFAULT 0.0,
    consecutive_errors INTEGER DEFAULT 0,
    tripped_at DATETIME,
    resumed_at DATETIME
);

-- 16. 관리자 경보 발송 채널 테이블
CREATE TABLE IF NOT EXISTS admin_alert_channels (
    id TEXT PRIMARY KEY,
    channel_type TEXT NOT NULL CHECK (channel_type IN ('MATTERMOST_WEBHOOK', 'ZULIP_WEBHOOK', 'TELEGRAM_BOT')),
    webhook_url TEXT,
    bot_token TEXT,
    chat_id TEXT,
    is_active INTEGER DEFAULT 1,
    alert_on_crawler_fail INTEGER DEFAULT 1,
    alert_on_high_traffic INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 17. 커뮤니티, 북마크 테이블
CREATE TABLE IF NOT EXISTS bookmarks (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    job_posting_id TEXT NOT NULL REFERENCES job_postings(id) ON DELETE CASCADE,
    memo TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_id, job_posting_id)
);

CREATE TABLE IF NOT EXISTS community_posts (
    id TEXT PRIMARY KEY,
    user_id TEXT REFERENCES users(id) ON DELETE SET NULL,
    author_nickname TEXT NOT NULL,
    author_badge TEXT DEFAULT '취준생',
    category TEXT NOT NULL CHECK (category IN ('interview', 'company_blind', 'talk', 'career_advice', 'transfer_lounge')),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    view_count INTEGER DEFAULT 0,
    likes_count INTEGER DEFAULT 0,
    report_count INTEGER DEFAULT 0,
    is_blinded INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_community_posts_category 
ON community_posts (category, is_blinded, created_at DESC);

CREATE TABLE IF NOT EXISTS community_comments (
    id TEXT PRIMARY KEY,
    post_id TEXT NOT NULL REFERENCES community_posts(id) ON DELETE CASCADE,
    user_id TEXT REFERENCES users(id) ON DELETE SET NULL,
    author_nickname TEXT NOT NULL,
    author_badge TEXT DEFAULT '취준생',
    content TEXT NOT NULL,
    likes_count INTEGER DEFAULT 0,
    report_count INTEGER DEFAULT 0,
    is_blinded INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS community_reports (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    target_type TEXT NOT NULL CHECK (target_type IN ('POST', 'COMMENT')),
    target_id TEXT NOT NULL,
    reason TEXT NOT NULL CHECK (reason IN ('SPAM', 'ABUSE', 'PROMOTION', 'INAPPROPRIATE')),
    reporter_weight REAL DEFAULT 1.0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_id, target_type, target_id)
);

-- ============================================================================
-- 18. 실시간 데이터 무결성 뷰 (Views)
-- ============================================================================

-- 활성 공고 실시간 마감/D-Day 계산 뷰
CREATE VIEW IF NOT EXISTS v_active_job_postings AS
SELECT 
    p.*,
    c.name AS corporate_legal_name,
    c.corporate_domain,
    CASE 
        WHEN p.deadline_at < CURRENT_TIMESTAMP THEN 1 
        ELSE 0 
    END AS is_expired,
    CAST(ROUND(julianday(p.deadline_at) - julianday('now')) AS INTEGER) AS deadline_days_left
FROM job_postings p
LEFT JOIN companies c ON p.company_id = c.id
WHERE p.is_active = 1;

-- 커뮤니티 댓글 카운트 1:1 일치 뷰
CREATE VIEW IF NOT EXISTS v_community_posts_with_counts AS
SELECT 
    p.*,
    COUNT(c.id) AS real_comments_count
FROM community_posts p
LEFT JOIN community_comments c 
    ON p.id = c.post_id AND c.is_blinded = 0
GROUP BY p.id;
