from rest_framework import serializers
from .models import Video, Entry, Exercise, Playlist

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['id', 'video', 'video_title', 'description', 'thumbnail']
        depth = 1


class PlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        fields = ['id', 'list_title', 'item']
        depth = 1


class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = ['id', 'date', 'entry_title', 'input_a', 'input_b', 'input_c', 'mood', 'image']
        depth = 1


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['id', 'ex_title', 'input_d', 'input_e']
        depth = 1