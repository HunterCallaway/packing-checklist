from django.urls import path
from . import views

urlpatterns = [
  path('', views.get_routes, name="routes"),
  
  path('trips/', views.get_trips, name="trips"),

  path('trips/<str:pk>/', views.get_trip, name="trip"),
]