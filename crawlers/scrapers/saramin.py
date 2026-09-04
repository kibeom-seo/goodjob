import httpx
from bs4 import BeautifulSoup
from typing import List
from .base_scraper import BaseScraper, RawJobDto
import os
import re

class SaraminScraper(BaseScraper):
    def __init__(self, config_path: str = None):
        if config_path is None:
            config_path = os.path.join(os.path.dirname(__file__), "../config/saramin.yaml")
        super().__init__(config_path=config_path, base_domain="https://www.saramin.co.kr")
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
            "Accept-Language": "ko-KR,ko;q=0.9",
        }

    def fetch_job_list(self, page: int = 1) -> List[RawJobDto]:
        target_url = f"https://www.saramin.co.kr/zf_user/jobs/list/job-category?cat_kcls=2&recruitPage={page}&recruitSort=relation&recruitPageCount=50"
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
        links = soup.find_all("a", href=lambda h: h and "/zf_user/jobs/relay/view" in h)

        results: List[RawJobDto] = []
        seen_urls = set()

        for link in links:
            try:
                href = link.get("href", "")
                if href in seen_urls:
                    continue
                seen_urls.add(href)

                full_url = f"https://www.saramin.co.kr{href}" if href.startswith("/") else href
                title = link.get_text(strip=True)

                container = link.find_parent("div") or link.parent
                container_text = container.get_text(" ", strip=True) if container else ""

                company_match = re.search(r"([가-힣A-Za-z0-9㈜(주)]+(?:주식회사|회사|그룹|기업|랩스|페이|뱅크|솔루션|시스템|테크))", container_text)
                company_name = company_match.group(1) if company_match else "사람인 등록기업"

                if title and len(title) > 3:
                    results.append(RawJobDto(
                        source_platform="saramin",
                        source_url=full_url,
                        company_name_raw=company_name,
                        title_raw=title,
                        location_raw="서울/수도권",
                        experience_raw="경력무관",
                        deadline_raw="상시채용",
                    ))
            except Exception:
                continue

        return results
