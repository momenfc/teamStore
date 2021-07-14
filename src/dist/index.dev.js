"use strict";

var _ErrorScreen = _interopRequireDefault(
  require("./screens/ErrorScreen404.js")
);

var _HomeScreen = _interopRequireDefault(require("./screens/HomeScreen.js"));

var _ProductScreen = _interopRequireDefault(
  require("./screens/ProductScreen.js")
);

var _ProductsScreen = _interopRequireDefault(
  require("./screens/ProductsScreen.js")
);

var _utilit = require("./utilit.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import axios from "../node_modules/axios";
var routes = {
  "/": _HomeScreen["default"],
  "/products": _ProductsScreen["default"],
  "/product/:id": _ProductScreen["default"],
};

var route = function route() {
  var request, parseUrl, screen, slider, main;
  return regeneratorRuntime.async(function route$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          request = (0, _utilit.parseRequestUrl)();
          parseUrl =
            (request.resorce ? "/".concat(request.resorce) : "/") +
            (request.id ? "/:id" : "") +
            (request.action ? "/".concat(request.action) : "");
          screen = routes[parseUrl]
            ? routes[parseUrl]
            : _ErrorScreen["default"];
          slider = document.querySelector(".slider");

          if (screen != _HomeScreen["default"]) {
            slider.style.display = "none";
          } else {
            slider.style.display = "flex";
          }

          (0, _utilit.resetEle)();
          main = document.getElementById("main");
          _context.next = 9;
          return regeneratorRuntime.awrap(screen.render());

        case 9:
          main.innerHTML = _context.sent;
          screen.after_render();

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}; // window.addEventListener("load", route);
// window.addEventListener("hashchange", route);
