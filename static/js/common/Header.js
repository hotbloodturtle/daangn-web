import ButtonAppDownload from "../component/ButtonAppDownload.js";
import setStyle from "../utils/setStyle.js";

const css = `
  .header-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .header-wrap .header-container {
    width: 80%;
    height: 70px;
    display: flex;
    justify-content: space-between;
  }
  .header-container .left-container {
    display: flex;
    height: inherit;
    align-items: center;
  }
  .header-container .search-area {
    border: 1px solid #e9ecef;
    margin-left: 35px;
    border-radius: 3px;
    height: 40px;
  }
  .header-container .search-area .search-input {
    border: none;
    font-size: 16px;
    color: #212529;
    background-color: transparent;
    width: 340px;
    height: inherit;
    padding-left: 15px;
  }
  .header-container .search-area .search-input::placeholder {
    color: #868e96;
    opacity: 0.5;
  }
  .header-container .search-area .search-input:focus {
    outline: none;
  }

  .header-container .right-container {
    display: flex;
    align-items: center;
  }
`;
setStyle(css);

class Header {
  constructor() {}

  render() {
    const headerWrap = document.createElement("div");
    headerWrap.classList.add("header-wrap");

    const headerCon = document.createElement("div");
    headerWrap.appendChild(headerCon);
    headerCon.classList.add("header-container");

    const leftCon = document.createElement("div");
    headerCon.appendChild(leftCon);
    leftCon.classList.add("left-container");

    const imageAnchor = document.createElement("a");
    leftCon.appendChild(imageAnchor);
    imageAnchor.href = "https://www.daangn.com";
    const logoImage = document.createElement("img");
    logoImage.src =
      "https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg";
    logoImage.alt = "당근마켓";
    imageAnchor.appendChild(logoImage);

    const searchArea = document.createElement("div");
    leftCon.appendChild(searchArea);
    searchArea.classList.add("search-area");
    const searchInput = document.createElement("input");
    searchArea.appendChild(searchInput);
    searchInput.classList.add("search-input");
    searchInput.type = "text";
    searchInput.placeholder = "동네 이름, 물품명 등을 검색해보세요!";

    const rightCon = document.createElement("div");
    headerCon.appendChild(rightCon);
    rightCon.classList.add("right-container");

    const anchorAppStore = new ButtonAppDownload(
      "appStore",
      "App Store"
    ).render();
    rightCon.appendChild(anchorAppStore);

    const anchorAndroid = new ButtonAppDownload(
      "googlePlay",
      "Google Play"
    ).render();
    rightCon.appendChild(anchorAndroid);

    return headerWrap;
  }
}

export default Header;
