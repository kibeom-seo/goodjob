#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
GoodJob Central Database Migration & Normalization Seeder
SQLite 3 기반 엔터프라이즈 정규화 마이그레이션 스크립트
"""

import os
import sys
import json
import sqlite3
import re
from datetime import datetime, timedelta

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
DB_PATH = os.path.join(ROOT_DIR, "apps/web/data/goodjob.db")
SCHEMA_PATH = os.path.join(ROOT_DIR, "packages/database/schema.sql")
UNIFIED_JOBS_PATH = os.path.join(ROOT_DIR, "apps/web/data/unified_jobs.json")
COMMUNITY_POSTS_PATH = os.path.join(ROOT_DIR, "apps/web/data/community_posts.json")

def parse_date(date_str, default_days=7):
    now = datetime.now()
    if not date_str:
        return now + timedelta(days=default_days)
    try:
        # 형식: 2026.09.06(일) 23:59 또는 2026-09-06 등
        cleaned = re.sub(r'\([가-힣]+\)', '', date_str).strip()
        cleaned = cleaned.replace('.', '-')
        if len(cleaned) == 10:
            cleaned += " 23:59:59"
        return datetime.strptime(cleaned, "%Y-%m-%d %H:%M:%S")
    except Exception:
        return now + timedelta(days=default_days)

def migrate():
    print(f"[*] 마이그레이션 시작: {DB_PATH}")
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
    
    # DB 연결 및 스키마 적용
    conn = sqlite3.connect(DB_PATH)
    conn.execute("PRAGMA foreign_keys = ON;")
    cursor = conn.cursor()

    print("[*] 스키마 DDL 실행 중...")
    with open(SCHEMA_PATH, "r", encoding="utf-8") as f:
        schema_sql = f.read()
    cursor.executescript(schema_sql)
    conn.commit()
    print("[+] 스키마 DDL 적용 완료!")

    # 1. 시드 사용자 및 기업 생성
    print("[*] 기본 엔터프라이즈 마스터 데이터 시딩 중...")
    
    # 대표 기업 시드
    companies_data = [
        ("comp_toss", "비바리퍼블리카 (토스)", "120-88-00123", "toss.im", "https://static.toss.im/icons/png/4x/logo-toss-blue.png", "https://toss.im", "금융을 더 쉽고 간편하게 만드는 핀테크 유니콘", "핀테크/금융", 1),
        ("comp_yanolja", "야놀자", "214-88-00456", "yanolja.com", "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=120", "https://yanolja.com", "글로벌 여행 및 여가 테크 기업", "트래블테크/플랫폼", 1),
        ("comp_baemin", "우아한형제들 (배달의민족)", "105-87-00789", "woowahan.com", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120", "https://woowahan.com", "문 앞으로 배달되는 일상의 행복", "커머스/푸드테크", 1),
        ("comp_carrot", "당근 (당근마켓)", "211-88-00999", "daangn.com", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120", "https://daangn.com", "이웃과 더 가까워지는 따뜻한 지역 커뮤니티", "하이퍼로컬/소셜", 1),
        ("comp_krafton", "크래프톤", "220-87-00555", "krafton.com", "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=120", "https://krafton.com", "글로벌 배틀그라운드 게임 제작사", "게임/엔터테인먼트", 1)
    ]
    cursor.executemany("""
        INSERT OR IGNORE INTO companies (id, name, biz_reg_number, corporate_domain, logo_url, website_url, description, industry, is_claimed)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, companies_data)

    # 기본 사용자 시드 (ADMIN, HR, 일반 USER)
    users_data = [
        ("user_admin_01", None, "admin@goodjob.kr", "최고관리자", "https://api.dicebear.com/7.x/bottts/svg?seed=admin", "direct", "admin_sub_01", "ADMIN", 1),
        ("user_hr_toss", "comp_toss", "recruiter@toss.im", "토스 HR담당자", "https://api.dicebear.com/7.x/avataaars/svg?seed=toss", "google", "google_toss_hr", "ENTERPRISE", 1),
        ("user_seeker_01", None, "jobseeker@gmail.com", "취준생라이언", "https://api.dicebear.com/7.x/avataaars/svg?seed=seeker", "google", "google_seeker_01", "USER", 1)
    ]
    cursor.executemany("""
        INSERT OR IGNORE INTO users (id, company_id, email, name, avatar_url, oauth_provider, oauth_provider_id, role, is_active)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, users_data)

    # 구직자 프로필 및 스킬 시드
    cursor.execute("""
        INSERT OR IGNORE INTO resume_profiles (id, user_id, target_role, preferred_location, experience_type, github_url)
        VALUES ('prof_seeker_01', 'user_seeker_01', 'frontend', '서울/수도권', '신입', 'https://github.com/jobseeker')
    """)
    seeker_skills = [
        ("usk_01", "user_seeker_01", "React", 4),
        ("usk_02", "user_seeker_01", "TypeScript", 4),
        ("usk_03", "user_seeker_01", "Next.js", 3),
        ("usk_04", "user_seeker_01", "Tailwind CSS", 4)
    ]
    cursor.executemany("INSERT OR IGNORE INTO user_skills (id, user_id, skill_name, proficiency_level) VALUES (?, ?, ?, ?)", seeker_skills)

    # 크레딧 계좌 시드
    cursor.execute("INSERT OR IGNORE INTO user_credits (id, user_id, balance) VALUES ('crd_seeker_01', 'user_seeker_01', 5000)")
    cursor.execute("""
        INSERT OR IGNORE INTO credit_transactions (id, user_id, transaction_type, amount, balance_after, service_type, description)
        VALUES ('ctx_01', 'user_seeker_01', 'REWARD_BONUS', 5000, 5000, 'WELCOME_BONUS', '신규 회원가입 축하 5,000 크레딧 지급')
    """)

    # 알림 채널 시드
    cursor.execute("""
        INSERT OR IGNORE INTO admin_alert_channels (id, channel_type, webhook_url, is_active, alert_on_crawler_fail)
        VALUES ('alert_mattermost_01', 'MATTERMOST_WEBHOOK', 'http://mattermost.internal.goodjob.kr/hooks/infra-alerts', 1, 1)
    """)

    # 크롤러 서킷 브레이커 초기 상태
    platforms = ["saramin", "jobkorea", "wanted", "jumpit", "linkedin", "catch", "remember"]
    for p in platforms:
        cursor.execute("""
            INSERT OR IGNORE INTO crawler_circuit_breakers (platform, status, error_rate_10m, consecutive_errors)
            VALUES (?, 'CLOSED', 0.0, 0)
        """, (p,))

    conn.commit()

    # 2. unified_jobs.json 파싱 및 정규화 적재
    if os.path.exists(UNIFIED_JOBS_PATH):
        print(f"[*] unified_jobs.json 데이터 로딩 중...")
        with open(UNIFIED_JOBS_PATH, "r", encoding="utf-8") as f:
            jobs_raw = json.load(f)

        print(f"[*] 총 {len(jobs_raw)}건의 공고 정규화 적재 시작...")
        
        now = datetime.now()
        inserted_jobs = 0
        inserted_tags = 0
        inserted_origins = 0
        inserted_reviews = 0

        for item in jobs_raw:
            job_id = item.get("id")
            company_name = item.get("companyName", "알 수 없는 기업").strip()
            company_raw = company_name
            company_logo = item.get("companyLogo") or "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120"
            title = item.get("title", "").strip()
            exp_level = item.get("experienceLevel", "신입/경력무관")
            location = item.get("location", "서울")
            salary = item.get("salary", "회사내규에 따름")
            deadline_text = item.get("deadlineText", "상시 채용")
            origin_url = item.get("originUrl", f"https://goodjob.kr/jobs/{job_id}")
            source_type = item.get("sourceType", "CRAWLED")
            view_count = item.get("viewCount", 0)

            # 날짜 정규화
            deadline_dt = parse_date(item.get("deadlineDateStr"), default_days=item.get("deadlineDaysLeft", 7))
            posted_dt = now - timedelta(days=2) # 2일 전 게시 가정
            
            # 고관여 필터 태그 검출
            tags = item.get("tags", [])
            gemini_summary = item.get("geminiSummary") or {}
            mission = gemini_summary.get("mission") or "주요 서비스 개발 및 고도화"
            requirements = gemini_summary.get("requirements") or "관련 직무 기본 역량 및 컴퓨터공학 지식"
            benefits = gemini_summary.get("cultureAndBenefits") or "4대보험, 유연근무제, 최신 장비 지원"
            keyword_highlights = json.dumps(gemini_summary.get("keywordHighlights", tags[:3]), ensure_ascii=False)

            text_corpus = f"{title} {' '.join(tags)} {benefits} {requirements}".lower()
            
            is_remote = 1 if any(k in text_corpus for k in ["리모트", "재택", "원격", "remote"]) else 0
            is_flexible_work = 1 if any(k in text_corpus for k in ["유연근무", "자율출퇴근", "시차출퇴근", "4.5일", "flexible"]) else 0
            is_military_service = 1 if any(k in text_corpus for k in ["병역특례", "산업기능요원", "전문연구요원", "보충역"]) else 0

            # 기업 마스터 매핑 검사
            company_id = None
            if "토스" in company_name or "비바리퍼블리카" in company_name:
                company_id = "comp_toss"
            elif "야놀자" in company_name:
                company_id = "comp_yanolja"
            elif "배달의민족" in company_name or "우아한형제들" in company_name:
                company_id = "comp_baemin"
            elif "당근" in company_name:
                company_id = "comp_carrot"
            elif "크래프톤" in company_name:
                company_id = "comp_krafton"

            # 1) job_postings INSERT
            cursor.execute("""
                INSERT OR REPLACE INTO job_postings (
                    id, company_id, company_name, company_raw, company_logo, title, experience_level, location, salary,
                    posted_at, deadline_at, deadline_text, first_crawled_at, last_updated_at,
                    source_type, is_claimed, is_remote, is_flexible_work, is_military_service,
                    summary_mission, summary_requirements, summary_benefits, keyword_highlights,
                    view_count, scrap_count, is_active
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)
            """, (
                job_id, company_id, company_name, company_raw, company_logo, title, exp_level, location, salary,
                posted_dt.strftime("%Y-%m-%d %H:%M:%S"), deadline_dt.strftime("%Y-%m-%d %H:%M:%S"), deadline_text,
                now.strftime("%Y-%m-%d %H:%M:%S"), now.strftime("%Y-%m-%d %H:%M:%S"),
                source_type, 1 if company_id else 0, is_remote, is_flexible_work, is_military_service,
                mission, requirements, benefits, keyword_highlights,
                view_count, int(view_count * 0.08)
            ))
            inserted_jobs += 1

            # 2) job_tags INSERT
            for tag in tags:
                tag_name = tag.strip()
                if tag_name:
                    tag_id = f"tag_{job_id}_{tag_name}"
                    cursor.execute("""
                        INSERT OR IGNORE INTO job_tags (id, job_posting_id, tag_name, is_primary)
                        VALUES (?, ?, ?, 1)
                    """, (tag_id, job_id, tag_name))
                    inserted_tags += 1

            # 3) crawled_origins INSERT
            sources = item.get("collectedSources", ["wanted"])
            for src in sources:
                origin_id = f"org_{job_id}_{src}"
                cursor.execute("""
                    INSERT OR IGNORE INTO crawled_origins (
                        id, job_posting_id, source_platform, origin_url, platform_posted_at, platform_deadline_at
                    ) VALUES (?, ?, ?, ?, ?, ?)
                """, (
                    origin_id, job_id, src, origin_url,
                    posted_dt.strftime("%Y-%m-%d %H:%M:%S"), deadline_dt.strftime("%Y-%m-%d %H:%M:%S")
                ))
                inserted_origins += 1

            # 4) company_reviews INSERT
            blind_reviews = item.get("blindReviews", [])
            for rev in blind_reviews:
                rev_id = rev.get("id") or f"rev_{job_id}_{inserted_reviews}"
                author_org = rev.get("authorVerifiedOrg", f"{company_name} 현직자")
                author_role = rev.get("authorRole", "개발자")
                tenure = rev.get("tenureYears", "재직 2년차")
                rating = rev.get("rating", 4.5)
                content = rev.get("content", "배울 점이 많고 자율성이 존중되는 문화입니다.")
                likes = rev.get("likes", 10)
                
                cursor.execute("""
                    INSERT OR IGNORE INTO company_reviews (
                        id, job_posting_id, author_verified_org, author_role, tenure_years, rating, content, likes
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                """, (
                    rev_id, job_id, author_org, author_role, tenure, rating, content, likes
                ))
                inserted_reviews += 1

        conn.commit()
        print(f"[+] 공고 {inserted_jobs}건, 태그 {inserted_tags}건, 출처 {inserted_origins}건, 리뷰 {inserted_reviews}건 정규화 적재 완료!")

    # 3. B2B ATS 테스트 데이터 시딩
    print("[*] B2B ATS 지원자 및 불변 감사 원장 시드 데이터 생성 중...")
    cursor.execute("SELECT id FROM job_postings WHERE company_id = 'comp_toss' LIMIT 1")
    toss_job = cursor.fetchone()
    if toss_job:
        toss_job_id = toss_job[0]
        # 지원자 이력 생성
        cursor.execute("""
            INSERT OR REPLACE INTO candidate_applications (id, job_posting_id, user_id, application_type, current_stage)
            VALUES ('app_test_01', ?, 'user_seeker_01', 'DIRECT_ATS', 'INTERVIEW')
        """, (toss_job_id,))
        
        # 불변 감사 원장 3단계 누적
        history_records = [
            ("hist_01", "app_test_01", None, "APPLIED", "user_seeker_01", "지원서 최종 제출 접수", (now - timedelta(days=5)).strftime("%Y-%m-%d %H:%M:%S")),
            ("hist_02", "app_test_01", "APPLIED", "DOC_PASS", "user_hr_toss", "서류 전형 합격 및 1차 코딩테스트 안내", (now - timedelta(days=3)).strftime("%Y-%m-%d %H:%M:%S")),
            ("hist_03", "app_test_01", "DOC_PASS", "INTERVIEW", "user_hr_toss", "1차 직무 인터뷰 대상자 전환", (now - timedelta(days=1)).strftime("%Y-%m-%d %H:%M:%S"))
        ]
        cursor.executemany("""
            INSERT OR REPLACE INTO application_history (id, application_id, from_stage, to_stage, changed_by, change_reason, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, history_records)

    conn.commit()

    # 4. 검증 쿼리 실행
    print("\n=== [데이터베이스 마이그레이션 결과 검증] ===")
    tables = [
        "companies", "users", "resume_profiles", "user_skills",
        "job_postings", "job_tags", "crawled_origins", "company_reviews",
        "candidate_applications", "application_history",
        "user_credits", "credit_transactions", "crawler_circuit_breakers"
    ]
    for tbl in tables:
        cursor.execute(f"SELECT COUNT(*) FROM {tbl}")
        count = cursor.fetchone()[0]
        print(f" - {tbl.ljust(25)}: {count}건")

    # 뷰 검증
    cursor.execute("SELECT COUNT(*) FROM v_active_job_postings")
    v_active_count = cursor.fetchone()[0]
    print(f" - {'v_active_job_postings (View)'.ljust(25)}: {v_active_count}건")

    cursor.close()
    conn.close()
    print("\n[SUCCESS] Phase 1 마이그레이션이 성공적으로 완료되었습니다!")

if __name__ == "__main__":
    migrate()
