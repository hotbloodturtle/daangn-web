import Home from "./routes/Home.js";
import HotArticles from "./routes/HotArticles.js";
import Header from "./common/Header.js";

export const routes = {
  "/": Home,
  "/hot-articles": HotArticles,
};

class Router {
  constructor() {
    this.clearRoot = this.clearRoot.bind(this);
    this.to = this.to.bind(this);
    this.root = document.getElementById("root");
  }
  clearRoot() {
    while (this.root.firstChild) {
      this.root.removeChild(this.root.firstChild);
    }
  }
  to(pathName, data, title = "") {
    window.history.pushState(data, title, pathName);
    this.setRender(pathName);
  }
  setRender = (pathName) => {
    const Component = routes[pathName];
    const obj = new Component(this.root);
    if (obj.hasOwnProperty("render")) {
      this.clearRoot();
      obj.render();
    }
  };
}

export default Router;
