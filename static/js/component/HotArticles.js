import { getStore } from "../redux/store.js";
import { subscribe } from "../redux/pubsub.js";
import { HOT_ARTICLE_LIST } from "../redux/actions/articles.actions.js";

class HotArticles {
  constructor() {
    this.className = "hot-articles";
    this.render = this.render.bind(this);
    this.draw = this.draw.bind(this);

    subscribe(HOT_ARTICLE_LIST, this.draw);
  }
  render() {
    const { hotArticles } = getStore();

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
