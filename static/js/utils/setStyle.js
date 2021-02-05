const setStyle = (cssText) => {
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  head.appendChild(style);
  style.appendChild(document.createTextNode(cssText));
};

export default setStyle;
