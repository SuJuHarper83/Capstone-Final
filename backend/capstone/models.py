from django.db import models
from authentication.models import User
from django.utils import timezone
from embed_video.fields import EmbedVideoField

# Create your models here.

class Video(models.Model):
    video = EmbedVideoField()
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=300)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Playlist(models.Model):
    list_title = models.CharField(max_length=255)
    item = models.ManyToManyField(Video, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Entry(models.Model):
    date = models.DateField(default=timezone.now)
    entry_title = models.CharField(max_length=255)
    input_a = models.CharField(max_length=2000)
    input_b = models.CharField(max_length=3000)
    input_c = models.CharField(max_length=3000)
    mood = models.IntegerField()
    image = models.ImageField(upload_to='post_images', blank=True, verbose_name="Image")
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        ordering = ["-date"]


class Exercise(models.Model):
    ex_title = models.CharField(max_length=255)
    input_d = models.CharField(max_length=3000)
    input_e = models.CharField(max_length=1000)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
