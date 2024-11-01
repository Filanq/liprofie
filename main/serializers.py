from .models import Profession, Place, Event
from rest_framework.serializers import ModelSerializer


class ProfessionSerializer(ModelSerializer):
    class Meta:
        model = Profession
        fields = '__all__'


class PlacesSerializer(ModelSerializer):
    class Meta:
        model = Place
        fields = '__all__'


class EventsSerializer(ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
