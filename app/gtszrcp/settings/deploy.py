import os
import dj_database_url
from .base import *

DEBUG = False
SITE_DOMAIN = 'http://app.gtszrcp.gtszoffice.com'
ALLOWED_HOSTS = [
    'app.gtszrcp.gtszoffice.com',
    'gtszrcp.gtszoffice.com',
    'app.gtszrcp.com',
    'gtszrcp.com',
]
DATABASES['default'] = dj_database_url.config(conn_max_age=600)  # noqa: F405

CORS_ORIGIN_WHITELIST = [
    'http://gtszrcp.gtszoffice.com',
    'http://app.gtszrcp.gtszoffice.com',
    'http://gtszrcp.com',
    'http://app.gtszrcp.com',
]

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
        },
        'file': {
            'level': 'DEBUG',
            'class': 'logging.FileHandler',
            'filename': os.path.join(BASE_DIR, 'logs', 'debug.log')
        }
    },
    'loggers': {
        'django': {
            'handlers': ['file'],
            'level': os.getenv('DJANGO_LOG_LEVEL', 'INFO'),
        },
    },
}
