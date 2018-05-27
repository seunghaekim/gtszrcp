from django.db import models
from django.forms.models import model_to_dict
import time

class Book(models.Model):
    COLORSPACE = (
        ('CMYK', 'CMYK'),
        ('RGB', 'RGB'),
        ('GRAY', 'Grayscale'),
        ('BNW', 'Black And White'),
    )

    title = models.CharField(max_length=500)
    writer = models.ForeignKey('Artist', on_delete=models.DO_NOTHING, related_name='artist_as_writer')
    designer = models.ForeignKey('Artist', on_delete=models.DO_NOTHING, related_name='artist_as_designer')
    publisher = models.ForeignKey('Publisher', on_delete=models.DO_NOTHING)
    language = models.CharField(max_length=100)
    publisher_place = models.CharField(max_length=100)
    medium = models.CharField(max_length=100)
    page_amt = models.IntegerField(default=1, null=True)
    binding_type = models.CharField(max_length=100, null=True, blank=True)
    pub_date = models.DateField()
    colorspace = models.CharField(choices=COLORSPACE, max_length=100)
    price = models.FloatField(default=1, null=True)
    slug = models.SlugField(max_length=20, unique=True, default=time.time())

    summary = models.TextField()
    figs = models.TextField(null=True, blank=True)
    toc = models.TextField(null=True)

    distributor = models.ManyToManyField('Bookshop', related_name='publisher_as_distributor', blank=True)

    updatetime = models.DateTimeField(auto_now=True)
    createtime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Artist(models.Model):
    name = models.CharField(max_length=200)
    name_eng = models.CharField(max_length=200)
    updatetime = models.DateTimeField(auto_now=True)
    createtime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Publisher(models.Model):
    name = models.CharField(max_length=200)
    name_eng = models.CharField(max_length=200)
    updatetime = models.DateTimeField(auto_now=True)
    createtime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Bookshop(models.Model):
    name = models.CharField(max_length=200)
    name_eng = models.CharField(max_length=200)
    region = models.CharField(max_length=50, blank=True, null=True)
    country = models.CharField(max_length=50, blank=True, null=True)
    address = models.CharField(max_length=50, blank=True, null=True)
    website = models.URLField(blank=True, null=True)
    updatetime = models.DateTimeField(auto_now=True)
    createtime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
