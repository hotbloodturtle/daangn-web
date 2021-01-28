import Home from "./routes/Home.js";
import HotArticles from "./routes/HotArticles.js";

const routes = {
  "/": Home,
  "/hot-articles": HotArticles,
};

class Router {
  constructor() {
    this.renderRoot = this.renderRoot.bind(this);
    this.setPushState = this.setPushState.bind(this);
  }
  renderRoot(pathName) {
    var Component = routes[pathName];
    if (!Component) {
      window.location.href = "/";
    }
    var obj = new Component();
    if (obj.hasOwnProperty("render")) {
      var root = document.getElementById("root");
      while (root.firstChild) {
        root.removeChild(root.firstChild);
      }
      root.appendChild(obj.render());
    }
  }
  setPushState(data = {}, title = "", pathName = "/") {
    window.history.pushState(data, title, pathName);
    this.renderRoot(pathName);
  }
}

export default Router;
