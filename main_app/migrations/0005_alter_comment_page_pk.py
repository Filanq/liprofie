# Generated by Django 3.2.22 on 2023-11-29 18:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0004_alter_comment_page_pk'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='page_pk',
            field=models.CharField(max_length=10),
        ),
    ]
