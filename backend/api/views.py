from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

# We set the safe parameter to False to receive any Python data type.
def get_routes(request):
  return JsonResponse('Our API', safe=False)
