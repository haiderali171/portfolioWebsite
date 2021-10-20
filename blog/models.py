from django.db import models
from django.utils import timezone
from datetime import datetime
from django.template.defaultfilters import slugify 
from django.contrib.auth.models import User
from django.urls import reverse

#class PublishedManager(models.Manager): 

#    def get_queryset(self):
  #      return super(PublishedManager, self).get_queryset().filter(status='published')

class Category(models.TextChoices):
    ALL = 'all'
    TECHNOLOGY = 'technology'
    INTERNATIONALAFFAIRS = 'internationalaffairs'
    STORIES = 'stories'
    ENGINEERING = 'engineering'
    CURRENTAFFAIRS  = 'currentaffairs'
    HEALTH = 'health'
    CODING = 'coding'
    COMICS = 'comics'
    WRITING = 'writing'
    SCIENCE = 'science'
    TRAVEL = 'travel'



class BlogPost(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField()
    category = models.CharField(max_length=50, choices= Category.choices, default=Category.ALL)
    thumbnail = models.ImageField(upload_to='photos/%Y/%m/%d/')
    excerpt= models.CharField(max_length=150)
    month = models.CharField(max_length=3)
    day = models.CharField(max_length=2)
    content = models.TextField()
    featured = models.BooleanField(default=False)
    date_created = models.DateTimeField(default=datetime.now , blank=True)

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = BlogPost.objects.all().filter(slug__iexact=original_slug).count()

        count = 1 
        slug = original_slug
        while(queryset):
            slug = original_slug + '-' + str(count)
            count += 1 
            queryset = BlogPost.objects.all().filter(slug__iexact=slug).count()

        self.slug = slug

        if self.featured:
            try:
                temp = BlogPost.objects.get(True)
                if self != temp:
                    temp.featureed = False
                    temp.save()
            except BlogPost.DoesNotExist:
                pass

        super(BlogPost, self).save(*args, **kwargs)
    
    def __str__(self):
        return self.title

        

















"""class Post(models.Model): 
    STATUS_CHOICES = (
        ('draft', 'Draft'),
        ('published', 'Published'), 
    )
    title = models.CharField(max_length=250) 
    slug = models.SlugField(max_length=250, unique_for_date='publish') 
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_posts')
    body = models.TextField()
    publish = models.DateTimeField(default=timezone.now) 
    created = models.DateTimeField(auto_now_add=True) 
    updated = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')

    objects = models.Manager() # The default manager. 
    published = PublishedManager() # Our custom manager.

    class Meta:
        ordering = ('-publish',)


    def __str__(self): 
        return self.title


    def get_absolute_url(self):
        return reverse('blog:post_detail', args=[self.publish.year, self.publish.month, self.publish.day, self.slug]) """