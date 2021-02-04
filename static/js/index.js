import App from "./App.js";

const app = new App();

window.addEventListener("DOMContentLoaded", () => {
  app.init();
});
window.onpopstate = () => {
  app.init();
};
