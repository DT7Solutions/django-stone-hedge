from django.contrib import admin
from .models import BlogPost,Category


class AdminBlogpost(admin.ModelAdmin):
    list_display=('Id','Category','Title','Tags','CreatedName','Create_at','status')
    list_filter = ["CreatedName",'Create_at']
admin.site.register(BlogPost,AdminBlogpost)


class AdminCategories(admin.ModelAdmin):
    list_display=('Name','Created')
admin.site.register(Category,AdminCategories)
# Register your models here.

# Register your models here.
