from django.conf import settings
from django.conf.urls import include
from django.conf.urls import url
from django.conf.urls.static import static
from rest_framework import routers
from django.urls import path
from django.contrib import admin

import bibliography.views
import pages.views

admin.autodiscover()

router = routers.DefaultRouter()
router.register(r'book', bibliography.views.BookViewSet)
router.register(r'dist', bibliography.views.DistViewSet)
router.register(r'page', pages.views.PageViewSet)
router.register(r'post', pages.views.PostViewSet)

urlpatterns = [
    url(r'^v1/', include(router.urls)),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
