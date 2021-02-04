import Home from "./routes/Home.js";
import HotArticles from "./routes/HotArticles.js";
import App from "./App.js";

class Router {
  constructor() {
    this.routes = {
      "/": Home,
      "/hot-articles": HotArticles,
    };
    this.to = this.to.bind(this);
    this.root = document.getElementById("root");
  }

  getRouteComponent(pathName) {
    return this.routes[pathName];
  }

  to(pathName, data, title = "") {
    window.history.pushState(data, title, pathName);
    const app = new App();
    app.init();
  }
}

export default Router;
