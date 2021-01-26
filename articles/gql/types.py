import graphene
from graphene import relay
from graphene_django import DjangoObjectType

from ..models import Article
from .filters import ArticleFilter


class ArticleType(DjangoObjectType):
    class Meta:
        model = Article
        filterset_class = ArticleFilter
        interfaces = (relay.Node,)
        connection_class = graphene.Connection
        fields = '__all__'

    price = graphene.String()

    def resolve_price(self, info):
        return self.price if self.price else '가격없음'