import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

os.system('python manage.py migrate admin zero')
os.system('python manage.py migrate auth zero')
os.system('python manage.py migrate contenttypes zero')
os.system('python manage.py migrate sessions zero')

apps = [
    'articles',
]
for app in apps:
    os.system(f'python manage.py migrate {app} zero')
    os.system(f'rm -r {app}/migrations')
    os.system(f'mkdir {app}/migrations')
    os.system(f'touch {app}/migrations/__init__.py')

os.system('python manage.py makemigrations')
os.system('python manage.py migrate')


import django
django.setup()


from django.contrib.auth import get_user_model
User = get_user_model()
user = User.objects.create_user(username='admin', email='admin@admin.com', password='qwer1234')


from articles.models import Article
for i in range(10):
    Article.objects.create(title=f'title{i}', content=f'content{i}', user=user, price=i*1000)