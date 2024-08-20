from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse

def profile_info(request):
    data = {
        "name": "Sabri Nasser Hussein Dokhan",
        "email": "sabridokhan2@gmail.com",
        "location": "Kuala Lumpur, Malaysia",
        "profile": "Dedicated software developer with a year of industry experience specializing in Python, Java, and SQL.",
    }
    return JsonResponse(data)

def project_list(request):
    projects = [
        {"name": "Project 1", "description": "A full-stack development project..."},
        {"name": "Project 2", "description": "A data analysis project using Python..."},
        {"name": "Project3",  "description":"NodeJS API"}
    ]
    return JsonResponse(projects, safe=False)


