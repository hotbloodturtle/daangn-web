import Router from "../router.js";

class Home {
  constructor() {}

  render() {
    const node = document.createElement("div");
    node.innerText = "Home";

    const btn = document.createElement("button");
    btn.innerText = "버튼";
    btn.addEventListener("click", () => {
      const router = new Router();
      router.to("/hot-articles");
    });
    node.appendChild(btn);
    return node;
  }
}
export default Home;
