import httpx
from bs4 import BeautifulSoup
from typing import List
from .base_scraper import BaseScraper, RawJobDto
import os
import re

class JobKoreaScraper(BaseScraper):
    def __init__(self, config_path: str = None):
        if config_path is None:
            config_path = os.path.join(os.path.dirname(__file__), "../config/jobkorea.yaml")
        super().__init__(config_path=config_path, base_domain="https://www.jobkorea.co.kr")
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
            "Accept-Language": "ko-KR,ko;q=0.9",
        }

    def fetch_job_list(self, page: int = 1) -> List[RawJobDto]:
        target_url = f"https://www.jobkorea.co.kr/recruit/joblist?menucode=duty&dutyType=10016&page={page}"
        self.sleep_delay()

        try:
            with httpx.Client(timeout=12.0, follow_redirects=True) as client:
                response = client.get(target_url, headers=self.headers)
                if response.status_code != 200:
                    return []
                html = response.text
        except Exception:
            return []

        soup = BeautifulSoup(html, "html.parser")
        links = soup.find_all("a", href=lambda h: h and "/Recruit/GI_Read/" in h)

        results: List[RawJobDto] = []
        seen_urls = set()

        for link in links:
            try:
                href = link.get("href", "")
                if href in seen_urls:
                    continue
                seen_urls.add(href)

                full_url = f"https://www.jobkorea.co.kr{href}" if href.startswith("/") else href
                title = link.get("title") or link.get_text(strip=True)

                parent = link.find_parent("tr") or link.find_parent("li") or link.parent
                company_el = parent.find("a", href=lambda h: h and "/Company/" in h) if parent else None
                company_name = company_el.get_text(strip=True) if company_el else "잡코리아 인증기업"

                if title and len(title) > 3:
                    results.append(RawJobDto(
                        source_platform="jobkorea",
                        source_url=full_url,
                        company_name_raw=company_name,
                        title_raw=title,
                        location_raw="전국",
                        experience_raw="경력무관",
                        deadline_raw="상시채용",
                    ))
            except Exception:
                continue

        return results
