from main import views
from django.urls import path, include
from .views import HomePageView, BlogPageView
import sys
sys.path.append('/Users/Batman/Desktop/Programming/djangoApp/thesite/blog')
from blog import views as v

app_name = 'main'

urlpatterns = [
    path('', views.home, name='home'), 
    path('', views.about , name='home'), #
    path('', views.index, name='index'), 
]


