from .models import Otz
from django.forms import ModelForm, TextInput, DateTimeInput, Textarea
from django import forms
class OdzForm(forms.ModelForm):
    class Meta:
        model = Otz
        fields = ['name', 'infa']
        widgets = {
            'name': TextInput(attrs={
                'placeholder':"Твоё имя",
                'type':"text",
                'class':"form-popup__title",

            }),
            'infa': TextInput(attrs={
                'placeholder':"Твоё имя",
                'type':"text",
                'class':"form-popup__title"
                

            })
        }