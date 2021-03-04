export default Vue.component("cart-item", {
  template: `<div class="cart-item">
  <picture class="cart-item__image-container">
    <source srcset="../../images/cart/hoodie_140w.jpg" media="(max-width: 767px)">
    <source srcset="../../images/cart/hoodie_260w.jpg" media="(min-width: 768px)">
      <img
      src="../../images/cart/hoodie_140w.jpg"
      alt="Hoodie"
      class="cart-item__image"
    />
  </picture>
  <div class="cart-item__description">
    <h2 class="cart-item__title">{{ item.name }}</h2>
    <button class="cart-item__close-button" @click="$root.removeFromCart(item)">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="12"
        viewBox="0 0 10 12"
        fill="none"
      >
        <path
          d="M6.21133 5.73193L9.66221 1.87065C9.82599 1.68772 9.91811 1.43948 9.91832 1.18055C9.91852 0.921615 9.82679 0.673196 9.6633 0.489941C9.49981 0.306686 9.27796 0.203606 9.04655 0.203377C8.81513 0.203148 8.59312 0.30579 8.42934 0.488722L4.97846 4.35L1.52758 0.488722C1.3638 0.305467 1.14167 0.202515 0.910056 0.202515C0.678439 0.202515 0.456309 0.305467 0.292531 0.488722C0.128753 0.671977 0.0367432 0.920525 0.0367432 1.17969C0.0367432 1.43885 0.128753 1.6874 0.292531 1.87065L3.74341 5.73193L0.292531 9.5932C0.128753 9.77646 0.0367432 10.025 0.0367432 10.2842C0.0367432 10.5433 0.128753 10.7919 0.292531 10.9751C0.456309 11.1584 0.678439 11.2613 0.910056 11.2613C1.14167 11.2613 1.3638 11.1584 1.52758 10.9751L4.97846 7.11386L8.42934 10.9751C8.59312 11.1584 8.81525 11.2613 9.04687 11.2613C9.27848 11.2613 9.50061 11.1584 9.66439 10.9751C9.82817 10.7919 9.92018 10.5433 9.92018 10.2842C9.92018 10.025 9.82817 9.77646 9.66439 9.5932L6.21133 5.73193Z"
          fill="#575757"
        />
      </svg>
    </button>
    <div class="cart-item__attributes">
      <p class="cart-item__attribute price">Price: <span class="price__value">&#8381;{{ item.price }}</span></p>
      <p class="cart-item__attribute color">Color: <span class="color__value">Red</span></p>
      <p class="cart-item__attribute size">Size: <span class="size-value">XI</span></p>
      <p class="cart-item__attribute quantity">Quantity: {{ item.quantity }}</p>
    </div>
  </div>
</div>`,
  props: ["item", "id"],
});
