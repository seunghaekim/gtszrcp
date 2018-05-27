from django.contrib import admin
from .models import *

# Register your models here.

class PageAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'slug', 'pub_date', )
    ordering = ('-pub_date', )

admin.site.register(Page, PageAdmin)
admin.site.register(Category)
