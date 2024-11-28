from django.urls import path
from .views import index,about,contact,blogs,Blogdetails



urlpatterns = [
    path('',index,name='index'),
    path('about/',about,name='about'),
    # path('tobacco-varieties/',tobacco_varieties,name='tobacco_varieties'),
    # path('stock-update/',stock_update,name='stock_update'),
    # path('csractivity/',csractivity,name='csractivity'),
    # path('csrdetails/', csrdetails , name='csrdetails'),
    path('blog/<str:slug>', Blogdetails , name='blog'),
    path('contact/',contact,name='contact'),
    path('blogs/',blogs,name='blogs'),

]