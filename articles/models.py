from django.db import models


class Article(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=125)
    content = models.TextField(blank=True)
    price = models.DecimalField(max_digits=6, decimal_places=2, null=True)

