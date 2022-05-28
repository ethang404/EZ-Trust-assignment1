from django.urls import path
from .views import *

urlpatterns = [
    path('auth/<str:username>/<str:password>',authenticate),
    path('register/<str:username>/<str:password>',register),
]