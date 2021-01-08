import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Landing",
      component: () => import("../components/Landing.vue"),
    },
    {
      path: "/signin",
      name: "Signin",
      component: () => import("../components/Signin.vue"),
     },
     {
      path: "/contacus",
      name: "Contacus",
      component: () => import("../components/Contacus.vue"),
     },
    //  {
    //   path: "/user",
    //   name: "User",
    //   component: () => import("../components/User.vue"),
    // },
    // {
    //   path: "/user/menu",
    //   name: "menu",
    //   component: () => import("../components/menu.vue"),
    // },
    // {
    //   path: "/resaturant/menu",
    //   name: "restaurantmenu",
    //   component: () => import("../components/restaurantmenu.vue"),
    // },
    // {
    //   path: "/resaturant/notification",
    //   name: "notification",
    //   component: () => import("../components/restaurantnot.vue"),
    // },
  ],
});
