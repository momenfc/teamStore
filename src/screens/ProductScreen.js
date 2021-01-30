import { parseRequestUrl } from "../utilit.js";

const ProductScreen = {
  after_render: () => {
    const request = parseRequestUrl();
    document.getElementById("addToCart-btn").addEventListener("click", () => {
      window.location.hash = `/cart/${request.id}`;
    });
  },
  render: async () => {
    const request = parseRequestUrl();
    const respone = await fetch(
      `https://fakestoreapi.com/products/${request.id}`
    );
    const resData = await respone.json();
    const product = resData;
    return `
      <div class="container">
          <div class="product ">
            <div class="product__img-box">
              <img
                src="${product.image}"
                alt="${product.title}"
                class="product__img"
              />
            </div>
            <div class="product__details">
              <p class="product__category">${product.category}</p>
              <h2 class="heading-2">
              ${product.title}
              </h2>
              <p class="product__price">$${product.price}</p>
              <p class="product__description">
              ${product.description}
              </p>
              <button id="addToCart-btn" class="primary-btn">add to cart</button>
            </div>
          </div>    
        </div>`;
  },
};

export default ProductScreen;
