# This is the final, correct, and definitive Dockerfile for a DEVELOPMENT environment.

FROM node:20-alpine
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Install the required OpenSSL library for Prisma
RUN apk add --no-cache openssl1.1-compat

# Copy dependency files and install ALL dependencies (including dev)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile


# Copy the rest of your application code
COPY . .

# Generate the Prisma client
RUN pnpm prisma generate

# Expose the port for the development server
EXPOSE 3000

# The command to run the DEVELOPMENT server
CMD ["pnpm", "dev"]
