import httpx
from bs4 import BeautifulSoup

url = "https://www.saramin.co.kr/zf_user/jobs/list/job-category?cat_kcls=2"
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
res = httpx.get(url, headers=headers, follow_redirects=True)
soup = BeautifulSoup(res.text, "html.parser")

# 채용 공고 링크 태그 탐색
links = soup.find_all("a", href=lambda h: h and "/zf_user/jobs/relay/view" in h)
print(f"공고 상세 링크 발견 개수: {len(links)}")
if links:
    sample = links[0]
    print(f"샘플 링크 텍스트: {sample.get_text(strip=True)}")
    print(f"샘플 링크 부모 태그 클래스: {sample.parent.get('class', [])}")
    print(f"샘플 상위 조부모 태그: {sample.find_parent('div').get('class', [])}")
