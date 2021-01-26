import graphene
from graphene import relay
from graphene_django.filter import DjangoFilterConnectionField

from .mutations import CreateArticleMutation, UpdateArticleMutation
from .types import ArticleType


class ArticlesQueries(graphene.ObjectType):
    article = relay.Node.Field(ArticleType)
    articles = DjangoFilterConnectionField(ArticleType)


class ArticlesMutations(graphene.ObjectType):
    create_article = CreateArticleMutation.Field()
    update_article = UpdateArticleMutation.Field()
