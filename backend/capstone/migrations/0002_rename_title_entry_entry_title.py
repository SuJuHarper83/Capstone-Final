# Generated by Django 4.0.4 on 2023-01-22 19:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('capstone', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='entry',
            old_name='title',
            new_name='entry_title',
        ),
    ]
