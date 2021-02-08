import { getHotArticles } from "../../api.js";
import { articlesReducer } from "../reducers/articles.reducers.js";

export const HOT_ARTICLE_LIST = "HOT_ARTICLE_LIST";

export const hotArticlesAction = () => {
  getHotArticles()
    .then((response) => JSON.parse(response))
    .then(
      ({
        data: {
          articles: { edges: hotArticles },
        },
      }) => {
        articlesReducer({ type: HOT_ARTICLE_LIST, payload: { hotArticles } });
      }
    );
};
