import store from "../store.js";
import { HOT_ARTICLE_LIST } from "../actions/articles.actions.js";

export const articlesReducer = (action) => {
  switch (action.type) {
    case HOT_ARTICLE_LIST:
      store.setStore(action.payload);
      store.publish(action.type);
  }
};
