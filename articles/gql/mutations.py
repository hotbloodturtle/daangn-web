import graphene
from graphql_relay import from_global_id

from ..models import Article
from .types import ArticleType


class ArticleInput(graphene.InputObjectType):
    title = graphene.String(required=True)
    content = graphene.String()
    price = graphene.Decimal()


class CreateArticleMutation(graphene.Mutation):
    class Arguments:
        input = ArticleInput(required=True)

    article = graphene.Field(ArticleType)

    def mutate(self, info, input=None):
        article = Article()
        for k, v in input.items():
            setattr(article, k, v)
        article.user = info.context.user
        article.save()
        return CreateArticleMutation(article=article)


class UpdateArticleMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        input = ArticleInput(required=True)

    article = graphene.Field(ArticleType)

    def mutate(self, info, id, input=None):
        article = Article.objects.get(id=from_global_id(id)[1])
        for k, v in input.items():
            setattr(article, k, v)
        article.save()
        return UpdateArticleMutation(article=article)
