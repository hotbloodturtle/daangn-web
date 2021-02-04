import ConHotArticles from "../containers/ConHotArticles.js";

class PageHotArticles {
  constructor() {}

  render() {
    const node = document.createElement("div");

    const conHotArticles = new ConHotArticles().render();
    node.appendChild(conHotArticles);

    return node;
  }
}
export default PageHotArticles;
