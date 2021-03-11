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
<div class="cart__shipping shipping">
  <h2 class="shipping__title">SHIPPING ADRESS</h2>
  <form class="shipping__form shipping-form" action="#">
    <input
      type="text"
      class="shipping-form__field"
      placeholder="Bangladesh"
    />
    <input
      type="text"
      class="shipping-form__field"
      placeholder="State"
      value="State"
    />
    <input
      type="text"
      class="shipping-form__field"
      placeholder="Postcode / Zip"
      value="Postcode / Zip"
    />
    <button class="shipping-form__submit" type="submit">Get a quote</button>
  </form>
</div>
<div class="cart__total total">
  <div class="total__sub-container">
    <p class="total__sub-title">SUB TOTAL</p>
    <p class="total__sub-value">$900</p>
  </div>
  <div class="total__grand-container">
    <p class="total__grand-title">GRAND TOTAL</p>
    <p class="total__grand-value">$900</p>
  </div>
    <div class="total__line"></div>
  <button class="total__checkout-btn">PROCEED TO CHECKOUT</button>
</div>
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
    countGoods: function() {
      this.quantity = this.cart.length;
      return this.cart.length;
    },

    countAmount() {
      const value = this.cart.reduce(
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
