from django.shortcuts import render, HttpResponse
from rest_framework import viewsets
from .serializers import ProfessionSerializer, PlacesSerializer
from .models import Profession, Place, Auser
from .permissions import Admin, Any
from django.contrib.auth.hashers import make_password
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
    return render(request, "main/index.html")


# Login View
def login(request):
    if request.method == 'POST':
        data = str(request.body, 'utf-8')
        post_data = json.loads(data)
        password = str(post_data['password']).strip()
        password = make_password(password)

        if Auser.objects.filter(password=password).exists():
            request.session['is_auth'] = True
            return HttpResponse(json.dumps({"result": True, 'error': ''}),
                                content_type='application/json')
        else:
            return HttpResponse(json.dumps({"result": False, 'error': 'Неверный пароль'}), content_type='application/json')
