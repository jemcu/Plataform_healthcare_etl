#!/bin/bash
set -e

echo "======================================"
echo "  HealthAnalytics IPS - Starting up  "
echo "======================================"

# Crear directorio de logs si no existe
mkdir -p /app/logs

# Esperar a que la base de datos esté lista (con timeout)
echo "[INFO] Esperando conexión a la base de datos..."
MAX_RETRIES=20
COUNT=0

until python -c "
import os, psycopg2, sys
try:
    conn = psycopg2.connect(os.environ.get('DATABASE_URL', ''))
    conn.close()
    print('[OK] DB conectada.')
    sys.exit(0)
except Exception as e:
    print(f'[WAIT] Error: {e}', flush=True)
    sys.exit(1)
" 2>&1; do
    COUNT=$((COUNT + 1))
    if [ $COUNT -ge $MAX_RETRIES ]; then
        echo "[ERROR] No se pudo conectar después de $MAX_RETRIES intentos. Abortando."
        exit 1
    fi
    echo "[WAIT] Base de datos no disponible, reintentando en 3s... ($COUNT/$MAX_RETRIES)"
    sleep 3
done

# Ejecutar migraciones
echo "[INFO] Aplicando migraciones..."
python manage.py migrate --noinput

# Crear superusuario si no existe
echo "[INFO] Verificando superusuario..."
python manage.py shell << 'EOF'
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser(
        username='admin',
        email='admin@healthanalytics.com',
        password='Admin1234!',
        rol='administrador'
    )
    print("Superusuario creado: admin / Admin1234!")
else:
    print("Superusuario ya existe.")
EOF

echo "[OK] Inicialización completada."

# Iniciar Gunicorn usando el puerto de Render ($PORT) con fallback a 8000
PORT=${PORT:-8000}
echo "[INFO] Iniciando Gunicorn en 0.0.0.0:$PORT..."
exec gunicorn config.wsgi:application \
    --bind 0.0.0.0:$PORT \
    --workers 2 \
    --timeout 120 \
    --access-logfile /app/logs/access.log \
    --error-logfile /app/logs/error.log \
    --log-level info
