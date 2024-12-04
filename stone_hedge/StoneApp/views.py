from django.shortcuts import render
from .models import BlogPost,Category,ContactInquiry
from django.http import HttpResponse
from django.views.decorators.http import require_POST
from django.contrib import messages
from django.core.paginator import Paginator
from django.core.mail import send_mail
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

# Create your views here.
def index(request):
    blog = BlogPost.objects.filter().order_by('-Id')
    
    # allposts = BlogPost.objects.all()
    paginator = Paginator(blog, 9) 
    page = request.GET.get('page')
    posts = paginator.get_page(page)
    return render(request, 'uifiles/index.html',{'blog':posts,'posts':posts,'page':page,'navbar':'Home'})

def about(request):
    return render(request, 'uifiles/about.html', {'navbar':'About'})

@csrf_exempt    
def contact(request):
    if request.method == "POST":
        try:
            first_name = request.POST.get('firstName')
            last_name = request.POST.get('lastName')
            phone = request.POST.get('phone')
            email = request.POST.get('email')
            service = request.POST.get('service')
            message = request.POST.get('message')

            # Save to the database
            ContactInquiry.objects.create(
                first_name=first_name,
                last_name=last_name,
                phone=phone,
                email=email,
                service=service,
                message=message,
            )

            return JsonResponse({'success': True, 'message': 'Successfully submitted your request.'}, status=200)
        except Exception as e:
            return JsonResponse({'success': False, 'message': f'Error: {str(e)}'}, status=500)
    return render(request, 'uifiles/contact-us.html', {'navbar':'Contact'})

def products(request):
    return render(request, 'uifiles/products.html', {'navbar':'Products'})

def steelgreylight(request):
    return render(request, 'uifiles/steelgreylight.html', {'navbar':'Steelgraylight'})

def steelgreydark(request):
    return render(request, 'uifiles/steelgreydark.html', {'navbar':'Steelgraydark'})

def blackpearl(request):
    return render(request, 'uifiles/blackpearl.html', {'navbar':'Blackpearl'})

def maplered(request):
    return render(request, 'uifiles/maplered.html', {'navbar':'Maplered'})

def tanbrown(request):
    return render(request, 'uifiles/tanbrown.html', {'navbar':'Tanbrown'})

def galaxy(request):
    return render(request, 'uifiles/galaxy.html', {'navbar':'Galaxy'})
    
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

