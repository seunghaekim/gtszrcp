from django.http import HttpResponse
from django.http import JsonResponse
from django.http import Http404
from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.forms.models import model_to_dict
from rest_framework import viewsets
from .models import *
from .serializers import *


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    lookup_field = 'slug'

class DistViewSet(viewsets.ModelViewSet):
    queryset = Bookshop.objects.all()
    serializer_class = BookshopSerializer