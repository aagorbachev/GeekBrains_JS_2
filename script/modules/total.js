export default Vue.component("total", {
  template: `<div class="cart__total total">
  <div class="total__sub-container">
    <p class="total__sub-title">SUB TOTAL</p>
    <p class="total__sub-value">&#8381;{{ subTotal }}</p>
  </div>
  <div class="total__grand-container">
    <p class="total__grand-title">GRAND TOTAL</p>
    <p class="total__grand-value">&#8381;{{ grandTotal }}</p>
  </div>
    <div class="total__line"></div>
  <button class="total__checkout-btn">PROCEED TO CHECKOUT</button>
</div>`,
  props: ["grand-total", "sub-total"],
});
