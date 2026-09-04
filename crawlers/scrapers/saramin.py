import urllib.request
import urllib.parse
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
        keywords = ["개발자", "프론트엔드", "백엔드"]
        keyword = keywords[(page - 1) % len(keywords)]
        encoded_kw = urllib.parse.quote(keyword)
        target_url = f"https://www.saramin.co.kr/zf_user/search/recruit?searchType=search&searchword={encoded_kw}&recruitPage={page}&recruitSort=relation&recruitPageCount=40"
        self.sleep_delay()

        try:
            req = urllib.request.Request(target_url, headers=self.headers)
            html = urllib.request.urlopen(req, timeout=12).read().decode("utf-8", errors="ignore")
        except Exception as e:
            return []

        soup = BeautifulSoup(html, "html.parser")
        items = soup.find_all("div", class_=lambda c: c and "item_recruit" in c)

        results: List[RawJobDto] = []
        seen_urls = set()

        for it in items:
            try:
                area_corp = it.find("div", class_="area_corp")
                corp_a = area_corp.find("a") if area_corp else None
                company_name = corp_a.get_text(strip=True) if corp_a else ""

                area_job = it.find("div", class_="area_job")
                job_tit_h2 = area_job.find("h2", class_="job_tit") if area_job else None
                job_tit_a = job_tit_h2.find("a") if job_tit_h2 else None
                if not job_tit_a or not company_name:
                    continue

                title = job_tit_a.get_text(strip=True)
                raw_href = job_tit_a.get("href", "")
                full_url = f"https://www.saramin.co.kr{raw_href}" if raw_href.startswith("/") else raw_href
                url_clean = full_url.split("&paid_fl")[0]

                if url_clean in seen_urls:
                    continue
                seen_urls.add(url_clean)

                conditions = area_job.find("div", class_="job_condition") if area_job else None
                cond_text = conditions.get_text(" ", strip=True) if conditions else "서울/수도권"
                job_date = area_job.find("span", class_="date") if area_job else None
                date_text = job_date.get_text(strip=True) if job_date else "상시채용"

                results.append(RawJobDto(
                    source_platform="saramin",
                    source_url=url_clean,
                    company_name_raw=company_name,
                    title_raw=title,
                    location_raw=cond_text,
                    experience_raw="신입/경력무관",
                    deadline_raw=date_text,
                ))
            except Exception:
                continue

        return results

