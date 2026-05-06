# syntax=docker/dockerfile:1.6

# ─────────────────────────────────────────────────────────────
# Stage 1: deps — 의존성 설치
# ─────────────────────────────────────────────────────────────
FROM node:20-alpine AS deps
WORKDIR /app

# Alpine + native 모듈(sharp 등) 호환성
RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json* ./
RUN npm ci --loglevel=error

# ─────────────────────────────────────────────────────────────
# Stage 2: builder — Next.js 빌드 (NEXT_PUBLIC_* 인라인)
# ─────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 빌드 시점에 .env 가 컨테이너 안에 있어야
# NEXT_PUBLIC_* 변수가 클라이언트 번들에 박힘
RUN npm run build

# ─────────────────────────────────────────────────────────────
# Stage 3: runner — production 실행 (standalone)
# ─────────────────────────────────────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# 비루트 사용자
RUN addgroup -S -g 1001 nodejs && \
    adduser -S -u 1001 -G nodejs nextjs

# Next.js standalone output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

# 컨테이너 외부에서 접근 가능하도록 0.0.0.0 바인드
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# standalone server
CMD ["node", "server.js"]
