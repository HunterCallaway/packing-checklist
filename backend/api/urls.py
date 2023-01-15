from django.urls import path
from . import views

urlpatterns = [
  path('', views.get_routes, name="routes"),
  path('trips/', views.get_trips, name="trips"),
]