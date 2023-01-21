from django.shortcuts import render
from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from django.views.generic import DetailView
from django.http import HttpResponseRedirect
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.urls import reverse
from rest_framework.response import Response
from rest_framework import status
from .models import Video, Playlist, Entry, Exercise
from .serializers import VideoSerializer, PlaylistSerializer, EntrySerializer, ExerciseSerializer

# Create your views here.

@api_view (['GET', 'POST'])
@permission_classes ([IsAuthenticated])
def exercise_library(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'GET': #200 OK
        exercise = Exercise.objects.all()
    elif request.method == 'POST': #201 Created
        serializer = ExerciseSerializer(data=request.data)
        serializer.is_valid()
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    serializer = ExerciseSerializer(exercise, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view (['GET'])
@permission_classes ([IsAuthenticated])
def video_library(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'GET':
        video = Video.objects.all()
    
    serializer = VideoSerializer(video, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view (['GET', 'POST'])
@permission_classes ([IsAuthenticated])
def journal_entry(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'GET':
        entry = Entry.objects.all()
    elif request.method == 'POST':
        serializer = EntrySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    serializer = EntrySerializer(entry, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view (['GET'])
@permission_classes ([IsAuthenticated])
def entry_by_id(request, pk):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    entry = get_object_or_404(Entry, pk=pk)
    if request.method == 'GET': #200 OK
        serializer = EntrySerializer(entry);
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view (['GET', 'POST'])
@permission_classes ([IsAuthenticated])
def create_playlist(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST': #201 Created
        playlist = Playlist.objects
        serializer = PlaylistSerializer(data=request.data)
        serializer.is_valid()
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    serializer = PlaylistSerializer(playlist, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view (['PATCH'])
@permission_classes ([IsAuthenticated])
def add_to_playlist(request, pk):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    playlist=get_object_or_404(Playlist, pk=pk)
    if request.method == 'PATCH': #201 Created
        item = get_object_or_404(Video, pk=pk)
        for i in playlist:
            playlist.append(item)
        serializer = PlaylistSerializer(data=request.data)
        serializer.is_valid()
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    serializer = PlaylistSerializer(playlist, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)



