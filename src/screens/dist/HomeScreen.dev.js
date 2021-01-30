"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var HomeScreen = {
  after_render: function after_render() {
    var time = 8000;
    var images = ["img-slide-1.jpg", "img-slide-2.jpg", "img-slide-3.jpg", "img-slide-4.jpg", "img-slide-5.jpg"];
    var i = 0;
    var sliderImg = document.querySelector(".slider__img-box");
    var slideLeftBtn = document.getElementById("arr-left"),
        slideRightBtn = document.getElementById("arr-right");
    slideRightBtn.addEventListener("click", function () {
      i++;

      if (i > images.length - 1) {
        i = 0;
      }

      sliderImg.style.backgroundImage = "url(../../../images/".concat(images[i], ")");
    });
    slideLeftBtn.addEventListener("click", function () {
      i--;

      if (i < 0) {
        i = images.length - 1;
      }

      sliderImg.style.backgroundImage = "url(../../../images/".concat(images[i], ")");
    });
    setInterval(function () {
      slideRightBtn.click();
    }, time);
  },
  render: function render() {
    var respons, resData, products;
    return regeneratorRuntime.async(function render$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch("https://fakestoreapi.com/products", {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
            }));

          case 2:
            respons = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(respons.json());

          case 5:
            resData = _context.sent;
            products = resData;

            if (products) {
              document.querySelector(".spinner-overlay").style.display = "none";
            }

            return _context.abrupt("return", "\n      <div class=\"container\">\n        <div class=\"products\">\n          ".concat(products.map(function (product) {
              return "\n          <div class=\"product\">\n            <a href=\"/#/product/".concat(product.id, "\" class=\"product__img-link\">\n              <img\n                src=\"").concat(product.image, "\"\n                alt=\"").concat(product.title, "\"\n                class=\"product__img\"\n              />\n            </a>\n            <a href=\"/#/product/").concat(product.id, "\" class=\"heading-4 product__name\"\n              >").concat(product.title, "</a\n            >\n            <div class=\"product__price\">$").concat(product.price, "</div>\n        </div>\n          ");
            }).join("\n"), "\n        </div>\n      </div>\n    "));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
var _default = HomeScreen;
exports["default"] = _default;