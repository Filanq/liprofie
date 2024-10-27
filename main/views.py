from django.shortcuts import render, HttpResponse
from rest_framework import viewsets
from .serializers import ProfessionSerializer, PlacesSerializer
from .models import Profession, Place, Auser
from .permissions import Admin, Any
from django.contrib.auth.hashers import make_password, check_password
import json


# Professions List
class ProfessionsList(viewsets.ModelViewSet):
    queryset = Profession.objects.all()
    serializer_class = ProfessionSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [Any()]
        return [Admin()]


# Places List
class PlacesList(viewsets.ModelViewSet):
    queryset = Place.objects.all()
    serializer_class = PlacesSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [Any()]
        return [Admin()]


# Index View
def index(request):
    return render(request, "main/dist/index.html")


# Login View
def login(request):
    if request.method == 'POST':
        data = str(request.body, 'utf-8')
        post_data = json.loads(data)
        password_success = Auser.objects.get(pk=1).password
        password = str(post_data['password']).strip()
        is_password_correct = check_password(password, password_success)

        if is_password_correct:
            request.session['is_auth'] = True
            return HttpResponse(json.dumps({"result": True, 'error': ''}),
                                content_type='application/json')
        else:
            return HttpResponse(json.dumps({"result": False, 'error': 'Неверный пароль'}), content_type='application/json')


# Auth Checker View
def auth(request):
    try:
        if request.session['is_auth']:
            return HttpResponse(json.dumps({'is_auth': True}), content_type='application/json')
        else:
            return HttpResponse(json.dumps({'is_auth': False}), content_type='application/json')
    except KeyError:
        return HttpResponse(json.dumps({'is_auth': False}), content_type='application/json')
