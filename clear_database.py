import os
import sys

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

source_dir = os.path.dirname(os.path.abspath(__file__))
print(source_dir)
sys.path.append(source_dir)

import django
django.setup()

from django.apps import apps
from django.db import connection

with connection.cursor() as cursor:
    DJANGO_DB_NAME = os.getenv('DJANGO_DB_NAME') or 'db'

    # postgres
    cursor.execute(f'DROP SCHEMA public CASCADE;')
    cursor.execute(f'CREATE SCHEMA public;')

    # mysql
    # cursor.execute(f'DROP DATABASE {DJANGO_DB_NAME}')
    # cursor.execute(f'CREATE DATABASE {DJANGO_DB_NAME}')

for app in apps.get_app_configs():
    os.system(f'rm -r {app.label}/migrations')
    os.system(f'mkdir {app.label}/migrations')
    os.system(f'touch {app.label}/migrations/__init__.py')

os.system('python manage.py makemigrations')
os.system('python manage.py migrate')


# dummy data
from django.contrib.auth import get_user_model
User = get_user_model()
user = User.objects.create_user(username='admin', email='admin@admin.com', password='qwer1234')

from articles.models import Article
for i in range(10):
    Article.objects.create(
        title=f'title{i}',
        content=f'content{i}\n\n\n\n\n\n\n\n  hi',
        price=i*1000,
        address=f'ADDRESS {i}',
        favorite=i*10,
        chatting_count=i*8,
        view_count=i*100,
    )