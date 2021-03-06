from django.contrib import admin
from django.urls import path, re_path
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView

from graphene_django.views import GraphQLView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('alive', lambda request: HttpResponse("I'm alive...")),
]

urlpatterns += [
    path('graphql', csrf_exempt(GraphQLView.as_view(graphiql=True))),
]

urlpatterns += [
    re_path(r'^(?P<path>.*)$', TemplateView.as_view(template_name='index.html')),
]
