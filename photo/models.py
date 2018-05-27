from django.db import models

# Create your models here.
class Photo(models.Model):
    image = models.ImageField()
    name = models.CharField(max_length=100, default='')
    slug = models.SlugField(max_length=20, unique=True)

class Gallery(models.Model):
    title = models.CharField(max_length=100, default='')
    images = models.ManyToManyField('Photo', related_name='photo_items')
    slug = models.SlugField(max_length=20, unique=True)
