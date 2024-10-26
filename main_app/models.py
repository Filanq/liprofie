from django.db import models
from django.conf import settings

class Attraction(models.Model):
    title = models.CharField('Название достопримечательности', max_length=255)
    full_text = models.TextField('Текст достопримечательности')
    img1 = models.ImageField(upload_to='img')
    img2 = models.ImageField(upload_to='img')

    def __str__(self):
        return f'Достопримечательность "{self.title}"'
    
    class Meta:
        verbose_name = 'Достопримечательность'
        verbose_name_plural = 'Достопримечательности'
        
 
class Mark(models.Model):
    mark = models.FloatField()
    num_marks = models.IntegerField()
 
    def __str__(self):
        return f'{self.mark}'
    
    class Meta:
        verbose_name = 'Оценка'
        verbose_name_plural = 'Оценки'
        

class Comment(models.Model):
    name = models.CharField(max_length=250)
    email = models.EmailField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    page_pk = models.CharField(max_length=10)
 
    def __str__(self):
        return f'Комментарий от {self.name}'
    
    class Meta:
        verbose_name = 'Комментарий'
        verbose_name_plural = 'Комментарии'