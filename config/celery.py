import os
from config.celery import Celery
from celery.schedules import crontab

# Configure Django settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

app = Celery('healthcare_etl')

# Load configuration from Django settings with CELERY prefix
app.config_from_object('django.conf:settings', namespace='CELERY')

# Auto-discover tasks from all registered Django apps
app.autodiscover_tasks()

# Optional: Define periodic tasks
app.conf.beat_schedule = {
    # Example: Process ETL data every hour
    'process-etl-data-hourly': {
        'task': 'app.etl.tasks.process_etl_pipeline',
        'schedule': crontab(minute=0),  # Every hour at :00
    },
    # Example: Generate analytics reports daily at 2 AM
    'generate-analytics-daily': {
        'task': 'app.analytics.tasks.generate_daily_analytics',
        'schedule': crontab(hour=2, minute=0),  # Every day at 2 AM
    },
    # Example: Generate reports daily at 3 AM
    'generate-reports-daily': {
        'task': 'app.reports.tasks.generate_daily_reports',
        'schedule': crontab(hour=3, minute=0),  # Every day at 3 AM
    },
}

@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')
