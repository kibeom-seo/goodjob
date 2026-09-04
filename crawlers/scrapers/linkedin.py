import httpx
from bs4 import BeautifulSoup
from typing import List
from .base_scraper import BaseScraper, RawJobDto
import os

class LinkedinScraper(BaseScraper):
    """
    LinkedIn 채용공고 실시간 수집기 (글로벌/빅테크/유망 스타트업)
    비로그인 공개 Guest Jobs API 활용
    """
    def __init__(self, config_path: str = None):
        if config_path is None:
            config_path = os.path.join(os.path.dirname(__file__), "../config/linkedin.yaml")
        super().__init__(config_path=config_path, base_domain="https://www.linkedin.com")
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
            "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
        }

    def fetch_job_list(self, page: int = 1) -> List[RawJobDto]:
        start = (page - 1) * 25
        target_url = f"https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?keywords=developer&location=South%20Korea&start={start}"
        self.sleep_delay()

        try:
            with httpx.Client(timeout=15.0, follow_redirects=True) as client:
                response = client.get(target_url, headers=self.headers)
                if response.status_code != 200:
                    return []
                html = response.text
        except Exception:
            return []

        soup = BeautifulSoup(html, "html.parser")
        job_cards = soup.find_all("li")

        results: List[RawJobDto] = []
        seen_urls = set()

        for card in job_cards:
            try:
                link_el = card.find("a", class_="base-card__full-link")
                if not link_el:
                    continue
                href = link_el.get("href", "").split("?")[0]
                if not href or href in seen_urls:
                    continue
                seen_urls.add(href)

                title_el = card.find("h3", class_="base-search-card__title")
                title = title_el.get_text(strip=True) if title_el else ""

                comp_el = card.find("h4", class_="base-search-card__subtitle")
                company_name = comp_el.get_text(strip=True) if comp_el else "LinkedIn 글로벌 기업"

                loc_el = card.find("span", class_="job-search-card__location")
                location = loc_el.get_text(strip=True) if loc_el else "서울/수도권"

                if title and len(title) > 2:
                    results.append(RawJobDto(
                        source_platform="linkedin",
                        source_url=href,
                        company_name_raw=company_name,
                        title_raw=title,
                        location_raw=location,
                        experience_raw="경력무관 / 주니어 우대",
                        deadline_raw="상시채용",
                        salary_raw="회사내규에 따름"
                    ))
            except Exception:
                continue

        return results
