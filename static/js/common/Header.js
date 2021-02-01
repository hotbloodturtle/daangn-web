class Header {
  constructor() {}

  render() {
    const headerWrap = document.createElement("div");
    headerWrap.classList.add("header-wrap");

    const headerCon = document.createElement("div");
    headerWrap.appendChild(headerCon);
    headerCon.classList.add("header-container");

    const rightCon = document.createElement("div");
    headerCon.appendChild(rightCon);
    rightCon.classList.add("right-container");

    const imageAnchor = document.createElement("a");
    rightCon.appendChild(imageAnchor);
    imageAnchor.href = "https://www.daangn.com";
    const logoImage = document.createElement("img");
    logoImage.src =
      "https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg";
    logoImage.alt = "당근마켓";
    imageAnchor.appendChild(logoImage);

    const searchArea = document.createElement("div");
    rightCon.appendChild(searchArea);
    searchArea.classList.add("search-area");
    const searchInput = document.createElement("input");
    searchArea.appendChild(searchInput);
    searchInput.classList.add("search-input");
    searchInput.type = "text";
    searchInput.placeholder = "동네 이름, 물품명 등을 검색해보세요!";

    return headerWrap;
  }
}

export default Header;
