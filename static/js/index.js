import Router from "./router.js";

window.addEventListener("DOMContentLoaded", () => {
  const router = new Router();
  router.setRender(window.location.pathname);

  window.onpopstate = (e) => {
    router.setRender(window.location.pathname);
  };
});
