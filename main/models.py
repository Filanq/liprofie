from django.db import models


class Auser(models.Model):
    password = models.CharField(max_length=250, null=False)


class Profession(models.Model):
    img = models.ImageField(blank=True, upload_to='professions')
    title = models.CharField(max_length=250, null=True)
    text = models.TextField(max_length=1000, null=True)


class Place(models.Model):
    img = models.ImageField(blank=True, upload_to='places')
    title = models.CharField(max_length=250, null=True)
    text = models.TextField(max_length=1000, null=True)
