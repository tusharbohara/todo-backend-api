from django.utils import timezone
from django.db import models


# Create your models here.

class Todo(models.Model):
    text = models.CharField(max_length=255)
    date = models.DateField(default=timezone.now)
    time = models.TimeField(default=timezone.now)
    reminder = models.BooleanField(default=False)
