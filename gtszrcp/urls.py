from django.conf.urls import include, url
from django.urls import path

from django.contrib import admin
admin.autodiscover()

import bibliography.views
import pages.views

# Examples:
# url(r'^$', 'gtszrcp.views.home', name='home'),
# url(r'^blog/', include('blog.urls')),

urlpatterns = [
    url(r'^$', pages.views.index, name='index'),
    path('admin/', admin.site.urls),
    url(r'^bibliography/$', bibliography.views.bibliography, name='bib_list'),
    url(r'^bibliography/(?P<slug>[\w\d]+)/$', bibliography.views.bibliography, name='bib_view'),
    url(r'^distributor/$', bibliography.views.distributor, name='dist_list'),
    url(r'^posts/$', pages.views.post, name='posts_list'),
    url(r'^posts/(?P<slug>[\w\d]+)$', pages.views.post, name='posts_view'),
    url(r'^pages/(?P<slug>[\w\d]+)$', pages.views.page, name='pages_view'),
]
