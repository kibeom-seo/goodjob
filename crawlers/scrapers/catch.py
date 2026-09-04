import httpx
from bs4 import BeautifulSoup
from typing import List
from .base_scraper import BaseScraper, RawJobDto
import os

class CatchScraper(BaseScraper):
    def __init__(self, config_path: str = None):
        if config_path is None:
            config_path = os.path.join(os.path.dirname(__file__), "../config/catch.yaml")
        super().__init__(config_path=config_path, base_domain="https://www.catch.co.kr")
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
            "Accept-Language": "ko-KR,ko;q=0.9",
        }

    def fetch_job_list(self, page: int = 1) -> List[RawJobDto]:
        target_url = f"https://www.catch.co.kr/NCS/RecruitList?Page={page}"

        self.sleep_delay()

        try:
            with httpx.Client(timeout=10.0, follow_redirects=True) as client:
                response = client.get(target_url, headers=self.headers)
                if response.status_code != 200:
                    return []
                html = response.text
        except Exception:
            return []

        soup = BeautifulSoup(html, "html.parser")
        selectors = self.config["selectors"]
        items = soup.select(selectors["list_item"])

        results: List[RawJobDto] = []
        for item in items:
            try:
                company_el = item.select_one(selectors["company_name"])
                title_el = item.select_one(selectors["job_title"])
                loc_el = item.select_one(selectors["location"])
                exp_el = item.select_one(selectors["experience"])
                date_el = item.select_one(selectors["deadline"])
                link_el = item.select_one(selectors["detail_link"])

                if not (company_el and title_el and link_el):
                    continue

                full_url = link_el.get("href", "")
                if full_url.startswith("/"):
                    full_url = f"https://www.catch.co.kr{full_url}"

                results.append(RawJobDto(
                    source_platform="catch",
                    source_url=full_url,
                    company_name_raw=company_el.get_text(strip=True),
                    title_raw=title_el.get_text(strip=True),
                    location_raw=loc_el.get_text(strip=True) if loc_el else "서울",
                    experience_raw=exp_el.get_text(strip=True) if exp_el else "신입/경력",
                    deadline_raw=date_el.get_text(strip=True) if date_el else "상시채용",
                ))
            except Exception:
                continue

        return results
