# Stage 1: The consolidated 'builder' stage
FROM node:20-slim AS builder
WORKDIR /app
RUN npm install -g pnpm

# --- FIX PART 1: Install OpenSSL for the build stage ---
# This ensures Prisma has the necessary libraries during 'pnpm install' and 'generate'
RUN apt-get update && apt-get install -y openssl \
    && rm -rf /var/lib/apt/lists/*

# COPY package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Generate Prisma client and build the application
RUN pnpm prisma generate
RUN pnpm build


# Stage 2: The final, production-ready image
FROM node:20-slim AS runner
WORKDIR /app
RUN npm install -g pnpm

# --- FIX PART 2: Install OpenSSL for the runtime stage ---
# This is the most critical fix. It provides the libssl.so file
# that Prisma needs to run the application.
RUN apt-get update && apt-get install -y openssl \
    && rm -rf /var/lib/apt/lists/*

# Copy only the necessary artifacts from the 'builder' stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/node_modules ./node_modules

CMD ["pnpm", "start"]
