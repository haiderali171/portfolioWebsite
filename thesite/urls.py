"""thesite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django import urls
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.i18n import i18n_patterns
from django.urls.conf import re_path
from django.views.generic import TemplateView
from django.utils.translation import gettext_lazy as _
from django.conf import settings

import sys
sys.path.append('/Users/Batman/Desktop/Programming/djangoApp/thesite/main')
from main import views
#from . import settings
from . import local_settings

admin.autodiscover()
 

urlpatterns = [
    path('i18n/', include('django.conf.urls.i18n')),
    path('admin/', admin.site.urls),
    path('api-auth', include('rest_framework.urls')),
    path('api/blog', include('blog.urls')),
    path('summernote', include('django_summernote.urls')),
    path('account/', include('account.urls')),      
] 


urlpatterns += i18n_patterns(
    path('blog/', include('blog.urls', namespace='blog')),
    path('', include('main.urls', namespace='main')),
    path('', include('main.urls')),
    path(_('about/'), views.about, name='about'),
    path('images/', include('images.urls', namespace='images')),
    path('store/', include('store.urls', namespace='store')),
    path('cart/', include('cart.urls', namespace='cart')),
    path('orders/', include('orders.urls', namespace='orders')),
    path('api/', include('api.urls', namespace='api')),
    path('payment/', include('payment.urls', namespace='payment')),
    prefix_default_language=False,
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='home.html'))]


