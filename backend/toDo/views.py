from django.shortcuts import render
from .serializers import *
from .models import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponse
import random
# Create your views here.

@api_view(['GET'])
def authenticate(request,username,password): #consider returning HTTP status codes and do response.ok on front end?
    if User.objects.filter(username = username,password = password).exists():
        return Response(True)
    else:
        return Response(False)

@api_view(['POST','GET'])
def register(request,username,password):

    while(True): #used to generate a random id for User that does not already exist. Not scalable imo
        randomID = random.randint(1, 30)
        if User.objects.filter(userId = randomID).exists(): #not unique id
            continue
        elif User.objects.filter(username = username).exists(): #not unique username
            return HttpResponse(status=400)
        else:
            newUser = User(userId=randomID,username=username,password=password)
            newUser.save()
            return HttpResponse(status=201)
     
    