import httpx
from typing import List
from .base_scraper import BaseScraper, RawJobDto
import os

class RememberScraper(BaseScraper):
    def __init__(self, config_path: str = None):
        if config_path is None:
            config_path = os.path.join(os.path.dirname(__file__), "../config/remember.yaml")
        super().__init__(config_path=config_path, base_domain="https://career.rememberapp.co.kr")
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
            "Accept": "application/json, text/plain, */*",
        }

    def fetch_job_list(self, page: int = 1) -> List[RawJobDto]:
        self.sleep_delay()

        api_url = f"https://career.rememberapp.co.kr/api/job_postings?page={page}&size=20"
        results: List[RawJobDto] = []

        try:
            with httpx.Client(timeout=10.0, follow_redirects=True) as client:
                response = client.get(api_url, headers=self.headers)
                if response.status_code == 200 and response.headers.get("content-type", "").startswith("application/json"):
                    data = response.json()
                    items = data.get("data", []) or data.get("items", [])
                    for item in items:
                        results.append(RawJobDto(
                            source_platform="remember",
                            source_url=f"https://career.rememberapp.co.kr/job/postings/{item.get('id')}",
                            company_name_raw=item.get("company", {}).get("name", "기업명 미상"),
                            title_raw=item.get("title", ""),
                            location_raw=item.get("location", "서울"),
                            experience_raw=f"경력 {item.get('min_career_year', 0)}년 이상",
                            deadline_raw=item.get("expired_at", "상시채용"),
                        ))
        except Exception:
            pass

        return results
