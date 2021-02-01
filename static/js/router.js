import Home from "./routes/Home.js";
import HotArticles from "./routes/HotArticles.js";
import Header from "./common/Header.js";

export const routes = {
  "/": Home,
  "/hot-articles": HotArticles,
};

class Router {
  constructor() {
    this.renderRoot = this.renderRoot.bind(this);
    this.setPushState = this.setPushState.bind(this);
    this.to = this.to.bind(this);
  }
  renderRoot(el) {
    if (!el) {
      window.location.href = "/";
      return;
    }

    const root = document.getElementById("root");
    while (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    const header = new Header().render();
    root.appendChild(header);
    root.appendChild(el);
  }
  setPushState(data = {}, title = "", pathName = "/") {
    window.history.pushState(data, title, pathName);

    const Component = routes[pathName];
    const obj = new Component();
    if (obj.hasOwnPropert("render")) {
      this.renderRoot(obj.render());
    }
  }
  to(pathName, data = {}, title = "") {
    window.history.pushState(data, title, pathName);
    this.setRender(pathName);
  }
  setRender = (pathName) => {
    const Component = routes[pathName];
    const obj = new Component();
    if (obj.hasOwnProperty("render")) {
      this.renderRoot(obj.render());
    }
  };
}

export default Router;
