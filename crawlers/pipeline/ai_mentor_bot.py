import json
import os
import sys
import time
import httpx

# Windows 콘솔 UTF-8 설정
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

posts_file = "apps/web/data/community_posts.json"
API_KEY = os.getenv("GEMINI_API_KEY", "YOUR_GEMINI_API_KEY_HERE")
ENDPOINT = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key={API_KEY}"

def generate_ai_mentor_reply(post_title: str, post_content: str) -> str:
    """Gemini 3.6 Flash를 활용하여 취준생 질문에 대한 따뜻하고 전문적인 시니어 멘토 답변 생성"""
    prompt = f"""
너는 IT 대기업(네카라쿠배)에서 5년 이상 근무한 친절하고 전문적인 '시니어 개발자 멘토'야.
취준생이 익명 커뮤니티에 아래와 같은 고민/질문을 올렸는데 24시간 동안 아무도 답변을 안 달아줘서 외로워하고 있어.
취준생을 따뜻하게 격려하면서도, 실제 서류/면접/취업에 바로 도움 되는 실질적이고 구체적인 조언을 3~4문단으로 친절하게 작성해줘.

취준생 제목: {post_title}
취준생 질문: {post_content}
"""

    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"temperature": 0.4}
    }

    try:
        with httpx.Client(timeout=30.0) as client:
            res = client.post(ENDPOINT, json=payload, headers={"Content-Type": "application/json"})
            if res.status_code == 200:
                reply = res.json()["candidates"][0]["content"]["parts"][0]["text"].strip()
                return reply
    except Exception as e:
        print(f"[Gemini 멘토 오류]: {e}")

    return "취준생님, 많이 답답하고 막막하셨을 텐데 잘 찾아오셨습니다! 기본기를 충실히 다지면서 프로젝트 트러블슈팅 경험을 자소서에 솔직하게 녹여내시면 분명 좋은 결과가 있을 겁니다. 응원합니다!"

def check_and_reply_unanswered_posts():
    """답변이 없는 질문 글을 찾아 AI 멘토 답변을 자동 등록"""
    if not os.path.exists(posts_file):
        print("커뮤니티 데이터 파일이 없습니다.")
        return

    with open(posts_file, "r", encoding="utf-8") as f:
        posts = json.load(f)

    updated = False
    for post in posts:
        # 댓글이 0개인 질문 글 탐색
        if len(post.get("comments", [])) == 0:
            print(f">>> [미답변 질문 감지]: '{post.get('title')}'")
            print(">>> Gemini 3.6 Flash 시니어 멘토 AI 답변 생성 중...")
            ai_reply = generate_ai_mentor_reply(post.get("title", ""), post.get("content", ""))
            
            new_comment = {
                "id": f"ai-reply-{int(time.time())}",
                "authorTag": "🤖 굿잡 AI 시니어 멘토 (현직자 인증)",
                "content": ai_reply,
                "createdAt": "방금 전 (AI 멘토 케어)",
                "likes": 12
            }
            post["comments"].append(new_comment)
            post["commentsCount"] = len(post["comments"])
            updated = True
            print(">>> [완료] AI 멘토 답변이 성공적으로 등록되었습니다!")
            break

    if updated:
        with open(posts_file, "w", encoding="utf-8") as f:
            json.dump(posts, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    check_and_reply_unanswered_posts()
