import sqlite3
import json
import os
import time

DB_PATH = "crawlers/data/goodjob_local.db"

def expand_db_schema():
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # 1. 취준생 이력서/스펙 프로필 테이블
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS user_resumes (
            id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            target_role TEXT NOT NULL,
            target_role_name TEXT,
            experience_level TEXT NOT NULL,
            skills_json TEXT NOT NULL,
            preferred_location TEXT,
            updated_at REAL,
            UNIQUE(user_id)
        )
    ''')

    # 2. 공고 테이블 컬럼 확장 (deadline_date_str, deadline_days_left)
    try:
        cursor.execute("ALTER TABLE jobs ADD COLUMN deadline_date_str TEXT")
    except Exception:
        pass
    try:
        cursor.execute("ALTER TABLE jobs ADD COLUMN deadline_days_left INTEGER DEFAULT 30")
    except Exception:
        pass

    conn.commit()
    conn.close()
    print(">>> [DB 확장 완료] user_resumes 테이블 생성 및 jobs 마감일자 컬럼 확장 완료!")

if __name__ == "__main__":
    expand_db_schema()
