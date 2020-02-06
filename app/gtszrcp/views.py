import os
from django.shortcuts import render
from django.conf import settings

def index(request):
    return render(request, os.path.join(settings.BASE_DIR, 'front', 'dist', 'index.html'))