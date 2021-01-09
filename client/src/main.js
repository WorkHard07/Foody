// @ts-nocheck
import Vue from "vue";
import App from "./App.vue";
import router from "./router/routes";
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';
import VueRouter from 'vue-router';
Vue.use(Vuesax)
Vue.use(VueRouter);
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
