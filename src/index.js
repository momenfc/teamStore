import CartScreen from "./screens/CartScreen.js";
import ErrorScreen404 from "./screens/ErrorScreen404.js";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import ProductsScreen from "./screens/ProductsScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import Sign_inScreen from "./screens/Sign_inScreen.js";
import {
  hideLoading,
  menuToggle,
  parseRequestUrl,
  slidShow,
  setCartBtnNavi,
  showLoading,
} from "./utilit.js";
// import axios from "../node_modules/axios";

const routes = {
  "/": HomeScreen,
  "/products": ProductsScreen,
  "/product/:id": ProductScreen,
  "/cart": CartScreen,
  "/cart/:id": CartScreen,
  "/signin": Sign_inScreen,
  "/register": RegisterScreen,
};

const route = async () => {
  showLoading();
  const request = parseRequestUrl();
  const parseUrl =
    (request.resorce ? `/${request.resorce}` : "/") +
    (request.id ? "/:id" : "") +
    (request.action ? `/${request.action}` : "");
  const screen = routes[parseUrl] ? routes[parseUrl] : ErrorScreen404;
  slidShow();
  // const slider = document.querySelector(".slider");
  // if (screen != HomeScreen) {
  //   slider.style.display = "none";
  // } else {
  //   slider.style.display = "flex";
  // }
  // resetEle();
  const main = document.getElementById("main");
  main.innerHTML = await screen.render();
  screen.after_render();
  setCartBtnNavi();
  hideLoading();
};

window.addEventListener("load", route);
window.addEventListener("hashchange", route);
menuToggle();
