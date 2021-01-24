import Router from "vue-router";
import Vue from "vue";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Landing",
      component: () => import("../components/landing.vue"),
    },
    {
      path: "/signin",
      name: "Signin",
      component: () => import("../components/signin.vue"),
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
      path: "/admin",
      name: "Admin",
      component: () => import("../components/admin/Admin.vue"),
     },
    
     {
      path: "/menu/:id",
      name: "menu",
      component: () => import("../components/user/Menu.vue"),
    },
    {
      path: "/create",
      name: "create",
      component: () => import("../components/resto/RestoOwner.vue"), // added
    },
    {
      path:"/createMenu",// added new for creation of the menu
      name:"createMenu",
      component:() =>import("../components/resto/CreateMenu.vue")
    },
    {
      path:"/restohome",// added new for creation of the menu
      name:"restohome",
      component:() =>import("../components/resto/Restohome.vue")
    },
    
  ],
});
