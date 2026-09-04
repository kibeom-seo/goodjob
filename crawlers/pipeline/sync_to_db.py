import sqlite3
import json
import os
import time

DB_PATH = "crawlers/data/goodjob_local.db"
UNIFIED_JSON = "crawlers/data/unified_jobs.json"

def init_db():
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # 1. 공고 마스터 테이블 (과거/종료 공고도 status = 'EXPIRED'로 영구 보존)
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS jobs (
            id TEXT PRIMARY KEY,
            company_name TEXT NOT NULL,
            title TEXT NOT NULL,
            origin_url TEXT NOT NULL,
            location TEXT,
            experience_level TEXT,
            deadline_text TEXT,
            status TEXT DEFAULT 'ACTIVE',
            source_platform TEXT,
            created_at REAL,
            updated_at REAL,
            raw_data TEXT
        )
    ''')

    # 2. 취준생 관심공고 스크랩 테이블
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS user_scraps (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT NOT NULL,
            job_id TEXT NOT NULL,
            scrapped_at REAL,
            UNIQUE(user_id, job_id)
        )
    ''')

    # 3. 익명 커뮤니티 게시글 및 선배 조언 테이블 (SHA-256 단방향 익명 토큰)
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS anonymous_posts (
            id TEXT PRIMARY KEY,
            job_id TEXT,
            author_token TEXT NOT NULL,
            author_tag TEXT NOT NULL,
            content TEXT NOT NULL,
            likes_count INTEGER DEFAULT 0,
            created_at REAL
        )
    ''')

    conn.commit()
    return conn

def sync_crawled_jobs_to_db():
    conn = init_db()
    cursor = conn.cursor()

    if not os.path.exists(UNIFIED_JSON):
        print("unified_jobs.json 파일이 없습니다.")
        return

    with open(UNIFIED_JSON, "r", encoding="utf-8") as f:
        jobs = json.load(f)

    inserted_count = 0
    now = time.time()

    for j in jobs:
        job_id = j.get("id")
        company = j.get("companyRaw") or j.get("companyName")
        title = j.get("title")
        origin_url = j.get("originUrl")
        location = j.get("location", "전국")
        exp = j.get("experienceLevel", "경력무관")
        deadline = j.get("deadlineText", "상시채용")
        sources = ",".join(j.get("collectedSources", []))
        raw_json_str = json.dumps(j, ensure_ascii=False)

        cursor.execute('''
            INSERT INTO jobs (id, company_name, title, origin_url, location, experience_level, deadline_text, status, source_platform, created_at, updated_at, raw_data)
            VALUES (?, ?, ?, ?, ?, ?, ?, 'ACTIVE', ?, ?, ?, ?)
            ON CONFLICT(id) DO UPDATE SET
                company_name=excluded.company_name,
                title=excluded.title,
                origin_url=excluded.origin_url,
                updated_at=excluded.updated_at,
                raw_data=excluded.raw_data
        ''', (job_id, company, title, origin_url, location, exp, deadline, sources, now, now, raw_json_str))
        inserted_count += 1

    conn.commit()
    conn.close()
    print(f">>> [DB 동기화 완료] 로컬 SQLite DB({DB_PATH})에 {inserted_count}건의 공고가 성공적으로 적재되었습니다.")

if __name__ == "__main__":
    sync_crawled_jobs_to_db()
