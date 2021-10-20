# Generated by Django 3.1.2 on 2021-05-28 16:15

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('slug', models.SlugField()),
                ('category', models.CharField(choices=[('all', 'All'), ('technology', 'Technology'), ('internationalaffairs', 'Internationalaffairs'), ('stories', 'Stories'), ('engineering', 'Engineering'), ('currentaffairs', 'Currentaffairs'), ('health', 'Health'), ('coding', 'Coding'), ('comics', 'Comics'), ('writing', 'Writing'), ('science', 'Science'), ('travel', 'Travel')], default='all', max_length=50)),
                ('thumbnail', models.ImageField(upload_to='photos/%Y/%m/%d/')),
                ('excerpt', models.CharField(max_length=150)),
                ('month', models.CharField(max_length=3)),
                ('day', models.CharField(max_length=2)),
                ('content', models.TextField()),
                ('featured', models.BooleanField(default=False)),
                ('date_created', models.DateTimeField(blank=True, default=datetime.datetime.now)),
            ],
        ),
        migrations.DeleteModel(
            name='Post',
        ),
    ]
