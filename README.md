# Healthcare ETL Platform 🏥

Una plataforma moderna de ETL (Extract, Transform, Load) para datos sanitarios, con soporte para machine learning, análisis, y predicciones médicas.

## 🏗️ Arquitectura

**Stack Tecnológico:**
- **Backend:** Django REST Framework (Python 3.12) con PostgreSQL
- **Frontend:** React 19 + TypeScript + TanStack Router & React Query
- **Base de Datos:** PostgreSQL (producción) / SQLite (desarrollo)
- **Cache & Broker:** Redis
- **Async Tasks:** Celery + Celery Beat
- **Deployment:** Docker Compose + Render

## 📋 Prerequisites

- Python 3.12+
- Node.js 20+
- Docker & Docker Compose (para desarrollo con containers)
- PostgreSQL 15+ (o usar Supabase)
- Redis (para Celery)

## 🚀 Local Development Setup

### Backend

```bash
cd backend

# Crear y activar virtual environment
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate

# Instalar dependencias
pip install -r requirements.txt

# Configurar variables de environment
cp ../.env.example ../.env
# Editar ../.env con tus valores

# Aplicar migraciones
python manage.py migrate

# Crear superuser
python manage.py createsuperuser

# Ejecutar servidor de desarrollo
python manage.py runserver
```

Backend será accesible en `http://localhost:8000`

### Frontend

```bash
cd frontend

# Instalar dependencias
npm install

# Crear archivo .env
cp .env.example .env

# Ejecutar servidor de desarrollo
npm run dev
```

Frontend será accesible en `http://localhost:5173`

## 🐳 Docker Compose Setup

Ejecutar toda la plataforma con Docker:

```bash
docker-compose up -d
```

Servicios disponibles:
- **Web (Django):** http://localhost:8000
- **Frontend (Vite):** http://localhost:5173
- **PostgreSQL:** localhost:5432
- **Redis:** localhost:6379
- **Celery Worker:** background tasks
- **Celery Beat:** scheduled tasks

Detener servicios:
```bash
docker-compose down
```

## 📚 API Documentation

- **Swagger UI:** http://localhost:8000/api/docs/
- **ReDoc:** http://localhost:8000/api/redoc/
- **Schema OpenAPI:** http://localhost:8000/api/schema/

## 🗂️ Estructura del Proyecto

```
healthcare-etl-platform/
├── backend/                    # Django Backend
│   ├── config/                # Django settings & configuration
│   ├── app/                   # Django applications
│   │   ├── authentication/    # User auth & JWT
│   │   ├── patients/          # Patient data management
│   │   ├── etl/               # ETL pipelines
│   │   ├── analytics/         # Data analytics
│   │   ├── ml/                # Machine learning models
│   │   ├── reports/           # Report generation
│   │   └── dashboard/         # Dashboard endpoints
│   ├── utils/                 # Utility functions
│   ├── logs/                  # Application logs
│   ├── manage.py              # Django CLI
│   └── requirements.txt        # Python dependencies
│
├── frontend/                   # React/TypeScript Frontend
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── routes/            # TanStack Router pages
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Utilities & helpers
│   │   └── styles.css         # Global styles
│   ├── package.json           # Node dependencies
│   └── vite.config.ts         # Vite configuration
│
├── docker/                     # Docker configuration
│   ├── Dockerfile             # Backend image
│   ├── entrypoint.sh          # Container startup script
│   └── docker-compose.yml     # Service orchestration
│
├── dataset/                    # Data files
│   ├── raw/                   # Raw input data
│   ├── processed/             # Processed data
│   └── validation/            # Validation datasets
│
├── docs/                       # Documentation
│   ├── arquitectura.md        # System architecture
│   ├── api_endpoints.md       # API specification
│   ├── flujo_etl.md           # ETL workflow
│   └── manual_usuario.md      # User guide
│
├── .env.example               # Environment template
├── render.yaml                # Render deployment config
└── README.md                  # This file
```

## 🔐 Environment Variables

Copiar `.env.example` a `.env` y configurar según tu entorno:

