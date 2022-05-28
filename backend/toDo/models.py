from django.db import models

# Create your models here.
class User(models.Model):
    userId = models.IntegerField(primary_key=True)
    username = models.CharField(max_length=30,unique=True)
    password = models.CharField(max_length=30)

class Task(models.Model):
    taskName = models.CharField(max_length=30)
    task_info = models.TextField(max_length=100)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)