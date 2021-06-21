from rest_framework import serializers
from .models import *


class TodoSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Todo
        fields = ['id', 'text', 'date', 'time', 'reminder', 'owner']
