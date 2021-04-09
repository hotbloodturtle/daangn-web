import setStyle from "../utils/setStyle.js";

const css = `
    .search-icon {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        border: none;
        background-color: transparent;
    }
    .search-icon__img {
        width: 19px;
        height: 19px;
    }
`;
setStyle(css);

class IconSearch {
  render() {
    const btn = document.createElement("button");
    btn.classList.add("search-icon");
    const img = document.createElement("img");
    img.classList.add("search-icon__img");
    img.alt = "Search";
    img.src =
      "https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/search-icon-7008edd4f9aaa32188f55e65258f1c1905d7a9d1a3ca2a07ae809b5535380f14.svg";

    btn.appendChild(img);
    return btn;
  }
}

export default IconSearch;
