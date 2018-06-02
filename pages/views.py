from django.http import HttpResponse
from rest_framework import viewsets
from .models import *
from .serializers import *

class PageViewSet(viewsets.ModelViewSet):
    queryset = Page.objects.filter(category_id=2).order_by('-pub_date').all()
    serializer_class = PageSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Page.objects.filter(category_id=1).order_by('-pub_date').all()
    serializer_class = PageSerializer

# def index(request, slug=None, category_id=None):
#     return _page_list(request, category_id)
#
#
# def post(request, slug=None, category_id=1):
#     if slug != None:
#         return _page_view(request, slug, category_id)
#     return _page_list(request, category_id)
#
#
# def page(request, slug=None, category_id=2):
#     if slug != None:
#         return _page_view(request, slug, category_id)
#     return _page_list(request, category_id)
#
#
# def _page_list(request, category_id):
#     try:
#         lists = Page.objects.select_related().prefetch_related()
#     except Page.DoesNotExist:
#         raise Http404("Pages not exists")
#
#     lists = lists.filter(is_list=True)
#
#     if category_id != None:
#         lists = lists.filter(category_id=category_id)
#
#     lists = lists.order_by('-pub_date').values()
#     User = get_user_model()
#
#     for i in range(0, len(lists)):
#         usr = User.objects.get(pk=lists[i]['author_id'])
#         author_str = usr.username
#         if usr.first_name and usr.last_name:
#             author_str = ' '.join([usr.first_name.capitalize(), usr.last_name])
#         lists[i]['author'] = author_str
#
#     return render(request, 'posts/list.html', {'list': lists})
#
#
# def _page_view(request, slug, category_id):
#     template =  'posts/view.html'
#     if category_id == 2:
#         template = 'pages/view.html'
#
#     try:
#         postObj = Page.objects.select_related().prefetch_related().get(slug=slug)
#     except Page.DoesNotExist:
#         raise Http404("The Page is not exists")
#
#     post = {}
#     for key in model_to_dict(postObj):
#         post[key] = getattr(postObj, key)
#         if key == 'author':
#             post[key] = ' '.join([post[key].first_name.capitalize(), post[key].last_name])
#     post['createtime'] = postObj.createtime
#
#     return render(request, 'posts/view.html', {'post': post})
