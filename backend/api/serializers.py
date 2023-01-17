from rest_framework.serializers import ModelSerializer
from .models import Trip, CheckListItem

'''
DRY Notes:
1. The `Meta` class acts a validator.
'''

class TripSerializer(ModelSerializer):
  class Meta:
    model = Trip
    fields = '__all__'

class CheckListItemSerializer(ModelSerializer):
  class Meta:
    model = CheckListItem
    fields = '__all__'
