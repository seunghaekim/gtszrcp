import os
from .base import *

if os.getenv('DJANGO_SETTINGS_MODULE') == 'gtszrcp.settings.dev':
    from .dev import *
else:
    from .deploy import *

__all__ = dir()