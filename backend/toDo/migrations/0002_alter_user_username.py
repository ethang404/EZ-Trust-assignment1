# Generated by Django 4.0.3 on 2022-05-27 04:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('toDo', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(max_length=30, unique=True),
        ),
    ]
