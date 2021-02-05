import { getHotArticles } from "../apis/articles.apis.js";
import { articlesReducer } from "../reducers/articles.reducers.js";
import { publish } from "../pubsub.js";

export const HOT_ARTICLE_LIST = "HOT_ARTICLE_LIST";

export const test = {
  HOT_ARTICLE_LIST: HOT_ARTICLE_LIST,
};

export const hotArticlesAction = () => {
  const dispatch = (hotArticles) => {
    articlesReducer({ type: HOT_ARTICLE_LIST, payload: { hotArticles } });
    publish(HOT_ARTICLE_LIST);
  };
  getHotArticles(dispatch);
};
