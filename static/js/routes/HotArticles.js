import $ from "../utils/jquery.js";
import Router from "../router.js";

class HotArticles {
  constructor() {
    this.render = this.render.bind(this);
    this.state = { articles: [] };
    this.setState = this.setState.bind(this);
    this.getArticles();
    console.log(localStorage.getItem("hotArticles"));
  }

  setState(newState) {
    this.state = Object.assign({}, this.state, newState);
    const r = new Router();
    r.renderRoot(this.render());
  }

  getArticles() {
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
        this.setState({ articles: edges });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  render() {
    const div = document.createElement("div");
    const { articles } = this.state;
    div.innerText = `"HotArticles" ${articles}`;
    return div;
  }
}
export default HotArticles;
