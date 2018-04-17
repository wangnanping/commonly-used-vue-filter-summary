
import Vue from 'vue'
import App from './App'
import router from './router'
import * as  vueFilters from "filters-wang";

Vue.config.productionTip = false

Object.keys(vueFilters).forEach(key => {
  Vue.filter(key, vueFilters[key]);
});
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
