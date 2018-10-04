import Vue from "vue";
import App from "./App.vue";

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green'
    // el.style.backgroundColor = binding.value;
    let delay = 0;
    if(binding.modifiers['delayed']) {
      delay = 3000;
    }

    setTimeout(() => {
      if(binding.arg === 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);

  }
});

Vue.filter('toLowerCase', function(value) {
  return value.toLowerCase();
})
export const eventBus = new Vue();

new Vue({
  render: h => h(App)
}).$mount("#app");
