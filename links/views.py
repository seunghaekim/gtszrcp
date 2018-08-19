from django.http import HttpResponse
from rest_framework import viewsets
from .models import *
from .serializers import *

class LinksViewSet(viewsets.ModelViewSet):
    queryset = Links.objects.all()
    serializer_class = LinksSerializer
    lookup_field = 'slug'