const catalogItems = Vue.component("catalog-items", {
  template: `<div class="catalog__items">
        <catalog-item v-for="item in filterItems" :key="item.id" :product="item"></catalog-item>
    </div>`,
  data() {
    return {
      items: [],
    };
  },
  props: ["filter"],
  computed: {
    filterItems() {
      const regexp = new RegExp(this.filter, "i");
      return this.filter
        ? [...this.items.filter((item) => regexp.test(item.name))]
        : [...this.items];
    },
  },

  mounted() {
    fetch(`/catalog`, {
      method: "GET",
    })
      .then((result) => result.json())
      .then((items) => {
        this.items = items;
      });
  },
});

export default catalogItems;
