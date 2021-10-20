from django.contrib import admin
from .models import BlogPost
from django_summernote.admin import SummernoteModelAdmin

# Register your models here.


class BlogPostAdmin(SummernoteModelAdmin):
    exclude = ('slug', )
    list_display = ('id', 'title', 'category', 'date_created')
    list_display_links = ('id', 'title')
    search_fields = ('title', )

    summernote_fields = ('content', )

admin.site.register(BlogPost, BlogPostAdmin)



"""@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'author', 'publish', 'status')
    list_filter = ('status', 'created', 'publish', 'author') 
    search_fields = ('title', 'body')
    prepopulated_fields = {'slug': ('title',)}
    raw_id_fields = ('author',)
    date_hierarchy = 'publish' 
    ordering = ('status', 'publish')"""