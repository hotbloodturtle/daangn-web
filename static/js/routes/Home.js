import Router from "../router.js";

class Home {
  constructor(parentNode) {
    this.parentNode = parentNode;
    this.render = this.render.bind(this);
  }

  render() {
    const div = document.createElement("div");
    div.innerText = "Home";

    const btn = document.createElement("button");
    btn.innerText = "버튼";
    btn.addEventListener("click", () => {
      const router = new Router();
      router.to("/hot-articles");
    });
    div.appendChild(btn);
    this.parentNode.appendChild(div);
  }
}
export default Home;
