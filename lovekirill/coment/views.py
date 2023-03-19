from django.shortcuts import render, redirect
from .models import Otz 
from .forms import OdzForm
def about(request):
    new = Otz.objects.order_by('name')


    return render(request, 'com/2.html', {'new': new})

def plus(request):

    form = OdzForm(request.POST or None)

    new = Otz.objects.order_by('name')

    data = {
        
        'new':new
        
    }
    
    return render(request, 'new/21.html', data , )