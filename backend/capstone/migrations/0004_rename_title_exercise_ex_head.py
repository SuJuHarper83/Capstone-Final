# Generated by Django 4.0.4 on 2023-01-22 19:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('capstone', '0003_rename_entry_title_entry_entry_head_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='exercise',
            old_name='title',
            new_name='ex_head',
        ),
    ]