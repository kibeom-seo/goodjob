import json
import os
import subprocess
import sys
from datetime import datetime

# Windows 콘솔 UTF-8 출력 설정
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
UNIFIED_JSON = os.path.join(ROOT_DIR, "crawlers", "data", "unified_jobs.json")
SQL_OUTPUT = os.path.join(ROOT_DIR, "crawlers", "data", "sync_d1.sql")

def escape_sql(val):
    if val is None:
        return "NULL"
    s = str(val).replace("'", "''")
    return f"'{s}'"

def sync_to_d1():
    if not os.path.exists(UNIFIED_JSON):
        print(f"File not found: {UNIFIED_JSON}")
        return

    with open(UNIFIED_JSON, "r", encoding="utf-8") as f:
        jobs = json.load(f)

    print(f">>> [D1 동기화 준비] {len(jobs)}건의 정제된 공고 데이터를 D1 SQL로 변환 중...")

    sql_statements = []
    now_iso = datetime.utcnow().isoformat()

    for j in jobs:
        job_id = escape_sql(j.get("id"))
        company_name = escape_sql(j.get("companyName") or j.get("companyRaw") or "기업명 미상")
        company_logo = escape_sql(j.get("companyLogo") or "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100")
        corporate_domain = escape_sql(j.get("corporateDomain"))
        title = escape_sql(j.get("title") or "채용 공고")
        experience_level = escape_sql(j.get("experienceLevel") or "신입/경력")
        location = escape_sql(j.get("location") or "서울")
        salary = escape_sql(j.get("salary") or "회사 내규에 따름")
        posted_at = escape_sql(now_iso)
        deadline_text = escape_sql(j.get("deadlineText") or "상시채용")
        deadline_days_left = 14
        
        tags_json = escape_sql(json.dumps(j.get("collectedSources", []), ensure_ascii=False))
        mission = escape_sql(f"[{j.get('sourceSummaryText', '굿잡 AI 검증')}] {j.get('title')}")
        reqs = escape_sql(j.get("title") or "")
        benefits = escape_sql("4대보험, 유연근무제, 자기계발비 지원")
        origin_url = escape_sql(j.get("originUrl"))

        stmt = f"""INSERT OR REPLACE INTO job_postings (
            id, company_name, company_logo, corporate_domain, title, 
            experience_level, location, salary, posted_at, deadline_at, 
            deadline_text, deadline_days_left, is_active, is_expired, is_claimed, 
            is_remote, is_flexible_work, is_military_service, is_boosted, 
            summary_mission, summary_requirements, summary_benefits, keyword_highlights,
            origin_url
        ) VALUES (
            {job_id}, {company_name}, {company_logo}, {corporate_domain}, {title}, 
            {experience_level}, {location}, {salary}, {posted_at}, NULL, 
            {deadline_text}, {deadline_days_left}, 1, 0, 0, 
            0, 0, 0, 0, 
            {mission}, {reqs}, {benefits}, {tags_json},
            {origin_url}
        );"""
        sql_statements.append(stmt)

    with open(SQL_OUTPUT, "w", encoding="utf-8") as f:
        f.write("\n".join(sql_statements))

    print(f">>> [SQL 생성 완료] {SQL_OUTPUT} ({len(sql_statements)}개 쿼리)")
    print(">>> [Cloudflare D1 원격 적재 시작] npx wrangler d1 execute 실행 중...")

    cmd = ["npx", "wrangler", "d1", "execute", "goodjob-db", f"--file={SQL_OUTPUT}", "--remote"]
    res = subprocess.run(cmd, cwd=os.path.join(ROOT_DIR, "apps", "web"), shell=True, capture_output=True, text=True)

    if res.returncode == 0:
        print(">>> [Cloudflare D1 동기화 성공!] 🚀")
        print(res.stdout)
    else:
        print(">>> [Cloudflare D1 동기화 에러]")
        print(res.stderr or res.stdout)

if __name__ == "__main__":
    sync_to_d1()
