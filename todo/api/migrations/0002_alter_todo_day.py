# Generated by Django 3.2.4 on 2021-06-17 18:10

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='day',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
