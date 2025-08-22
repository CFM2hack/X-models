# Stage 1: The consolidated 'builder' stage
FROM node:20-slim AS builder
WORKDIR /app
RUN npm install -g pnpm

RUN apt-get update && apt-get install -y openssl \
    && rm -rf /var/lib/apt/lists/*

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
RUN pnpm list --depth=0


COPY . .

RUN pnpm prisma generate
RUN pnpm build

# Stage 2: The final, production-ready image
FROM node:20-slim AS runner
WORKDIR /app
RUN npm install -g pnpm

RUN apt-get update && apt-get install -y openssl \
    && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/tailwind.config.js ./tailwind.config.js
COPY --from=builder /app/postcss.config.js ./postcss.config.js

CMD ["pnpm", "start"]
