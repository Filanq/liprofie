# Generated by Django 3.2.22 on 2023-11-28 22:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='comment',
            options={'verbose_name': 'Комментарий', 'verbose_name_plural': 'Комментарии'},
        ),
    ]
