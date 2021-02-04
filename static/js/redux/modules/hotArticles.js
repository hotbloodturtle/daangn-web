import { setStore } from "../store.js";

let changeListeners = [];

export const subscribe = (callback) => {
  changeListeners.push(callback);
};

const publish = () => {
  changeListeners.forEach((changeListener) => changeListener());
};

export const getHotArticles = () => {
  const gql = JSON.stringify({
    query: `{ articles { edges { node{
                      id title content address price favorite
                      chattingCount viewCount createdAt
                      }}}}`,
  });
  $.ajax({
    method: "post",
    url: "http://localhost:8001/graphql",
    data: gql,
    success: (data) => {
      const {
        data: {
          articles: { edges },
        },
      } = data;
      setStore({ hotArticles: edges });
      publish();
    },
    error: (err) => {
      console.log(err);
    },
  });
};
