from django.urls import path
from .views import index,about,contact,blogs,Blogdetails,products,steelgreylight,steelgreydark,maplered,blackpearl,tanbrown,galaxy



urlpatterns = [
    path('',index,name='index'),
    path('about/',about,name='about'),
    path('products/', products , name='products'),
    path('contact/',contact,name='contact'),
    path('blogs/',blogs,name='blogs'),
    path('blog/<str:slug>', Blogdetails , name='blog'),
    path('steel-grey-light/',steelgreylight,name='steel-grey-light'),
    path('steel-grey-dark/',steelgreydark,name='steel-grey-dark'),
    path('tan-brown/',tanbrown,name='tan-brown'),
    path('black-pearl/',blackpearl,name='black-pearl'),
    path('maple-red/',maplered,name='maple-red'),
    path('galaxy/',galaxy,name="galaxy"),
]