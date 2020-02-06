from django.db import models
from django.forms.models import model_to_dict

class Links(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=20, unique=True)
    url = models.URLField(max_length=200)
    starttime = models.DateTimeField(auto_now=True)
    endtime = models.DateTimeField()
    updatetime = models.DateTimeField(auto_now=True)
    createtime = models.DateTimeField(auto_now_add=True)