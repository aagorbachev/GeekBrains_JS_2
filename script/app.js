import catalogItems from "./components/catalog/catalog-items.js";
import catalogItem from "./components/catalog/catalog-item.js";
import search from "./components/search.js";
import cart from "./components/cart/cart.js";
import cartItem from "./components/cart/cart-item.js";
import shipping from "./components/cart/shipping.js";
import total from "./components/cart/total.js";
import error from "./components/error.js";
import message from "./components/message.js";
import headerSection from "./components/header/header.js";
import indexHeader from "./components/header/indexHeader.js";
import navMenu from "./components/menu/menu.js";

const app = new Vue({
  // components: {
  //   catalogItems,
  //   catalogItem,
  //   search,
  //   cart,
  //   cartItem,
  //   shipping,
  //   total,
  //   error,
  //   message,
  //   headerSection,
  //   indexHeader,
  //   navMenu,
  // },
  el: "#root",
  data: {
    menuShowed: false,
    search: "",
    cart: [],
    showFilter: false,
    isVisibleCart: true,
    message: "",
  },
  methods: {
    toggleMenu() {
      this.menuShowed = !this.menuShowed;
    },
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

export default app;
