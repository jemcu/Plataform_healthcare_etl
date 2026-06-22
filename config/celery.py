import os
from celery import Celery
from celery.schedules import crontab

# Configure Django settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

app = Celery('healthcare_etl')

# Load configuration from Django settings with CELERY prefix
app.config_from_object('django.conf:settings', namespace='CELERY')

# Auto-discover tasks from all registered Django apps
app.autodiscover_tasks()

# Periodic tasks
app.conf.beat_schedule = {
    'process-etl-data-hourly': {
        'task': 'app.etl.tasks.process_etl_pipeline',
        'schedule': crontab(minute=0),
    },
    'generate-analytics-daily': {
        'task': 'app.analytics.tasks.generate_daily_analytics',
        'schedule': crontab(hour=2, minute=0),
    },
    'generate-reports-daily': {
        'task': 'app.reports.tasks.generate_daily_reports',
        'schedule': crontab(hour=3, minute=0),
    },
}

@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')