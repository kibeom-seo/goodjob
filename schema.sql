-- Cloudflare D1 Schema for GoodJob

CREATE TABLE IF NOT EXISTS job_postings (
    id TEXT PRIMARY KEY,
    company_id TEXT,
    company_name TEXT NOT NULL,
    company_logo TEXT,
    corporate_domain TEXT,
    title TEXT NOT NULL,
    experience_level TEXT,
    location TEXT,
    salary TEXT,
    posted_at TEXT,
    deadline_at TEXT,
    deadline_text TEXT,
    deadline_days_left INTEGER,
    is_active INTEGER DEFAULT 1,
    is_expired INTEGER DEFAULT 0,
    is_claimed INTEGER DEFAULT 0,
    is_remote INTEGER DEFAULT 0,
    is_flexible_work INTEGER DEFAULT 0,
    is_military_service INTEGER DEFAULT 0,
    is_boosted INTEGER DEFAULT 0,
    boost_expires_at TEXT,
    summary_mission TEXT,
    summary_requirements TEXT,
    summary_benefits TEXT,
    keyword_highlights TEXT,
    view_count INTEGER DEFAULT 0,
    scrap_count INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS companies (
    id TEXT PRIMARY KEY,
    company_name TEXT NOT NULL,
    corporate_domain TEXT,
    is_claimed INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    role TEXT DEFAULT 'USER',
    is_active INTEGER DEFAULT 1
);

CREATE TABLE IF NOT EXISTS candidate_applications (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    job_posting_id TEXT NOT NULL,
    current_stage TEXT DEFAULT 'APPLIED'
);

CREATE TABLE IF NOT EXISTS user_credits (
    id TEXT PRIMARY KEY,
    user_id TEXT UNIQUE NOT NULL,
    balance INTEGER DEFAULT 0,
    updated_at TEXT
);

CREATE TABLE IF NOT EXISTS credit_transactions (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    transaction_type TEXT NOT NULL,
    amount INTEGER NOT NULL,
    balance_after INTEGER NOT NULL,
    service_type TEXT,
    order_id TEXT,
    description TEXT,
    created_at TEXT
);

CREATE TABLE IF NOT EXISTS b2b_orders (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    company_id TEXT,
    package_type TEXT NOT NULL,
    target_job_id TEXT,
    amount INTEGER NOT NULL,
    payment_method TEXT,
    pg_provider TEXT,
    pg_payment_key TEXT,
    pg_status TEXT,
    receipt_url TEXT,
    boost_started_at TEXT,
    boost_expires_at TEXT,
    created_at TEXT
);

CREATE TABLE IF NOT EXISTS company_claims (
    id TEXT PRIMARY KEY,
    company_id TEXT,
    job_posting_id TEXT NOT NULL,
    company_name TEXT,
    biz_reg_number TEXT,
    applicant_email TEXT NOT NULL,
    is_auto_approved INTEGER DEFAULT 0,
    status TEXT DEFAULT 'PENDING',
    applied_at TEXT,
    reviewed_at TEXT
);

CREATE TABLE IF NOT EXISTS application_stage_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    application_id TEXT NOT NULL,
    stage TEXT NOT NULL,
    changed_by TEXT,
    memo TEXT,
    created_at TEXT
);

CREATE VIEW IF NOT EXISTS v_active_job_postings AS
SELECT * FROM job_postings
WHERE is_active = 1 AND is_expired = 0;
