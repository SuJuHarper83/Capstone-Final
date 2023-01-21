from rest_framework import serializers
from .models import Video, Entry, Exercise, Playlist

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['id', 'video', 'title', 'description', 'thumbnail']
        depth = 1


class PlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        fields = ['id', 'list_title', 'item']
        depth = 1


class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = ['id', 'date', 'title', 'input_a', 'input_b', 'input_c', 'mood', 'image']
        depth = 1


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['id', 'title', 'input_d', 'input_e']
        depth = 1