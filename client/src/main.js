// @ts-nocheck
import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router/routes";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import VueRouter from "vue-router";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import store from "./store/index.js";
//Simport { BIcon } from 'bootstrap-vue'

import JQuery from "jquery";
window.$ = JQuery;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueMaterial);

Vue.filter("to-uppercase", function(value) {
  return value.toUpperCase();
});
Vue.use(VueMaterial);
Vue.use(Vuesax);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false;
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
