# =============================================================================
# Healthcare ETL Platform - Frontend Dockerfile
# =============================================================================
# IMPORTANTE: Este Dockerfile asume que el contexto de build es la carpeta
# frontend/ (Render usa rootDir o el directorio del Dockerfile como contexto)
# Por eso los COPY usan rutas relativas SIN "frontend/" al inicio
# =============================================================================

# ─── Stage 1: Build ──────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

# Copiar package files primero → mejor aprovechamiento del cache de Docker
# Si solo cambia el código fuente, no reinstala dependencias
COPY package*.json ./

# npm ci: instalación limpia y reproducible (usa package-lock.json exacto)
RUN npm ci

# Copiar el resto del código fuente
COPY . .

# Variable para la URL del backend (se sobreescribe en Render vía envVars)
ARG VITE_API_URL=https://healthcare-backend.onrender.com/api
ENV VITE_API_URL=$VITE_API_URL

# Construir la app para producción
RUN npm run build

# ─── Stage 2: Producción ──────────────────────────────────────────────────────
FROM node:22-alpine AS production

WORKDIR /app

# Instalar 'serve' para servir archivos estáticos como SPA
RUN npm install -g serve

# Copiar solo el build final (descarta node_modules y código fuente)
COPY --from=builder /app/dist ./dist

# Puerto por defecto (Render puede sobreescribirlo con $PORT)
EXPOSE 3000

# -s = modo SPA: redirige todas las rutas a index.html (necesario para React Router)
# -l = puerto de escucha
CMD ["serve", "-s", "dist", "-l", "3000"]