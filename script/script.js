import catalogItems from "./modules/catalog-items.js";
import catalogItem from "./modules/catalog-item.js";
import search from "./modules/search.js";
import cart from "./modules/cart.js";
import cartItem from "./modules/cart-item.js";
import error from "./modules/error.js";

const app = new Vue({
  el: "#root",
  data: {
    search: "",
    cart: [],
    showFilter: false,
    isVisibleCart: true,
    message: "",
  },
  methods: {
    showFilterOptions() {
      this.showFilter = true;
    },

    hideFilterOptions() {
      this.showFilter = false;
    },

    clearFilteredItems() {
      this.filteredItems = this.items;
    },

    showCart() {
      this.isVisibleCart = true;
    },

    filterItems(search) {
      this.search = search;
    },

    addToCart(item) {
      const product = {
        id: item.id,
        quantity: 1,
        price: item.price,
        name: item.name,
      };

      fetch("/addToCart", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify(product),
      });

      const existingItem = this.cart.find((el) => el.id == item.id);

      if (existingItem === undefined) {
        this.cart.push(product);
      } else {
        existingItem.quantity++;
      }
    },

    removeFromCart(item) {
      const product = {
        id: item.id,
        quantity: 1,
        price: item.price,
        name: item.name,
      };

      fetch("/removeFromCart", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify(product),
      });

      const existingItem = this.cart.find((el) => el.id == item.id);

      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        const itemToRemove = this.cart.findIndex(
          (product) => product.id === item.id
        );
        this.cart.splice(itemToRemove, 1);
      }
    },
  },

  mounted() {
    fetch("/cart", {
      method: "GET",
    })
      .then((response) =>
        response.json().then((items) => {
          this.cart = items;
        })
      )
      .catch((response) => {
        response.json().then((error) => (this.message = error.errorMessage));
      });
  },
});
