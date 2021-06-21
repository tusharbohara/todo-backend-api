from django.utils import timezone
from django.db import models


# Create your models here.

class Todo(models.Model):
    text = models.CharField(max_length=255)
    date = models.DateField(blank=True, default=timezone.localdate)
    time = models.TimeField(blank=True, default=timezone.localtime)
    reminder = models.BooleanField(default=False)
    owner = models.ForeignKey('auth.User', related_name='tasks', on_delete=models.CASCADE)

    class Meta:
        ordering = ['date']
