from django.contrib import admin
from .models import BlogPost,Category,ContactInquiry,Gallerycategory, GalleryImage


class AdminBlogpost(admin.ModelAdmin):
    list_display=('Id','Category','Title','Tags','CreatedName','Create_at','status')
    list_filter = ["CreatedName",'Create_at']
admin.site.register(BlogPost,AdminBlogpost)


class AdminCategories(admin.ModelAdmin):
    list_display=('Name','Created')

# Register your models here.

# Register your models here.

class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'phone', 'email', 'service', 'submitted_at')
    search_fields = ('first_name', 'last_name', 'email', 'service')
    list_filter = ('service', 'submitted_at')

class AdminGalleryCategory(admin.ModelAdmin):
    list_display = ('id','Name')

class AdminGallery(admin.ModelAdmin):
    list_display = ('id','category', 'image')

admin.site.register(Category,AdminCategories)    
admin.site.register(ContactInquiry,ContactInquiryAdmin)    
admin.site.register(Gallerycategory,AdminGalleryCategory)
admin.site.register(GalleryImage,AdminGallery)