export default Vue.component("catalog-item", {
  template: `<div class="catalog__item catalog-item">
    <img
    src="../../images/featured/man_coat.jpg"
    alt=""
    class="catalog-item__img"
  />
  <div class="catalog-item__caption">
    <h3 class="catalog-item__title"> {{ product.name }} </h3>
    <p class="catalog-item__description text">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga placeat ullam ipsa harum animi unde, itaque commodi molestiae incidunt quod!
    </p>
    <p class="catalog-item__price">&#8381; {{ product.price }}</p>
  </div>
  <button @click="$root.addToCart(product)" class="catalog-item__button">Add to Cart</button>
</div>`,
  props: ["product"],
});
