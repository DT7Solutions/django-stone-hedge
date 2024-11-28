from django.shortcuts import render
from .models import BlogPost,Category
from django.views.decorators.http import require_POST
from django.contrib import messages
from django.core.paginator import Paginator

# Create your views here.
def index(request):
    return render(request, 'uifiles/index.html')

def about(request):
    return render(request, 'uifiles/about.html')

def contact(request):
    return render(request, 'uifiles/contact-us.html')
def products(request):
    return render(request, 'uifiles/products.html')
def Steelgreylight(request):
    return render(request, 'uifiles/Steel-grey-light.html')
def Steelgreydark(request):
    return render(request, 'uifiles/Steel-grey-dark.html')
def Steelgreylight(request):
    return render(request, 'uifiles/Steel-grey-light.html')
def Tanbrown(request):
    return render(request, 'uifiles/Tanbrown.html')
def Maplered(request):
    return render(request, 'uifiles/Maple-red.html')
def Blackpearl(request):
    return render(request, 'uifiles/Black-pearl.html')
def Galaxy(request):
    return render(request, 'uifiles/Galaxy.html')
    
def blogs(request):
    blog = BlogPost.objects.filter().order_by('-Id')
    
    # allposts = BlogPost.objects.all()
    paginator = Paginator(blog, 9) 
    page = request.GET.get('page')
    posts = paginator.get_page(page)
    return render(request, 'uifiles/blogs.html',{'blog':posts,'posts':posts,'page':page,'navbar':'Blog'})
def Blogdetails(request,slug):
    blog_list = BlogPost.objects.filter().order_by('-Id')[:3]
    selectpost = BlogPost.objects.get(Sluglink=slug)
    totalcategories = Category.objects.all()
    all_posts = BlogPost.objects.order_by('Id')

    selected_index = None
    for i, post in enumerate(all_posts):
        if post == selectpost:
            selected_index = i
            break

    # Initialize previous and next posts
    previous_post = None
    next_post = None

    if selected_index is not None:
        # Find the previous post
        if selected_index > 0:
            previous_post = all_posts[selected_index - 1]
        else:
            # If the selected post is the first post, set previous post to the last post
            previous_post = all_posts.last()

        # Find the next post
        if selected_index < len(all_posts) - 1:
            next_post = all_posts[selected_index + 1]
        else:
            # If the selected post is the last post, set next post to the first post
            next_post = all_posts.first()
    
    context =  {'selectpost':selectpost,'totalcategories':totalcategories,'blog_list':blog_list, 'meta_title': selectpost.MetaTitle,
        'meta_description': selectpost.MetaDescription,
        'meta_tags': selectpost.MetaKeywords,'previous_post': previous_post,
        'next_post': next_post,'navbar':'Blog'}
    print(selectpost.MetaKeywords)

    return render(request, 'uifiles/blogdetails.html',context)  