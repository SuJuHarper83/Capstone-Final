from django.contrib import admin
from embed_video.admin import AdminVideoMixin
from .models import *

# Register your models here.

class VideoAdmin(AdminVideoMixin, admin.ModelAdmin):
    list_display = ("video", "title", "description" )

admin.site.register(Video, VideoAdmin)
admin.site.register(Playlist)
admin.site.register(Entry)
admin.site.register(Exercise)