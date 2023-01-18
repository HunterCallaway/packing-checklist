from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Trip
from .serializers import TripSerializer, CheckListItemSerializer

'''
DRY Notes:
1. The Django REST Framework `api_view` decorators allow us to return a `Response` object
    (rather than Django's HttpResponse) and to specify the HTTP method(s) the view will accept.
2. The serializers convert our Python objects into JSON.
'''

'''
This view will return a list of objects that contain information about our routes.
'''
@api_view(['GET'])
def get_routes(request):
  routes = [
        {
            'Endpoint': '/trips/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of trips.'
        },
        {
            'Endpoint': '/trips/id/',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single trip object.'
        },
        {
            'Endpoint': '/trips/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates a new trip with data sent in post request.'
        },
        {
            'Endpoint': '/trips/id/check_list_item/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates a new item with data sent in post request.'
        },
        {
            'Endpoint': '/trips/id/check_list_item/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Updates an existing itm with data sent in put request.'
        },
        {
            'Endpoint': '/trips/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes an exiting trip.'
        },
        {
            'Endpoint': '/trips/id/check_list_item/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes an exiting item.'
        },
    ]
  return Response(routes)

'''
This view will return all instances of the Trip model in our database.
Notes:
We use the `many=True` parameter with `TripSerializer`,
  because we want to serialize multiple objects.
'''
@api_view(['GET'])
def get_trips(request):
    trips = Trip.objects.all()
    serializer = TripSerializer(trips, many=True)
    return Response(serializer.data)

'''
This view will return a specified Trip instance.
We use the `many=False` parameter with `TripSerializer`,
  because we only want to serialize a single object.
'''
@api_view(['GET'])
def get_trip(request, pk):
    trip = Trip.objects.get(id=pk)
    serializer = TripSerializer(trip, many=False)
    return Response(serializer.data)
