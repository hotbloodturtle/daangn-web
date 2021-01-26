import graphene

from articles.gql.schema import ArticlesQueries, ArticlesMutations


class Query(ArticlesQueries):
    pass


class Mutation(ArticlesMutations):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)