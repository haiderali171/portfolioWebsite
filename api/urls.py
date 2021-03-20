from django.urls import path 
from . import views

app_name = 'api'



urlpatterns = [ 
    path('product/', views.ProductListView.as_view(), name='product_list'),
    path('product/<fk>/', views.ProductDetailView.as_view(), name='product_detail'),
]