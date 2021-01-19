// @ts-nocheck
import Vue from "vue";
import App from "./App.vue";
import router from "./router/routes";
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMaterial)

Vue.filter('to-uppercase' ,function(value){
return value.toUpperCase()
});
Vue.use(Vuesax)
Vue.use(VueRouter);
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
