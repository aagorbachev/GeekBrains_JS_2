export default Vue.component("cart", {
  template: `<section class="cart">
  <div class="cart__items">
  <cart-item v-for="product of cart" :key="product.id" :item="product"></cart-item>
  <div class="cart__buttons">
<button class="cart__clear">Clear shopping cart</button>
<button class="cart__continue">Continue shopping</button>
</div>
</div>
<div class="cart__calculations">
<shipping></shipping>
<total :amount="countAmount" :totalAmount="countTotalAmount"></total>
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
  props: { cart: Array },
  computed: {
    countGoods: function () {
      this.quantity = this.cart.length;
      return this.cart.length;
    },

    countAmount() {
      return this.cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },

    countTotalAmount() {
      return (this.totalAmount = this.countAmount + this.shipping);
    },
  },

  methods: {
    onShippingButtonPushed(value) {
      this.shipping = value;
    },
  },
});
