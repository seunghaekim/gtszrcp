from rest_framework import serializers
from .models import Page

class AuthorNameField(serializers.RelatedField):
    def to_representation(self, value):
        return ' '.join(list(filter(lambda x: x != None, [value.last_name, value.first_name])))

class PageSerializer(serializers.ModelSerializer):
    author = AuthorNameField(read_only=True)
    category = serializers.StringRelatedField()
    lookup_field = 'slug'
    extra_kwargs = {
        'url': {'lookup_field': 'slug'}
    }

    class Meta:
        model = Page
        fields = ('id', 'author', 'title', 'slug', 'category', 'content', 'is_list', 'pub_date', 'createtime')