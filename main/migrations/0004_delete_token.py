# Generated by Django 4.2.13 on 2024-10-26 17:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_token_end_date'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Token',
        ),
    ]
