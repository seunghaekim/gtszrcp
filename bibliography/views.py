from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.forms.models import model_to_dict
from django.http import HttpResponse
from django.http import Http404
from .models import Book
from .models import Bookshop

# Create your views here.
def bibliography(request, slug=None):
    if(slug != None):
        return _bib_view(request, slug)
    return _bib_list(request)


def _bib_list(request):
    try:
        booklist = Book.objects.select_related().prefetch_related().order_by('-pub_date').all()
    except Book.DeosNotExist:
        raise Http404("Book List Does Not Exist")

    booklist_dic = []
    for b in booklist:
        cit = {
            'writer': b.writer.name,
            'title': b.title,
            'publisher': ': '.join([b.publisher.name, b.publisher_place]),
            'datetime': b.pub_date.strftime("%Y"),
            'slug': b.slug,
        }
        material = []
        amt = []
        if b.medium != None:
            amt.append(b.medium)
        if b.page_amt != None and b.page_amt > 1:
            amt.append("%d pages"%b.page_amt)

        if len(amt) > 1:
            cit['amt'] = ': '.join(amt)

        if b.binding_type != None:
            material.append(b.binding_type)

        if b.colorspace != None:
            material.append(b.colorspace)

        if len(material) > 1:
            cit['material'] = ', '.join(material)

        booklist_dic.append(cit)

    return render(request, 'bib/list.html', {'list': booklist_dic})


def _bib_view(request, slug):
    try:
        book = Book.objects.select_related().prefetch_related().get(slug=slug)
    except Book.DoesNotExist:
        raise Http404("That Book Does Not Exist")

    book_dic = {}

    for field in book._meta.get_fields():
        if field.get_internal_type() is 'ManyToManyField':
            book_dic[field.name] = getattr(book, field.name).values()
        else:
            book_dic[field.name] = getattr(book, field.name)

    return render(request, 'bib/view.html', {
        'book': book_dic
    })


def distributor(request):
    try:
        dist = Bookshop.objects.select_related().prefetch_related().all()
    except Bookshop.DoesNotExist:
        raise Http404("Bookshop list is not exists")

    return render(request, 'distributor/list.html', {
        'bookshop': dist.values()
    })
