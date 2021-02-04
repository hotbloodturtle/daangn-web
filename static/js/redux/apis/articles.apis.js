export const getHotArticles = (dispatch) => {
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
      dispatch(edges);
    },
    error: (err) => {
      console.log(err);
    },
  });
};
