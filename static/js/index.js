import Router from "./router.js";

window.addEventListener("DOMContentLoaded", function () {
  const router = new Router();
  router.setRender(window.location.pathname);

  window.onpopstate = function () {
    router.setRender(window.location.pathname);
  };
});
