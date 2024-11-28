from django.urls import path
from .views import index,about,contact,blogs,Blogdetails,products,Steelgreylight,Steelgreydark,Maplered,Blackpearl,Tanbrown,Galaxy



urlpatterns = [
    path('',index,name='index'),
    path('about/',about,name='about'),
    path('products/', products , name='products'),
    path('contact/',contact,name='contact'),
    path('blogs/',blogs,name='blogs'),
    path('blog/<str:slug>', Blogdetails , name='blog'),
    path('Steelgreylight/',Steelgreylight,name='Steelgreylight'),
    path('Tanbrown/',Tanbrown,name='Tanbrown'),
    path('Blackpearl/',Blackpearl,name='Blackpearl'),
    path('Maplered/',Maplered,name='Maplered'),
    path('Galaxy/',Galaxy,name="Galaxy"),
]