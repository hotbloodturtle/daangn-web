from django_filters import rest_framework as filters
from graphql_relay import from_global_id

from ..models import Article


class ArticleFilter(filters.FilterSet):
    class Meta:
        model = Article
        fields = {
            'price': ['lt', 'gt'],
        }

    title = filters.CharFilter(field_name='title', lookup_expr="icontains")
    user = filters.CharFilter(method='filter_user')

    def filter_user(self, queryset, name, value):
        return queryset.filter(user__id=from_global_id(value))
