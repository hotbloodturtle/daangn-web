class HotArticles {
  constructor() {
    this.render = this.render.bind(this);
  }

  render() {
    var div = document.createElement("div");
    div.innerText = "HotArticles";
    return div;
  }
}
export default HotArticles;
