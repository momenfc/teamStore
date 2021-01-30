import { getProduct } from "../api.js";
import { getCartItems, setCartItems } from "../localStorage.js";
import { parseRequestUrl, rerender } from "../utilit.js";

const addToCart = async (item, forceUpdata = false) => {
  let cartItems = getCartItems();
  const existItem = cartItems.find((x) => x.product === item.product);
  if (existItem) {
    if (forceUpdata) {
      cartItems = cartItems.map((x) => (x.product === item.product ? item : x));
    }
  } else {
    cartItems = [...cartItems, item];
  }
  setCartItems(cartItems);
  if (forceUpdata) {
    rerender(CartScreen);
  }
};

const removeFromCart = (id) => {
  setCartItems(getCartItems().filter((x) => x.product != id));
  if (parseRequestUrl().id == id) {
    window.location.hash = "/cart";
  } else {
    rerender(CartScreen);
  }
};

const CartScreen = {
  ///////////////////
  after_render: () => {
    // CHANGE QTY EVENT LESTENER
    const qtySlects = document.getElementsByClassName("cart__qty__select");
    Array.from(qtySlects).forEach((qtySelect) => {
      qtySelect.addEventListener("change", (e) => {
        const item = getCartItems().find((x) => x.product == qtySelect.id);
        addToCart({ ...item, qty: Number(e.target.value) }, true);
      });
    });
    // ADD EVENT LESTENER TO DELETE BUTTON
    const deleteBtns = document.getElementsByClassName("cart__delete-btn");
    Array.from(deleteBtns).forEach((deleteBtn) =>
      deleteBtn.addEventListener("click", () => {
        removeFromCart(deleteBtn.id);
      })
    );

    // ADD EVENT LESTENER TO CHECKOUT BUTTON
    document.getElementById("checkout-btn").addEventListener("click", () => {
      window.location.hash = "/signin";
    });
  },
  ///////////////////
  render: async () => {
    const request = parseRequestUrl();
    if (request.id) {
      const product = await getProduct(request.id);
      addToCart({
        product: product.id,
        title: product.title,
        price: product.price,
        categoray: product.categoray,
        image: product.image,
        qty: 1,
      });
    }
    return `
    <div class="container">
    <div class="cart">
      <ul class="cart__content">
        <li class="cart__item cart__header">
          <h4 class="heading-3">shopping cart</h4>
          <p class="cart__header__price">price</p>
        </li>
        ${
          getCartItems().length === 0
            ? `<p class="cart__text--empty">cart is empty <a href="/#/products">go shopping &rarr;</a></p>`
            : getCartItems()
                .map(
                  (item) => `
      <li class="cart__item">
      <div class="cart__img-box">
        <img
          src="${item.image}"
          alt="${item.title}"
          class="cart__img"
        />
      </div>
      <div class="cart__info">
        <a href="/#/product/${item.product}" class="cart__link"
          >${item.title}</a
        >
        <p class="cart__price">$${item.price}</p>

        <div class="cart__qty">
          qty:
          <select class="cart__qty__select" name="qty" id="${item.product}">
            ${[...Array(8).keys()].map((x) =>
              item.qty === x + 1
                ? `<option selected value="${x + 1}">${x + 1}</option>`
                : `<option value="${x + 1}">${x + 1}</option>`
            )}
          </select>
        </div>
        <button class="cart__delete-btn" id="${item.product}">delete</button>
      </div>
    </li>
      `
                )
                .join("\n")
        }
      </ul>
      <div class="cart__checkout">
        <h4 class="heading-3">subtotal (${getCartItems().reduce(
          (a, c) => a + c.qty,
          0
        )} items) : $${getCartItems()
      .reduce((a, c) => a + c.price * c.qty, 0)
      .toFixed(2)}</h4>
        <button class="primary-btn" id="checkout-btn">proceed to checkout</button>
      </div>
    </div>
  </div>
    `;
  },
};

export default CartScreen;
