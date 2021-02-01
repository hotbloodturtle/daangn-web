import Router from "../router.js";
import { getStore } from "../state/store.js";
import { getHotArticles } from "../state/modules/hotArticles.js";
import { subscribe } from "../state/modules/hotArticles.js";

class HotArticles {
  constructor(parentNode) {
    this.parentNode = parentNode;
    this.render = this.render.bind(this);
    this.state = { articles: [] };
    this.setState = this.setState.bind(this);

    getHotArticles();
    subscribe(this.render);
  }

  setState(newState) {
    this.state = Object.assign({}, this.state, newState);
    const r = new Router();
    r.renderRoot(this.render());
  }

  render() {
    const { hotArticles } = getStore();

    const div = document.createElement("div");
    div.innerText = hotArticles ? `"HotArticles" ${hotArticles}` : "loading...";

    while (this.parentNode.firstChild) {
      this.parentNode.removeChild(this.parentNode.firstChild);
    }
    this.parentNode.appendChild(div);
  }
}
export default HotArticles;
