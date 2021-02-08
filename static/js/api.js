import axios from "./utils/axios.js";

const api = axios.create({ baseUrl: "http://localhost:8001/graphql" });

export const getHotArticles = () => {
  const gql = JSON.stringify({
    query: `{ articles { edges { node{
                          id title content address price favorite
                          chattingCount viewCount createdAt
                          }}}}`,
  });
  return api.post("", gql);
};
