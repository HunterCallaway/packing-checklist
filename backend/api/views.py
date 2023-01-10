from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

'''
This view will return a list of objects that contain information about our routes.
We set the safe parameter to False to receive any Python data type.
'''
def get_routes(request):
  return JsonResponse('Our API', safe=False)
