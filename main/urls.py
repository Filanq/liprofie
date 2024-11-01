from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProfessionsList, PlacesList, login, auth, EventsList

router = DefaultRouter()
router.register('professions', ProfessionsList)
router.register('places', PlacesList)
router.register('events', EventsList)

urlpatterns = [
    path('', include(router.urls)),
    path('login', login),
    path('auth', auth),
]
