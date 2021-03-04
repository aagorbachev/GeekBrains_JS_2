export default Vue.component("error", {
  template: `<div class="error">
  <h2 class="error__message">Не удалось получить данные от сервера. {{ errorMessage }}</h2>
  </div>`,
  props: ["error-message"],
});
