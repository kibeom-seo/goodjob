# [인프라/DevOps] 02. Cloudflare 연동 및 CI/CD 배포 파이프라인

## 1. Cloudflare Pages 연동 절차 (프론트엔드 배포)

Next.js 14 프론트엔드를 Cloudflare Pages에 무료로 배포하고 글로벌 CDN을 적용하는 가이드입니다.

### 1.1 연동 단계
1. **GitHub 저장소 연결**:
   * Cloudflare 대시보드 ➡️ `Workers & Pages` ➡️ `Create application` ➡️ `Pages` ➡️ `Connect to Git`.
2. **빌드 설정 (Next-on-Pages)**:
   * **Framework preset**: `Next.js`
   * **Build command**: `npx @cloudflare/next-on-pages`
   * **Build output directory**: `.vercel/output/static`
   * **Root directory**: `apps/web`
3. **환경변수 세팅**:
   * `NODE_VERSION`: `20`
   * `NEXT_PUBLIC_API_URL`: `https://api.yourdomain.com`

---

## 2. GitHub Actions 자동 배포 파이프라인 (`.github/workflows/deploy.yml`)

GitHub에 `git push origin main` 발생 시 프론트엔드, API, 크롤러를 자동 배포하는 워크플로우입니다:

```yaml
name: Production CI/CD Pipeline

on:
  push:
    branches: [main]

jobs:
  # 1. NestJS 백엔드 API 배포 (Railway 또는 VPS)
  deploy-api:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Deploy to Railway
        run: |
          npm install -g @railway/cli
          railway up --service job-api
        env:
          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}

  # 2. 크롤러 컨테이너 배포 (Hetzner VPS SSH)
  deploy-crawlers:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: SSH to VPS & Update Containers
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.VPS_SSH_KEY }}
          script: |
            cd ~/job-platform
            git pull origin main
            docker compose -f docker-compose.prod.yml up -d --build scrapers-worker
```

---

## 3. 필수 보안 시크릿 키 관리 리스트

| 시크릿 키 이름 | 용도 | 권장 보관 위치 |
| :--- | :--- | :--- |
| `CLOUDFLARE_API_TOKEN` | Pages 자동 배포 및 DNS 제어 | GitHub Actions Secrets |
| `DATABASE_URL` | Supabase PostgreSQL 프로덕션 연결 문자열 | Railway / VPS 환경변수 |
| `UPSTASH_REDIS_REST_URL` | Upstash Serverless Redis 엔드포인트 | Railway / VPS 환경변수 |
| `GEMINI_API_KEY` | Google AI Studio Gemini API 키 | Railway / VPS 환경변수 |
| `ANON_GLOBAL_PEPPER` | 익명 게시판 단방향 암호화 마스터 키 | **절대 유출 금지 (서버 로컬 .env)** |
| `KAKAO_CLIENT_SECRET` | 카카오 OAuth 2.0 클라이언트 시크릿 | Railway / VPS 환경변수 |
