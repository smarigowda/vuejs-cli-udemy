import Vue from "vue";
import App from "./App.vue";

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green'
    // el.style.backgroundColor = binding.value;
    if(binding.arg === 'background') {
      el.style.backgroundColor = binding.value;
    } else {
      el.color = binding.value;
    }
  }
})
export const eventBus = new Vue();

new Vue({
  render: h => h(App)
}).$mount("#app");
