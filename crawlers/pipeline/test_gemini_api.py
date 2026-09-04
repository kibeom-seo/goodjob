import httpx
import json
import os
import sys

# Windows 콘솔 UTF-8 설정
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

api_key = "YOUR_GEMINI_API_KEY_HERE"

url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key={api_key}"

prompt = """
당신은 취준생을 돕는 채용 플랫폼 '모아잡'의 AI 커리어 어시스턴트입니다.
다음 채용공고를 취준생 관점에서 읽고, 허례허식을 걷어낸 핵심 3줄 브리핑을 JSON 형식으로 작성해주세요.

[채용공고]
회사명: 토스 (비바리퍼블리카)
직무: Frontend Platform Engineer
자격요건: React/Next.js 실무 3년 이상, 대규모 웹뷰 최적화 경험
우대사항: 모노레포 구축 경험, 디자인 시스템 운영
처우 및 복지: 업계 최고 수준 연봉 보장, 자율 출퇴근, 최고급 장비 지원

반드시 아래 JSON 구조로만 답변하세요 (마크다운 코드블록 없이 순수 JSON):
{
  "mission": "어떤 일을 하게 되는지 1문장 요약",
  "requirements": "필수 요구 역량 및 경력 1문장 요약",
  "benefits": "처우, 연봉, 복지 혜택 1문장 요약",
  "keywords": ["핵심키워드1", "핵심키워드2", "핵심키워드3"]
}
"""

payload = {
    "contents": [
        {
            "parts": [
                {"text": prompt}
            ]
        }
    ],
    "generationConfig": {
        "responseMimeType": "application/json",
        "temperature": 0.2
    }
}

print(">>> [Google Gemini 1.5 Flash API 실시간 검증 요청 전송 중...]")

try:
    with httpx.Client(timeout=15.0) as client:
        response = client.post(url, json=payload, headers={"Content-Type": "application/json"})
        
        print(f">>> HTTP 응답 상태 코드: {response.status_code}")
        
        if response.status_code == 200:
            result = response.json()
            candidate_text = result["candidates"][0]["content"]["parts"][0]["text"]
            parsed_json = json.loads(candidate_text)
            
            print("\n========================================================")
            print("🎉 [검증 성공!] Google AI Studio API Key가 정상 작동합니다!")
            print("========================================================")
            print(f"📌 미션: {parsed_json.get('mission')}")
            print(f"📌 요건: {parsed_json.get('requirements')}")
            print(f"📌 처우: {parsed_json.get('benefits')}")
            print(f"📌 키워드: {parsed_json.get('keywords')}")
            print("========================================================\n")
        else:
            print("❌ [검증 실패] API 응답 에러:")
            print(response.text)
except Exception as e:
    print(f"❌ [네트워크/호출 예외 발생]: {e}")
