import Router from "../router.js";

class Home {
  constructor() {
    this.render = this.render.bind(this);
  }

  render() {
    var div = document.createElement("div");
    div.innerText = "Home";

    var btn = document.createElement("button");
    btn.innerText = "버튼";
    btn.addEventListener("click", function () {
      const router = new Router();
      router.setPushState({}, "핫아티클", "/hot-articles");
    });
    div.appendChild(btn);
    return div;
  }
}
export default Home;
