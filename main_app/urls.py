from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.redir_main_page, name='redir_main_page'),
    path('main_page', views.main_page, name='main_page'),
    path('page<int:pk>', views.single_page, name='single_page'),
]