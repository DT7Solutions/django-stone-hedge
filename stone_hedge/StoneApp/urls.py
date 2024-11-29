from django.urls import path
from .views import index,about,contact,blogs,Blogdetails,products,steelgreylight,steelgreydark,maplered,blackpearl,tanbrown,galaxy



urlpatterns = [
    path('',index,name='index'),
    path('about/',about,name='about'),
    path('products/', products , name='products'),
    path('contact/',contact,name='contact'),
    path('blogs/',blogs,name='blogs'),
    path('blog/<str:slug>', Blogdetails , name='blog'),
    path('steelgreylight/',steelgreylight,name='steelgreylight'),
    path('steelgreydark/',steelgreydark,name='steelgreydark'),
    path('tanbrown/',tanbrown,name='tanbrown'),
    path('blackpearl/',blackpearl,name='blackpearl'),
    path('maplered/',maplered,name='maplered'),
    path('galaxy/',galaxy,name="galaxy"),
]