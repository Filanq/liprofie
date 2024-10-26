from .models import Profession, Place
from rest_framework.serializers import ModelSerializer


class ProfessionSerializer(ModelSerializer):
    class Meta:
        model = Profession
        fields = '__all__'


class PlacesSerializer(ModelSerializer):
    class Meta:
        model = Place
        fields = '__all__'
