from django.urls import path 
from .views import BlogPostListView, BlogPostDetailView, BlogPostFeaturedView, BlogPostCategoryView






app_name = 'blog'


urlpatterns = [
    path('', BlogPostListView.as_view()), 
    path('featured', BlogPostFeaturedView.as_view()), 
    path('category', BlogPostCategoryView.as_view()), 
    path('<slug:slug>', BlogPostDetailView.as_view()), 


]   








"""urlpatterns = [ 
    # post views
    #path('', views.post_list, name='post_list'), 
    path('', views.post_list, name='blogapp'),
    path('<int:year>/<int:month>/<int:day>/<slug:post>/', views.post_detail, name='post_detail'),
]"""
