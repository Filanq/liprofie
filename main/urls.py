from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProfessionsList, PlacesList

router = DefaultRouter()
router.register('professions', ProfessionsList)
router.register('places', PlacesList)

urlpatterns = [
    path('', include(router.urls)),
]
