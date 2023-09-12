from .views import ArticleViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path, include

router = DefaultRouter()
router.register(r'articles', ArticleViewSet, basename='articles')
urlpatterns = [
    path('',include(router.urls)),
    ] 