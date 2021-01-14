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
     path: "/user",
       name: "User",
      component: () => import("../components/user/User.vue"),
       },
     {
      path: "/contactus",
      name: "contacus",
      component: () => import("../components/Contacus.vue"),
     },
     {
      path: "/restaurent",
      name: "restoowner",
      component: () => import("../components/resto/Restoowner.vue"),
     },
     {
      path: "/admin",
      name: "Admin",
      component: () => import("../components/admin/Admin.vue"),
     },
    
     {
      path: "/menu",
      name: "menu",
      component: () => import("../components/user/Menu.vue"),
    },
    {
      path: "/create",
      name: "create",
      component: () => import("../components/resto/Restoowner.vue"), // added
    },
  ],
});
