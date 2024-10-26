from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from .models import Attraction, Mark, Comment
from django.views.generic import DetailView
from django.conf import settings
from .forms import CommentForm

def redir_main_page(request):
    return redirect('main_page')

def main_page(request):
    attr_obj = Attraction.objects
    mark = Mark.objects.get(id=5)
    most_popular = ['Театр драмы имени Л. Н. Толстого', 'Площадь Героев']
    anons_text = []

    for attr_obj_el in attr_obj.values('title', 'full_text', 'pk'):
        new_el = { 'big': '', 'small': '', 'pk': attr_obj_el['pk'] }

        for most_popular_el in most_popular:
            if most_popular_el == attr_obj_el['title']:
                if len(attr_obj_el['full_text']) > 700: 
                    new_el['big'] = f'{attr_obj_el["full_text"][:700]}..'
                else: 
                    new_el['big'] = attr_obj_el['full_text']
                break

        if len(attr_obj_el['full_text']) > 200: 
            new_el['small'] = f'{attr_obj_el["full_text"][:200]}..'
        else: 
            new_el['small'] = attr_obj_el['full_text']

        anons_text += [new_el]

    if request.method == 'POST':
        num = request.POST.get('num')
        mark.mark = (mark.mark * mark.num_marks + int(num)) / (mark.num_marks + 1)
        mark.num_marks += 1
        mark.save()

    data = { 
        'title': 'Достопримечательности Липецка', 
        'database_data': attr_obj.values('pk', 'title', 'img1', 'img2'),
        'anons_text': anons_text,
        'most_popular': most_popular,
        'mark': '{:.2f}'.format(mark.mark),
        'num_marks': mark.num_marks,
        'media_url': settings.MEDIA_URL,
    }

    return render(request, 'main_app/index.html', data)



def single_page(request, pk):
    attr_obj = Attraction.objects
    comm_obj = Comment.objects
    my_object = get_object_or_404(Attraction, pk=pk)
    last_page_pk = False
    next_page_pk = False
    last_page_title = False
    next_page_title = False

    if attr_obj.filter(pk=pk-1): 
        last_page_pk = pk-1 
        last_page_title = attr_obj.filter(pk=pk-1).values_list('title', flat=True).first()

    if attr_obj.filter(pk=pk+1): 
        next_page_pk = pk+1
        next_page_title = attr_obj.filter(pk=pk+1).values_list('title', flat=True).first()

    if request.method == 'POST':
        add_comment = CommentForm(request.POST)
        if add_comment.is_valid():
            add_comment.save()

    data = {
        'attr_obj': my_object,
        'last': {
            'link_pk': last_page_pk,
            'title': last_page_title,
        },
        'next': {
            'link_pk': next_page_pk,
            'title': next_page_title,
        },
        'media_url': settings.MEDIA_URL,
        'comm_obj': comm_obj.filter(page_pk=pk),
        'comments_num': len(comm_obj.filter(page_pk=pk)),
        'pk': pk
    }

    return render(request, 'main_app/single_page.html', data)