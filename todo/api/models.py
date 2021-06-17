from django.db import models
from django.utils import timezone


# Create your models here.

class Todo(models.Model):
    text = models.CharField(max_length=255)
    day = models.DateTimeField(default=timezone.now)
    reminder = models.BooleanField(default=False)
