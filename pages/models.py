from django.db import models
from django.conf import settings
from photo.models import Gallery

import time

# Create your models here.
class Page(models.Model):
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, 
        on_delete=models.DO_NOTHING, 
        default=1
        )
    title = models.CharField(
        max_length=500
        )
    slug = models.SlugField(
        max_length=20, 
        unique=True, 
        default=time.time()
        )
    category = models.ForeignKey(
        'Category', 
        on_delete=models.DO_NOTHING
        )
    content = models.TextField(blank=True)
    images = models.ForeignKey(
        Gallery, 
        blank=True, 
        on_delete=models.DO_NOTHING, 
        default=None, 
        null=True
        )

    is_feature = models.BooleanField(default=False)
    is_list = models.BooleanField(default=True)

    pub_date = models.DateField()
    createtime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Category(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(
        max_length=20, 
        unique=True
        )
    createtime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
