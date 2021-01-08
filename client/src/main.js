// @ts-nocheck
import Vue from "vue";
import App from "./App.vue";
import router from "./router/routes";
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax)
// import Vuesax from "vuesax";
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
