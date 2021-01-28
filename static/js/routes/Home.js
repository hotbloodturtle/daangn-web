import Router from "../router.js";

class Home {
  constructor() {
    this.render = this.render.bind(this);
  }

  render() {
    const div = document.createElement("div");
    div.innerText = "Home";

    const btn = document.createElement("button");
    btn.innerText = "버튼";
    btn.addEventListener("click", function () {
      const router = new Router();
      router.to("/hot-articles");
    });
    div.appendChild(btn);
    return div;
  }
}
export default Home;
