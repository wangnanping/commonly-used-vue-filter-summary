// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import * as  vueFilters from "filters_wang";

Vue.config.productionTip = false

// Object.keys(vueFilters).forEach(key => {
//   Vue.filter(key, vueFilters[key]);
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
