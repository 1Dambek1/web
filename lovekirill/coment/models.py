from django.db import models


class Otz(models.Model):
    name = models.CharField('Название', max_length=50)  
    infa    = models.TextField('Инфа')


    def __str__(self):
        return self.name
    

    class Meta:
        verbose_name = 'отзыв'
        verbose_name_plural = 'отзывы'