from rest_framework import serializers
from .models import Page

class PageSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()
    category = serializers.StringRelatedField()

    class Meta:
        model = Page
        fields = ('id', 'author', 'title', 'slug', 'category', 'content', 'is_list', 'pub_date', 'createtime')