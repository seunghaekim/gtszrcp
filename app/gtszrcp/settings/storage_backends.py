import os
from storages.backends.s3boto3 import S3Boto3Storage

_location = 'media'
if int(os.getenv('DJANGO_DEBUG', 1)) == 1:
    _location = 'devmedia'


class MediaStorage(S3Boto3Storage):
    location = _location
    file_overwrite = False
