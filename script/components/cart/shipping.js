export default Vue.component("shipping", {
  template: `<div class="cart__shipping shipping">
  <h2 class="shipping__title">SHIPPING ADRESS</h2>
  <form class="shipping__form shipping-form" action="#">
    <select v-model="selectedCountry"
      class="shipping-form__field"
    >
    <option disabled value="">Выберите страну доставки</option>
    <option @ v-for="item in countries" :key="item.id">{{ item.country }}</option>
    </select>
    <select v-if="countryIsSelected">
      <option disabled>Необходимо выбрать страну доставки</option>
    </select>
    <select v-else
      class="shipping-form__field"
    >
    <option v-for="city in selectedCountry.cities" :key="selectedCountry.id">{{ city.city }}</option>
    </select>
    <input
      type="text"
      class="shipping-form__field"
      placeholder="Postcode / Zip"
    />
    <button class="shipping-form__submit" type="submit">Get a quote</button>
  </form>
</div>`,
  data() {
    return {
      countries: [],
      countryIsSelected: false,
      selectedCountry: "",
    };
  },
  mounted() {
    fetch("/countries", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => (this.countries = res));
  },
});
