from django.urls import path
from .views import index,about,contact,blogs,Blogdetails,products



urlpatterns = [
    path('',index,name='index'),
    path('about/',about,name='about'),
   
    
    
    path('products/', products , name='products'),
    path('blog/<str:slug>', Blogdetails , name='blog'),
    path('contact/',contact,name='contact'),
    path('blogs/',blogs,name='blogs'),

]