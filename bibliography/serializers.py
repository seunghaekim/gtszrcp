from rest_framework import serializers
from photo.serializers import *
from .models import *

class ArtistSerializer(serializers.ModelSerializer):

    class Meta:
        model = Artist
        fields = '__all__'


class PublisherSerializer(serializers.ModelSerializer):

    class Meta:
        model = Artist
        fields = '__all__'


class BookshopSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Bookshop
        fields = ('name', 'name_eng', 'region', 'country', 'address', 'website', 'updatetime', 'createtime')


class BookSerializer(serializers.ModelSerializer):
    lookup_field = 'slug'
    writer = ArtistSerializer(many=True)
    editor = ArtistSerializer(many=True)
    designer = ArtistSerializer(many=True)
    publisher = PublisherSerializer(many=True)
    distributor = BookshopSerializer(many=True)
    images = GallerySerializer()
    extra_kwargs = {
        'url': {'lookup_field': 'slug'}
    }

    class Meta:
        model = Book
        ordering = ('-pub_date', )
        fields = '__all__'