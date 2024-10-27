from django.db import models


class Auser(models.Model):
    password = models.CharField(max_length=250, null=False)


class Profession(models.Model):
    title = models.CharField(max_length=250, null=True)
    text = models.TextField(max_length=1000, null=True)
    img1 = models.ImageField(blank=True, null=True, upload_to='professions')
    img2 = models.ImageField(blank=True, null=True, upload_to='professions')


class Place(models.Model):
    title = models.CharField(max_length=250, null=True)
    text = models.TextField(max_length=1000, null=True)
    img = models.ImageField(blank=True, null=True, upload_to='places')
