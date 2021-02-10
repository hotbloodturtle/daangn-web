import setStyle from "../utils/setStyle.js";

const css = `
  .btn-app-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 40px;
    border: solid 1px #e9ecef;
    border-radius: 5px;
    margin-left: 15px;
  }

  .btn-app-link .text-area {
      height: 18px;
      display: flex; 
      align-items: flex-end;
      margin-left: 10px;
  }
  .btn-app-link .text-area span {
      color: #495057;
      font-size: 14px;
      font-weight: 700;
  }
`;
setStyle(css);

class ButtonAppDownload {
  constructor(type = "appStore", textContent = "") {
    this.type = type;
    this.textContent = textContent;
    this.logo = {
      appStore:
        "https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/apple-store-3a664174124650d63cae365bc55586fc5ff27b822b1b97788fc4af77d73d00c8.svg",
      googlePlay:
        "https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/google-play-c9ad0fc573cd01e2b982df5de6709a3d8d7cec8d9b58a5c08db7da0b92a32a75.svg",
    };
  }

  render() {
    const anchor = document.createElement("a");
    anchor.classList.add("btn-app-link");

    const logoImg = document.createElement("img");
    anchor.appendChild(logoImg);
    logoImg.src = this.logo[this.type];

    const textArea = document.createElement("div");
    anchor.appendChild(textArea);
    textArea.classList.add("text-area");
    const text = document.createElement("span");
    textArea.appendChild(text);
    text.textContent = this.textContent;

    return anchor;
  }
}

export default ButtonAppDownload;
