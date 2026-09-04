import json
import os

posts_file = "apps/web/data/community_posts.json"

seed_posts = [
  {
    "id": "post-seed-1",
    "category": "talk",
    "categoryLabel": "취준 넋두리·위로",
    "title": "비전공자 국비지원 수료 후 첫 취업 준비 중인데, 서류 합격이 너무 어렵네요...",
    "content": "비전공자이고 6개월 부트캠프를 수료하고 지금 2개월째 지원 중입니다. 포트폴리오는 팀 프로젝트 2개 정도 넣었는데 서류 합격률이 5%도 안 나와서 너무 막막합니다. 뭘 더 보완해야 할까요? 현실적인 조언 부탁드립니다 ㅠㅠ",
    "authorTag": "취준생 멘티 (답변 기다리는 중 ⏳)",
    "authorCompanyBadge": "24시간 미답변 질문",
    "createdAt": "1일 전",
    "likes": 15,
    "commentsCount": 0,
    "views": 430,
    "comments": []
  },
  {
    "id": "post-seed-2",
    "category": "interview",
    "categoryLabel": "면접·서류 후기",
    "title": "신입 면접에서 기술 질문 모를 때 어떻게 대처하는 게 가장 좋나요?",
    "content": "어제 면접에서 모르는 CS 질문이 나왔을 때 아예 어버버거리다 끝났습니다. 모르면 모른다고 솔직하게 말하는 게 나은지, 아니면 아는 데까지 유추해서 답하는 게 좋은지 현직자 선배님들의 기준이 궁금합니다.",
    "authorTag": "면접 준비생 (답변 기다리는 중 ⏳)",
    "authorCompanyBadge": "24시간 미답변 질문",
    "createdAt": "1일 전",
    "likes": 28,
    "commentsCount": 0,
    "views": 610,
    "comments": []
  },
  {
    "id": "post-seed-3",
    "category": "career_advice",
    "categoryLabel": "현직자 커리어 조언",
    "title": "대기업 신입 합격자들의 공통점 3가지 (서류 통과 기준)",
    "content": "수많은 신입 자소서와 포폴을 검토하면서 느낀 합격자들의 공통점입니다.\n1. 화려한 기술 스택 나열보다 '내가 왜 이 기술을 선택했는가'에 대한 근거가 명확함\n2. 트러블슈팅(에러 해결 과정)을 기술 블로그나 커밋 로그로 투명하게 증명함\n3. 지원하는 회사의 비즈니스 도메인(핀테크, 커머스 등)에 대한 관심도가 보임\n취준생 여러분, 서류에 본인만의 문제 해결 스토리를 꼭 담으세요!",
    "authorTag": "카카오 출신 시니어 멘토",
    "authorCompanyBadge": "굿잡 공식 인증 멘토",
    "createdAt": "5시간 전",
    "likes": 154,
    "commentsCount": 18,
    "views": 2890,
    "comments": []
  }
]

with open(posts_file, "r", encoding="utf-8") as f:
    existing = json.load(f)

# 병합 (중복 방지)
existing_ids = {p["id"] for p in existing}
for p in seed_posts:
    if p["id"] not in existing_ids:
        existing.append(p)

with open(posts_file, "w", encoding="utf-8") as f:
    json.dump(existing, f, ensure_ascii=False, indent=2)

print(">>> [완료] 24시간 미답변 취준생 질문 및 전문가 멘토 칼럼이 커뮤니티에 시딩되었습니다!")
