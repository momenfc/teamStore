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
  // slidShow,
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
  const main = document.getElementById("main");
  main.innerHTML = await screen.render();
  screen.after_render();
  setCartBtnNavi();
  hideLoading();
};

window.addEventListener("load", route);
window.addEventListener("hashchange", route);
menuToggle();

// SLIDER FUNCTIONS
const slides = document.querySelectorAll(".slider .box-img"),
  boxImgs = document.querySelector(".container-imgs"),
  btnPrev = document.querySelector(".prev-slide"),
  btnNext = document.querySelector(".next-slide"),
  bultsBox = document.querySelector(".ctrl-bults");

//
let currentSlide = 0;

const initSlide = function () {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
  });
};

function goNext() {
  if (currentSlide === slides.length - 1) currentSlide = 0;
  else currentSlide++;

  init();
}
btnNext.addEventListener("click", goNext);

btnPrev.addEventListener("click", function () {
  if (currentSlide === 0) currentSlide = slides.length - 1;
  else currentSlide--;

  init();
});

const createBults = function (slides) {
  bultsBox.innerHTML = "";
  slides.forEach((_, i) => {
    bultsBox.insertAdjacentHTML(
      "beforeend",
      `<span class="" data-slide="${i}"><i class="dot far ${
        i === currentSlide ? "fa-dot-circle active-dot" : "fa-circle"
      }"></i></span>`
    );
  });
};

bultsBox.addEventListener("click", function (e) {
  if (e.target.classList.contains("dot")) {
    const btn = e.target.closest("span");
    currentSlide = +btn.dataset.slide;
  }
  init();
});

const init = function () {
  initSlide();
  createBults(slides);
};
init();

const autoSlide = setInterval(goNext, 7000);
