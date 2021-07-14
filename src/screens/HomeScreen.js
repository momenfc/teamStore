import { hideLoading, showLoading } from "../utilit.js";

const HomeScreen = {
  after_render: () => {},
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
      <h2 class="heading-2 center">all products</h2>
      <div class="underline"></div>
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
