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
        target_url = f"https://www.jobkorea.co.kr/Search/?stext=%EA%B0%9C%EB%B0%9C%EC%9E%90&tabType=recruit&Page_No={page}"
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
        results: List[RawJobDto] = []
        seen_urls = set()

        for a in soup.find_all("a", href=lambda h: h and "/Recruit/GI_Read/" in h):
            try:
                href = a.get("href", "")
                m = re.search(r"/GI_Read/(\d+)", href)
                if not m:
                    continue
                gi_no = m.group(1)
                full_url = f"https://www.jobkorea.co.kr/Recruit/GI_Read/{gi_no}"
                if full_url in seen_urls:
                    continue
                seen_urls.add(full_url)

                card = a
                for _ in range(6):
                    if card.parent:
                        card = card.parent
                        if card.name in ["li", "article", "div"] and any(c in " ".join(card.get("class", [])) for c in ["list", "item", "box", "flex"]):
                            break

                card_links = card.find_all("a", href=lambda h: h and gi_no in h)
                link_texts = [c.get_text(strip=True) for c in card_links if c.get_text(strip=True)]

                if len(link_texts) >= 2:
                    sorted_texts = sorted(link_texts, key=len)
                    company_name = sorted_texts[0]
                    title = sorted_texts[-1]
                elif len(link_texts) == 1:
                    company_name = "인증기업"
                    title = link_texts[0]
                else:
                    continue

                card_text = card.get_text(separator=" ", strip=True)

                # Location check
                loc = "전국"
                for region in ["서울", "경기", "인천", "대전", "대구", "부산", "광주", "울산", "세종", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주", "재택"]:
                    if region in card_text:
                        loc = region
                        break

                # Experience check
                exp = "경력무관"
                if "신입·경력" in card_text or "신입/경력" in card_text:
                    exp = "신입/경력"
                elif "신입" in card_text:
                    exp = "신입"
                elif "경력" in card_text:
                    exp = "경력"

                # Deadline check
                deadline = "상시채용"
                m_date = re.search(r"~(\d{1,2}/\d{1,2})", card_text)
                if m_date:
                    deadline = f"마감 ~{m_date.group(1)}"
                elif "오늘마감" in card_text:
                    deadline = "오늘마감"
                elif "상시" in card_text:
                    deadline = "상시채용"

                if title and len(title) > 3:
                    results.append(RawJobDto(
                        source_platform="jobkorea",
                        source_url=full_url,
                        company_name_raw=company_name,
                        title_raw=title,
                        location_raw=loc,
                        experience_raw=exp,
                        deadline_raw=deadline,
                    ))
            except Exception:
                continue

        return results
