# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

COPY frontend/package*.json ./
RUN npm ci

COPY frontend/ .

RUN npm run build

# Production stage
FROM node:22-alpine

WORKDIR /app

# Copy the Nitro node-server output
COPY --from=builder /app/.output ./.output

ENV PORT=3000
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]