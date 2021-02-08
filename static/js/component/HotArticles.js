import store from "../redux/store.js";
import { HOT_ARTICLE_LIST } from "../redux/actions/articles.actions.js";

class HotArticles {
  constructor() {
    this.className = "hot-articles";
    store.subscribe(HOT_ARTICLE_LIST, this.draw.bind(this));
  }
  render() {
    const { hotArticles } = store.getStore();

    const node = document.createElement("div");
    node.classList.add(this.className);
    node.innerText = "hot articles component";
    node.innerText = hotArticles
      ? `"HotArticles" ${hotArticles}`
      : "loading...";
    return node;
  }

  draw() {
    const newNode = this.render();
    const nodes = document.querySelectorAll(`.${this.className}`);
    nodes.forEach((item) => {
      item.outerHTML = newNode.outerHTML;
    });
  }
}

export default HotArticles;
