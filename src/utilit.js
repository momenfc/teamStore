import { getCartItems } from "./localStorage.js";

export const parseRequestUrl = () => {
  const url = window.location.hash.toLowerCase();
  const request = url.split("/");
  return {
    resorce: request[1],
    id: request[2],
    action: request[3],
  };
};

export const rerender = async (component) => {
  showLoading();
  document.getElementById("main").innerHTML = await component.render();
  await component.after_render();
  hideLoading();
};

export const setCartBtnNavi = () => {
  document.querySelector(".cart-btn__navigation").innerHTML =
    getCartItems().length;
};

export const showLoading = () => {
  document.getElementById("loading-overlay").classList.add("active");
};

export const hideLoading = () => {
  document.getElementById("loading-overlay").classList.remove("active");
};

export const menuToggle = () => {
  // EVENT LESTENER TO MENU BUTTON
  const menuToggle = document.getElementById("menu-toggle");
  menuToggle.addEventListener("click", () => {
    document.querySelector(".nav").classList.toggle("active");
    document.querySelector(".menu-toggle span").classList.toggle("close");
  });
  // EVENT LESTENER TO NAV
  document.querySelector(".nav").addEventListener("click", (e) => {
    if (e.target.classList.contains("nav__link")) {
      document.querySelector(".nav").classList.remove("active");
      document.querySelector(".menu-toggle span").classList.remove("close");
    }
  });
};
