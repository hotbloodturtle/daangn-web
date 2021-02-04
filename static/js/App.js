import Header from "./common/Header.js";
import Router from "./router.js";

class App {
  constructor() {}
  init() {
    this.render();
  }
  render() {
    const root = document.getElementById("root");

    while (root.firstChild) {
      root.removeChild(root.lastChild);
    }

    const header = new Header();
    root.appendChild(header.render());

    const router = new Router();
    const Component = router.getRouteComponent(window.location.pathname);
    const section = new Component().render();

    root.appendChild(section);
  }
}

export default App;
