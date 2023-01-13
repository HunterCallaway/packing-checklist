from django.shortcuts import render
from rest_framework.response import Response

# Create your views here.

'''
This view will return a list of objects that contain information about our routes.
We set the safe parameter to False to receive any Python data type.
'''
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
            'Endpoint': '/trips/id/item/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates a new item with data sent in post request.'
        },
        {
            'Endpoint': '/trips/id/item/update/',
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
            'Endpoint': '/trips/id/item/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes an exiting item.'
        },
    ]
  return Response(routes)
