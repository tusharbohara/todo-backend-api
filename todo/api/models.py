from django.contrib.auth.models import User
from django.utils import timezone
from django.db import models


# Create your models here.

class Todo(models.Model):
    text = models.CharField(max_length=255)
    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)
    reminder = models.BooleanField(default=False)
    owner = models.ForeignKey('auth.User', related_name='tasks', on_delete=models.CASCADE)

    class Meta:
        ordering = ['date']


class Profile(models.Model):
    person = models.OneToOneField(User, related_name='profile', on_delete=models.CASCADE)
    dob = models.DateField(blank=True, null=True)
    address = models.TextField()
    city = models.CharField(max_length=50)
    district = models.CharField(max_length=50, blank=True, null=True)
    province = models.CharField(max_length=50)
    country = models.CharField(max_length=50)

    # class Meta:
    #     ordering = ['person']
