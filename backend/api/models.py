from django.db  import models
from django.utils import timezone
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _

class Article(models.Model):
    title       = models.CharField(max_length=255, verbose_name=_("عنوان"))
    description = models.TextField(blank=True, null=True, verbose_name=_("توضیحات"))
    content     = models.TextField(blank=True, null=True, verbose_name=_("محتوا"))
    slug        = models.SlugField(max_length=255, unique=True, default='', help_text=("آدرس slug"),verbose_name=_("نامک")) 
    # author    = models.ForeignKey(get_user_model(), verbose_name=_("نویسنده"), on_delete=models.CASCADE)
    created_at  = models.DateTimeField(auto_now_add=True, verbose_name=_("تاریخ انتشار"))
    updated_at  = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
