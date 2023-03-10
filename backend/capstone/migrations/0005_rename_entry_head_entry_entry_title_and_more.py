# Generated by Django 4.0.4 on 2023-01-22 19:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('capstone', '0004_rename_title_exercise_ex_head'),
    ]

    operations = [
        migrations.RenameField(
            model_name='entry',
            old_name='entry_head',
            new_name='entry_title',
        ),
        migrations.RenameField(
            model_name='exercise',
            old_name='ex_head',
            new_name='ex_title',
        ),
        migrations.RenameField(
            model_name='playlist',
            old_name='list_head',
            new_name='list_title',
        ),
        migrations.RenameField(
            model_name='video',
            old_name='video_head',
            new_name='video_title',
        ),
    ]
