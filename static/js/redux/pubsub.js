import { HOT_ARTICLE_LIST } from "./actions/articles.actions.js";

let changeListeners = {};
changeListeners[HOT_ARTICLE_LIST] = [];

export const subscribe = (type, dispatch) => {
  changeListeners[type].push(dispatch);
};

export const publish = (type) => {
  changeListeners[type].forEach((changeListener) => {
    changeListener();
  });
};
