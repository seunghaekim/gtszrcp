from rest_framework import serializers
from photo.serializers import *
from .models import *

class AuthorNameField(serializers.RelatedField):
    def to_representation(self, value):
        return ' '.join(list(filter(lambda x: x != None, [value.last_name, value.first_name])))


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class PageSerializer(serializers.ModelSerializer):
    author = AuthorNameField(read_only=True)
    category = CategorySerializer()
    images = GallerySerializer()
    lookup_field = 'slug'
    extra_kwargs = {
        'url': {'lookup_field': 'slug'}
    }

    class Meta:
        model = Page
        fields = '__all__'