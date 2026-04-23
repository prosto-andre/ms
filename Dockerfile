# To use this Dockerfile, you have to set `output: 'standalone'` in your next.config.mjs file.
# From https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

FROM nexus.npfpens.ru/library/node:24-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app
ARG PAYLOAD_SECRET
# ENV PAYLOAD_SECRET="${PAYLOAD_SECRET}"
RUN echo "Вывод REMOTE_PG_USER: $REMOTE_PG_USER"
ARG REMOTE_PG_USER
# ENV REMOTE_PG_USER="${REMOTE_PG_USER}"
RUN echo "Вывод PAYLOAD_SECRET: $PAYLOAD_SECRET"
COPY . .
RUN touch .env
RUN pnpm ensure-database-exists
RUN corepack enable pnpm && \
    pnpm i --frozen-lockfile
# Disable telemetry during build
ENV NEXT_TELEMETRY_DISABLED 1
# Build arguments
# ARG PAYLOAD_SECRET=""
# ENV PAYLOAD_SECRET="${PAYLOAD_SECRET}"
# ENV NODE_ENV=production
# Build Next.js application
RUN corepack enable pnpm && \
    pnpm build
# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs
# Switch to non-root user
USER nextjs

EXPOSE 3000

# ENV HOSTNAME=0.0.0.0
# ENV PORT=3000

# Run the server
CMD ["pnpm", "start"]