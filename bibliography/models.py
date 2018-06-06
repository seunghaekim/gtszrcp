from django.db import models
from django.forms.models import model_to_dict
from photo.models import Gallery
import time


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


class Book(models.Model):
    COLORSPACE = (
        ('CMYK', 'CMYK'),
        ('RGB', 'RGB'),
        ('GRAY', 'Grayscale'),
        ('BNW', 'Black And White'),
    )

    title = models.CharField(max_length=500)
    subtitle = models.CharField(max_length=500, blank=True)
    writer = models.ManyToManyField(
        'Artist', 
        related_name='artist_as_writer', 
        blank=True, 
        default=Artist.objects.filter(name='김미루').get().id
        )
    editor = models.ManyToManyField(
        'Artist', 
        related_name='artist_as_editor', 
        blank=True
        )
    designer = models.ManyToManyField(
        'Artist', 
        related_name='artist_as_designer', 
        blank=True, 
        default=Artist.objects.filter(name='써드엔지니어링카르텔').get().id
        )
    publisher = models.ManyToManyField(
        'Publisher', 
        default=Publisher.objects.filter(name='금치산자레시피').get().id
        )
    language = models.CharField(max_length=100, default='Korean')
    publisher_place = models.CharField(max_length=100, default='Seoul')
    medium = models.CharField(max_length=100)
    page_amt = models.IntegerField(default=1, null=True)
    binding_type = models.CharField(max_length=100, null=True, blank=True)
    pub_date = models.DateField()
    colorspace = models.CharField(choices=COLORSPACE, max_length=100)
    price = models.FloatField(default=1, null=True)
    slug = models.SlugField(max_length=20, unique=True)

    summary = models.TextField(null=True, blank=True)
    figs = models.TextField(null=True, blank=True)
    toc = models.TextField(null=True, blank=True)
    images = models.ForeignKey(Gallery, blank=True, on_delete=models.DO_NOTHING, default=None, null=True)

    distributor = models.ManyToManyField('Bookshop', related_name='publisher_as_distributor', blank=True)

    updatetime = models.DateTimeField(auto_now=True)
    createtime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
    def __many_to_string(self, field):
        return ', '.join([str(p) for p in getattr(self, field).all()])
    
    def writer_str(self):
        return self.__many_to_string('writer')
    
    def editor_str(self):
        return self.__many_to_string('editor')
    
    def designer_str(self):
        return self.__many_to_string('designer')

    def publisher_str(self):
        return self.__many_to_string('publisher')
    
    def distributor_related(self):
        dist = []
        for d in self.distributor.all():
            dist.append({'name': d.name, 'website': d.website})
        
        return dist


class Bookshop(models.Model):
    name = models.CharField(max_length=200)
    name_eng = models.CharField(max_length=200)
    region = models.CharField(max_length=50, blank=True, null=True)
    country = models.CharField(max_length=50, blank=True, null=True, default='Korea')
    address = models.CharField(max_length=50, blank=True, null=True)
    website = models.URLField(blank=True, null=True)
    updatetime = models.DateTimeField(auto_now=True)
    createtime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
