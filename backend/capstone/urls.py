from django.urls import path
from . import views

urlpatterns = [
    path('getExercises/', views.exercise_library),
    path('getExercises/<int:pk>/', views.exercise_by_id),
    path('getVideos/', views.video_library),
    path('getVideos/<int:pk>/', views.video_by_id),
    path('addEntry/', views.journal_entry),
    path('createPlaylist/', views.create_playlist),
    path('addToPlaylist/<str:pk>/', views.add_to_playlist),
    path('addEntry/<int:pk>/', views.entry_by_id)
]

# use these url patterns to retrieve your data in the frontend axios calls