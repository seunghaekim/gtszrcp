from rest_framework import serializers
from .models import *

class LinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Links
        fields = '__all__'