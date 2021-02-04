import { getHotArticles } from "../apis/articles.apis.js";
import { articlesReducer } from "../reducers/articles.reducers.js";

export const HOT_ARTICLE_LIST = "HOT_ARTICLE_LIST";

let changeListeners = {
  HOT_ARTICLE_LIST: [],
};

export const subscribe = (type, dispatch) => {
  changeListeners[type].push(dispatch);
};

export const publish = (type) => {
  changeListeners[type].forEach((changeListener) => {
    changeListener();
  });
};

export const hotArticlesAction = () => {
  const dispatch = (hotArticles) => {
    articlesReducer({ type: HOT_ARTICLE_LIST, payload: { hotArticles } });
    publish(HOT_ARTICLE_LIST);
  };
  getHotArticles(dispatch);
};
