from django.http import HttpResponse
from rest_framework import viewsets
from .models import *
from .serializers import *

def get_category_id(name):
    try:
        return Category.objects.filter(name=name).get().id
    except Exception as e:
        return False


class PageViewSet(viewsets.ModelViewSet):
    category_id = get_category_id('pages')
    queryset = Page.objects.filter(category_id=category_id).order_by('-pub_date').all()
    serializer_class = PageSerializer
    lookup_field = 'slug'


class PostViewSet(viewsets.ModelViewSet):
    category_id = get_category_id('posts')
    queryset = Page.objects.filter(category_id=category_id).order_by('-pub_date').all()
    serializer_class = PageSerializer
    lookup_field = 'slug'
