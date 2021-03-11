export default Vue.component("message", {
  template: `<section class="message">
  <p>
  <slot></slot>
  </p>
  </section>`,
});