```bash
# Django
DEBUG=False
SECRET_KEY=your-secure-key
ALLOWED_HOSTS=localhost,yourdomain.com

# Database (elige una)
DATABASE_URL=postgresql://user:pass@host:5432/db
# O usar Supabase
SUPABASE_URL=postgresql://...

# CORS
CORS_ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com

# Redis & Celery
REDIS_URL=redis://localhost:6379/0
CELERY_BROKER_URL=redis://localhost:6379/1

# JWT
ACCESS_TOKEN_LIFETIME=30
REFRESH_TOKEN_LIFETIME=1440
```

## 🧪 Testing

```bash
cd backend

# Run tests
python manage.py test

# Run with coverage
coverage run --source='app' manage.py test
coverage report
```

## 🚢 Deployment

### Render Platform

El proyecto está configurado para desplegar en [Render](https://render.com):

1. Crear cuenta en Render
2. Conectar repositorio Git
3. Render automáticamente usará `render.yaml` para:
   - Crear base de datos PostgreSQL
   - Crear instancia Redis
   - Desplegar Django backend
   - Configurar variables de environment

```bash
# Pre-deployment checklist
- SECRET_KEY configurada en environment variables
- DEBUG=False en producción
- DATABASE_URL apunta a PostgreSQL
- CORS_ALLOWED_ORIGINS incluye tu dominio
- Email/logging configurado
```

### Docker Deployment

Construir imagen:
```bash
docker build -t healthcare-etl:latest -f docker/Dockerfile .
```

Correr contenedor:
```bash
docker run -p 8000:8000 \
  -e DATABASE_URL=postgresql://... \
  -e SECRET_KEY=... \
  healthcare-etl:latest
```

## 📊 Funcionalidades

- ✅ **Autenticación JWT** - Login seguro con tokens
- ✅ **Gestión de Pacientes** - CRUD de datos de pacientes
- ✅ **ETL Pipelines** - Extracción y transformación de datos
- ✅ **Analytics** - Análisis de datos sanitarios
- ✅ **Machine Learning** - Modelos predictivos médicos
- ✅ **Reportes** - Generación automática de reportes
- ✅ **Dashboard** - Visualización en tiempo real
- ✅ **Auditoría** - Trazabilidad de cambios
- ✅ **Task Scheduling** - Tareas automáticas con Celery

## 🔧 Development Workflows

### Crear migración de base de datos
```bash
cd backend
python manage.py makemigrations app_name
python manage.py migrate
```

### Crear un nuevo endpoint
1. Definir modelo en `app/*/models.py`
2. Crear serializer en `app/*/serializers.py`
3. Crear vista en `app/*/views.py`
4. Registrar URL en `app/*/urls.py`
5. Agregar tests en `app/*/tests.py`

### Ejecutar tareas Celery localmente
```bash
# En terminal 1 - Worker
celery -A config worker -l info

# En terminal 2 - Beat (scheduled tasks)
celery -A config beat -l info
```

## 🐛 Troubleshooting

**Error: "connection refused" a PostgreSQL**
- Verificar que PostgreSQL está corriendo
- Verificar DATABASE_URL en .env
- Para desarrollo: usar `docker-compose up`

**Error: "Static files not found"**
```bash
python manage.py collectstatic
```

**Frontend no conecta con backend**
- Verificar CORS_ALLOWED_ORIGINS en `backend/.env`
- Verificar VITE_API_URL en `frontend/.env`
- Verificar puertos (backend 8000, frontend 5173)

**Celery tasks no se ejecutan**
- Verificar Redis está corriendo: `redis-cli ping`
- Verificar worker está activo: `celery -A config inspect active`

## 📖 Documentación Adicional

- [Arquitectura del Sistema](docs/arquitectura.md)
- [Endpoints API](docs/api_endpoints.md)
- [Flujo ETL](docs/flujo_etl.md)
- [Manual de Usuario](docs/manual_usuario.md)

## 🤝 Contribuir

1. Crear branch: `git checkout -b feature/nueva-funcionalidad`
2. Realizar cambios y commits
3. Push a branch: `git push origin feature/nueva-funcionalidad`
4. Crear Pull Request

## 📝 Changelog

### v1.0.0 - Inicial
- Setup inicial del proyecto
- Autenticación JWT
- CRUD de pacientes
- ETL básico
- Dashboard frontend

## 📄 Licencia

Este proyecto es propietario y confidencial.

## 👥 Contacto

Para preguntas o soporte, contactar al equipo de desarrollo.

---

**Last Updated:** Junio 2026
