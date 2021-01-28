from django.db import models
from django.utils import timezone


class Article(models.Model):
    title = models.CharField(max_length=125)
    content = models.TextField(blank=True)
    price = models.DecimalField(max_digits=6, decimal_places=2, null=True)
    address = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    favorite = models.PositiveIntegerField(default=0)
    chatting_count = models.PositiveIntegerField(default=0)
    view_count = models.PositiveIntegerField(default=0)
