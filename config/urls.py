from django.contrib import admin
from django.urls import path
from django.http import HttpResponse
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('alive', lambda request: HttpResponse("I'm alive...")),

    path('', TemplateView.as_view(template_name='index.html')),
]
