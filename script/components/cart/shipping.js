export default Vue.component("shipping", {
  template: `<div class="cart__shipping shipping">
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
</div>`,
});
