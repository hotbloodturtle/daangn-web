import { getStore } from "../state/store.js";
import { getHotArticles, subscribe } from "../state/modules/hotArticles.js";

class HotArticles {
  constructor() {
    this.className = "hot-articles";
    this.render = this.render.bind(this);
    this.draw = this.draw.bind(this);

    getHotArticles();
    subscribe(this.draw);
  }

  render() {
    const { hotArticles } = getStore();

    const node = document.createElement("div");
    node.classList.add(this.className);
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
