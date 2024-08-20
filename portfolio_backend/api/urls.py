from django.urls import path
from . import views

urlpatterns = [
    path('profile/', views.profile_info, name='profile'),
    path('project_list/', views.project_list, name='project_list'),
]
