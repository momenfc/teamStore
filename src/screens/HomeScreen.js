import { hideLoading, showLoading } from "../utilit.js";

const HomeScreen = {
  after_render: () => {
    const time = 6000;
    const images = [
      "img-slide-1.jpg",
      "img-slide-2.jpg",
      "img-slide-3.jpg",
      "img-slide-4.jpg",
      "img-slide-5.jpg",
    ];
    let i = 0;
    const sliderImg = document.querySelector(".slider__img-box"),
      slideLeftBtn = document.getElementById("arr-left"),
      slideRightBtn = document.getElementById("arr-right");

    slideRightBtn.addEventListener("click", () => {
      i++;
      if (i > images.length - 1) {
        i = 0;
      }
      sliderImg.style.backgroundImage = `url(../../../images/${images[i]})`;
    });

    slideLeftBtn.addEventListener("click", () => {
      i--;
      if (i < 0) {
        i = images.length - 1;
      }
      sliderImg.style.backgroundImage = `url(../../../images/${images[i]})`;
    });
    setInterval(() => {
      slideRightBtn.click();
    }, time);
  },
  render: async () => {
    showLoading();
    const respons = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resData = await respons.json();
    const products = resData;
    hideLoading();

    return `
      <div class="container">
        <div class="products">
          ${products
            .map(
              (product) => `
          <div class="product">
            <a href="/#/product/${product.id}" class="product__img-link">
              <img
                src="${product.image}"
                alt="${product.title}"
                class="product__img"
              />
            </a>
            <a href="/#/product/${product.id}" class="heading-4 product__name"
              >${product.title}</a
            >
            <div class="product__price">$${product.price}</div>
        </div>
          `
            )
            .join("\n")}
        </div>
      </div>
    `;
  },
};

export default HomeScreen;
