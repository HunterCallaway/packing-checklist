from django.db import models

# Create your models here.

class Trip(models.Model):
  destination = models.CharField(max_length=75)
  leave_date = models.DateField()
  return_date = models.DateField()

  '''
  This function will allow us to view a string representation
  of the object in the admin panel.
  '''
  def __str__(self):
      return self.destination
  

class CheckList(models.Model):
  trip = models.ForeignKey(Trip, on_delete=models.CASCADE)
  item = models.CharField(max_length=255)
  quantity = models.IntegerField(default=1)
  going = models.BooleanField(default=False)
  returning = models.BooleanField(default=False)

  '''
  This function will allow us to view a string representation
  of the object in the admin panel.
  '''
  def __str__(self):
      return self.item
  
