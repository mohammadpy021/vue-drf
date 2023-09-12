from django.shortcuts import get_object_or_404
from .serializers import ArticleSerializer
from .models import Article
from rest_framework import viewsets, generics
from rest_framework.decorators import action
from rest_framework.response import Response
class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_field = "slug"  #find by slug instead of ID

    @action(detail=False, methods=['GET'],name="get_detial", url_path=r'id/(?P<pk>\w+)') #custom root for getting post by id
    def get_article(self, request, pk=None):
        queryset = self.queryset.filter(pk = pk )
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)