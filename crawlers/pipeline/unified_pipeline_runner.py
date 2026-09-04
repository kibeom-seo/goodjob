import json
import os
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from typing import List, Dict

# Windows 콘솔 UTF-8 출력 설정
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

# 프로젝트 경로 추가
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))

from crawlers.scrapers.saramin import SaraminScraper
from crawlers.scrapers.jobkorea import JobKoreaScraper
from crawlers.scrapers.catch import CatchScraper
from crawlers.scrapers.remember import RememberScraper
from crawlers.scrapers.linkedin import LinkedinScraper
from crawlers.scrapers.base_scraper import RawJobDto
from crawlers.pipeline.dedup_engine import DedupEngine

class UnifiedPipelineRunner:
    def __init__(self):
        self.scrapers = {
            "saramin": SaraminScraper(),
            "jobkorea": JobKoreaScraper(),
            "catch": CatchScraper(),
            "remember": RememberScraper(),
            "linkedin": LinkedinScraper(),
        }
        self.dedup_engine = DedupEngine()

    def _scrape_platform_multiple_pages(self, name: str, scraper, target_count: int = 1000, max_pages: int = 30) -> List[RawJobDto]:
        """각 사이트에서 목표 건수에 도달할 때까지 연속 심층 페이지 수집"""
        collected: List[RawJobDto] = []
        page = 1

        while len(collected) < target_count and page <= max_pages:
            try:
                jobs = scraper.fetch_job_list(page=page)
                if not jobs:
                    break
                collected.extend(jobs)
                page += 1
            except Exception as e:
                print(f"[{name}] {page}페이지 수집 중 에러: {e}")
                break

        print(f"    - [{name}] 총 {len(collected)}건 수집 완료 (총 {page-1}페이지 탐색)")
        return collected

    def run_crawling(self, target_per_platform: int = 100) -> List[RawJobDto]:
        """5대 플랫폼 병렬 대량 수집 (사람인·잡코리아·캐치·리멤버·링크드인)"""
        print(f">>> [굿잡 파이프라인] 5대 플랫폼(사람인·잡코리아·캐치·리멤버·링크드인) 사이트당 {target_per_platform}건 수집 시작...")
        all_raw_jobs: List[RawJobDto] = []

        with ThreadPoolExecutor(max_workers=5) as executor:
            future_to_platform = {
                executor.submit(self._scrape_platform_multiple_pages, name, scraper, target_per_platform): name
                for name, scraper in self.scrapers.items()
            }
            for future in as_completed(future_to_platform):
                name = future_to_platform[future]
                try:
                    jobs = future.result()
                    all_raw_jobs.extend(jobs)
                except Exception as e:
                    print(f"    - [{name}] 수집 실패: {e}")

        print(f">>> [수집 완료] 5대 플랫폼에서 총 {len(all_raw_jobs)}건의 원시 공고 데이터 확보.")
        return all_raw_jobs

    def process_and_deduplicate(self, raw_jobs: List[RawJobDto]) -> List[Dict]:
        """SimHash + Jaccard 엔진으로 중복 공고 교차 병합 (플랫폼명 완전 은닉, 굿잡 검증 라벨링)"""
        print(">>> [중복제거 엔진] SimHash + Jaccard 하이브리드 교차 병합 진행 중...")
        unified_jobs: List[Dict] = []

        for job in raw_jobs:
            matched = False
            for u_job in unified_jobs:
                is_dup, score = self.dedup_engine.is_duplicate(
                    comp1=u_job["companyName"],
                    title1=u_job["title"],
                    comp2=job.company_name_raw,
                    title2=job.title_raw,
                    threshold=0.75
                )

                if is_dup:
                    matched = True
                    if job.source_platform not in u_job["collectedSources"]:
                        u_job["collectedSources"].append(job.source_platform)
                    u_job["sourceSummaryText"] = "굿잡 AI 중복 정제 완료"
                    break

            if not matched:
                unified_jobs.append({
                    "id": f"goodjob-{len(unified_jobs) + 1}",
                    "companyName": self.dedup_engine.normalize_company(job.company_name_raw).upper(),
                    "companyRaw": job.company_name_raw,
                    "title": job.title_raw,
                    "originUrl": job.source_url,
                    "location": job.location_raw,
                    "experienceLevel": job.experience_raw,
                    "deadlineText": job.deadline_raw,
                    "collectedSources": [job.source_platform],
                    "sourceSummaryText": "굿잡 AI 검증 완료",
                    "crawledAt": job.crawled_at,
                })

        print(f">>> [병합 완료] {len(raw_jobs)}건 -> {len(unified_jobs)}개 단일 카드로 정제 완료.")
        return unified_jobs

    def execute(self, output_path: str = "crawlers/data/unified_jobs.json", target_per_platform: int = 100):
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        raw_jobs = self.run_crawling(target_per_platform)
        unified_jobs = self.process_and_deduplicate(raw_jobs)

        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(unified_jobs, f, ensure_ascii=False, indent=2)

        print(f">>> [저장 완료] 파일: {output_path}")

if __name__ == "__main__":
    runner = UnifiedPipelineRunner()
    runner.execute(target_per_platform=100)
