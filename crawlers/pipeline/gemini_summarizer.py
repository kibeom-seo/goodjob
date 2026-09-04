import httpx
import json
import os
import sys
from typing import Dict, Optional

# Windows 콘솔 UTF-8 설정
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

class GeminiJobSummarizer:
    """
    Google AI Studio Gemini 3.6 Flash 모델을 활용하여
    채용공고 전문을 취준생 관점의 3줄 핵심 요약으로 자동 변환하는 엔진.
    """
    def __init__(self, api_key: str = None):
        self.api_key = api_key or os.getenv("GEMINI_API_KEY", "YOUR_GEMINI_API_KEY_HERE")
        self.endpoint = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key={self.api_key}"

    def summarize_job(self, company: str, title: str, description_text: str = "") -> Dict[str, any]:
        """단일 공고 3줄 핵심 요약 생성"""
        prompt = f"""
채용공고 핵심을 취준생 관점에서 3줄 요약해줘:
회사: {company}, 직무: {title}
{description_text[:300]}

JSON 형식:
{{
  "mission": "담당 업무 한 줄",
  "requirements": "자격 요건 한 줄",
  "benefits": "연봉/복지 한 줄",
  "keywords": ["키워드1", "키워드2", "키워드3"]
}}
"""

        payload = {
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {
                "responseMimeType": "application/json",
                "temperature": 0.2
            }
        }

        try:
            with httpx.Client(timeout=30.0) as client:
                res = client.post(self.endpoint, json=payload, headers={"Content-Type": "application/json"})
                if res.status_code == 200:
                    text = res.json()["candidates"][0]["content"]["parts"][0]["text"]
                    data = json.loads(text)
                    data["generatedAt"] = "Gemini 3.6 Flash 실시간 AI 분석 완료"
                    return data
        except Exception as e:
            print(f"[Gemini 요약 경고] {company} 공고 요약 실패, 기본값 사용: {e}")

        # 실패 시 안전 기본값 반환
        return {
            "mission": f"'{title}' 포지션 핵심 프로젝트 및 업무 수행",
            "requirements": "해당 직무 기초 및 실무 역량 보유자",
            "benefits": "4대보험, 유연 근무제 및 역량 중심 보상 지원",
            "keywords": ["굿잡 추천", "핵심 직무", "취준생 알짜"],
            "generatedAt": "굿잡 기본 큐레이션"
        }

if __name__ == "__main__":
    summarizer = GeminiJobSummarizer()
    print(">>> [테스트] 실제 공고 1건 Gemini 3.6 Flash 요약 요청 중...")
    result = summarizer.summarize_job("카카오페이", "데이터 엔지니어 (Kafka/Spark)")
    print(json.dumps(result, ensure_ascii=False, indent=2))
