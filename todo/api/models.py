from django.utils import timezone
from django.db import models


# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=255)
    # date = models.DateField(default=timezone.now)
    # time = models.TimeField(default=timezone.now)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title
