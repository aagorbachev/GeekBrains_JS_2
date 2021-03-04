export default Vue.component("cart", {
  template: `<section class="catalog__cart cart">
  <div class="cart__items">
  <cart-item v-for="product of cart" :key="product.id" :item="product">
  </cart-item>
</div>
<div class="cart__buttons">
<button class="cart__clear">Clear shopping cart</button>
<button class="cart__continue">Continue shopping</button>
</div>
 <error v-if="fetched == false" :errorMessage="error"></error>
</section>`,

  data() {
    return {
      amount: 0,
      quantity: 0,
      shipping: 0,
      totalAmount: 0,
      fetched: true,
      error: "",
    };
  },
  props: ["cart"],
  computed: {
    countGoods() {
      return (this.quantity = this.products.length);
    },

    countAmount() {
      const value = this.products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
      return value;
    },

    countTotalAmount() {
      this.totalAmount = this.countAmount + this.shipping;
      return this.totalAmount;
    },
  },

  methods: {
    onShippingButtonPushed(value) {
      this.shipping = value;
    },
  },
});
