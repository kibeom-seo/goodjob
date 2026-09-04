import httpx
from bs4 import BeautifulSoup

url = "https://www.jobkorea.co.kr/recruit/joblist?menucode=duty&dutyType=10016"
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
res = httpx.get(url, headers=headers, follow_redirects=True)
soup = BeautifulSoup(res.text, "html.parser")

links = soup.find_all("a", href=lambda h: h and "/Recruit/GI_Read/" in h)
print(f"잡코리아 공고 링크 발견 개수: {len(links)}")
if links:
    sample = links[0]
    print(f"샘플 링크 텍스트: {sample.get_text(strip=True)}")
