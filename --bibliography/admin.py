from django.contrib import admin
from .models import *
# Register your models here.

class SimpleAdmin(admin.ModelAdmin):
    list_display = ('name', 'name_eng', )
    ordering = ('name', )

class BookshopAdmin(admin.ModelAdmin):
    list_display = ('name', 'country', 'region', 'website', )
    ordering = ('name', )

class BookAdmin(admin.ModelAdmin):
    # list_display = ('title', 'writer_string', 'publisher', 'pub_date')
    list_display = ('title', 'writer_str', )
    ordering = ('-pub_date', )

admin.site.register(Artist, SimpleAdmin)
admin.site.register(Book, BookAdmin)
admin.site.register(Publisher, SimpleAdmin)
admin.site.register(Bookshop, BookshopAdmin)
