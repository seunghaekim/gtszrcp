from django.conf import settings
from django.conf.urls import include
from django.urls import re_path
from django.conf.urls import url
from django.conf.urls.static import static
from django.urls import path
from django.contrib import admin
from rest_framework import routers

import bibliography.views
import pages.views
import links.views

admin.autodiscover()

router = routers.DefaultRouter()
router.register(r'book', bibliography.views.BookViewSet)
router.register(r'dist', bibliography.views.DistViewSet)
router.register(r'page', pages.views.PageViewSet)
router.register(r'post', pages.views.PostViewSet)
router.register(r'links', links.views.LinksViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    re_path(r'^', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
