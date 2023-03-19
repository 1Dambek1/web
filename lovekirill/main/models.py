from django.db import models

class Tovar(models.Model):
    title = models.CharField('Название', max_length=50)  
    infa = models.TextField('Инфа')


    def __str__(self):
        return self.title
    

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'