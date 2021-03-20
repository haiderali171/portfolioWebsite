from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import TemplateView
from django.utils.translation import gettext as _
from .forms import TheForm 
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse


class HomePageView(TemplateView):
    template_name = 'home.html'


class BlogPageView(TemplateView): # new
    template_name = 'list.html'


# Create your views here.


def about(request):
    return render(request, 'home.html', {'title': _('Rhenium')})




def index(request):
    return render(request, 'index.html')                    


def index2(request):
    return render(request, 'index2.html')


def home(request):
    if request.method == 'POST':
        form = TheForm(request.POST)
        if form.is_valid():
            subject = "Website Inquiry"
            body = {
                'name': form.cleaned_data['name'],
                'email': form.cleaned_data['email'],
                'product': form.cleaned_data['product'],
                'message': form.cleaned_data['message'],
            }
            message = "\n".join(body.values())

            try:   
                send_mail(subject, message, 'admin@example.com', ['admin@example.com'])
            except BadHeaderError:
                return HttpResponse('Invalid Header Found')
            return redirect ("main:home")
    else:
        form = TheForm()
    return render(request, 'home.html', {'home': home, 'form': form})