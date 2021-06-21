from rest_framework import serializers
from .models import *


class TodoSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Todo
        fields = ['id', 'text', 'date', 'time', 'reminder', 'owner', 'url']


class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    # user_info = UserSerializer(read_only=True)
    person = serializers.PrimaryKeyRelatedField(read_only=True)
    # tasks = TodoSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        fields = '__all__'


class UserSerializer(serializers.HyperlinkedModelSerializer):
    profile = ProfileSerializer(many=False, read_only=True)
    tasks = TodoSerializer(many=True, read_only=True)
    # tasks = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['url', 'id', 'username', 'first_name', 'last_name', 'profile', 'tasks']
