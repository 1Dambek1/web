from django.shortcuts import render
from .models import Tovar
def tovars(request):
    news=Tovar.objects.order_by('title')
    return render(request, 'main/tovars.html', {'new': news})


def contact(request):
    return render(request, 'main/contact.html')
