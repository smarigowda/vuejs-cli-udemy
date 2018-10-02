import Vue from "vue";
import App from "./App.vue";

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = 'green'
  }
})
export const eventBus = new Vue();

new Vue({
  render: h => h(App)
}).$mount("#app");
