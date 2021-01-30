const ProductsScreen = {
  after_render: () => {},
  render: async () => {
    const respons = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resData = await respons.json();
    const products = resData;
    if (products) {
      // document.querySelector(".spinner-overlay").style.display = "none";
    }

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

export default ProductsScreen;
