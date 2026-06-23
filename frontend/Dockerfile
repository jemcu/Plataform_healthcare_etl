# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY frontend/package*.json ./

# Install dependencies
RUN npm ci

# Copy frontend source
COPY frontend/ .

# Build the application
RUN npm run build

# Production stage
FROM node:22-alpine

WORKDIR /app

# Copy built app from builder (both client and server are needed)
COPY --from=builder /app/dist ./dist

# Render assigns the port via $PORT env var
ENV PORT=3000
EXPOSE 3000

# Start the TanStack Start server
CMD ["node", "dist/server/server.js"]