import httpx
import json

api_key = "YOUR_GEMINI_API_KEY_HERE"

# 1. v1beta 모델 목록 조회
url_list = f"https://generativelanguage.googleapis.com/v1beta/models?key={api_key}"

with httpx.Client(timeout=10.0) as client:
    res = client.get(url_list)
    print(f"ListModels status: {res.status_code}")
    if res.status_code == 200:
        models = res.json().get("models", [])
        print("사용 가능한 지원 모델 목록:")
        for m in models:
            if "generateContent" in m.get("supportedGenerationMethods", []):
                print(f" - {m.get('name')}")
    else:
        print("ListModels 실패 응답:", res.text)
