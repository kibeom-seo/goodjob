# ==============================================================================
# GoodJob Production Dockerfile (Next.js 14 Standalone Multi-Stage Build)
# ==============================================================================

# 1. Base Stage: Node.js 22 Alpine (경량화 및 보안 최적화)
FROM node:22-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat
ENV NEXT_TELEMETRY_DISABLED=1

# 2. Dependencies Stage: 의존성 패키지 클린 설치
FROM base AS deps
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
RUN npm ci

# 3. Builder Stage: Next.js Standalone 최적화 빌드
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 빌드 타임 환경변수 무결성 검증 및 Standalone 빌드
ENV NODE_ENV=production
RUN npm run validate:env
RUN npm run build

# 4. Runner Stage: 프로덕션 배포용 초경량 실행 레이어
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=8088
ENV HOSTNAME="0.0.0.0"

# 보안 강화를 위한 비특권 시스템 계정 생성
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# 퍼블릭 정적 리소스 및 Standalone 산출물 복사
COPY --from=builder /app/public ./public

# Standalone 빌드 산출물 복사 (권한 부여)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# SQLite 데이터베이스 볼륨 디렉토리 준비 및 소유권 설정
RUN mkdir -p ./data && chown -R nextjs:nodejs ./data
COPY --from=builder --chown=nextjs:nodejs /app/data ./data

# 비특권 계정으로 전환하여 컨테이너 실행
USER nextjs

EXPOSE 8088

CMD ["node", "server.js"]
