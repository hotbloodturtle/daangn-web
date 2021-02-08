import PageHome from "./pages/PageHome.js";
import PageHotArticles from "./pages/PageHotArticles.js";
import App from "./App.js";

class Router {
  constructor() {
    this.routes = {
      "/": PageHome,
      "/hot-articles": PageHotArticles,
    };
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
