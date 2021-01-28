import $ from "./utils/jquery.js";
import Router from "./router.js";

// window.addEventListener("DOMContentLoaded", function () {
//   var test = "hi";
//   console.log(test);
//   var gql = JSON.stringify({
//     query: `{ articles { edges { node{
//                 id title content address price favorite
//                 chattingCount viewCount createdAt
//                 }}}}`,
//   });
//   $.ajax({
//     method: "post",
//     url: "http://localhost:8001/graphql",
//     data: gql,
//     success: function (data) {
//       console.log(data);
//     },
//     error: function (err) {
//       console.log(err);
//     },
//   });
// });

window.addEventListener("DOMContentLoaded", function () {
  const router = new Router();
  router.renderRoot(window.location.pathname);

  window.onpopstate = function () {
    console.log("onpop");
    router.renderRoot(window.location.pathname);
  };
});

// console.log(routes);

// history.pushState({}, "index", "/");

// window.onload = function () {
//   history.pushState({}, "list", "/list");
// };

// window.onpopstate = function (e) {
//   console.log(e);
// };
