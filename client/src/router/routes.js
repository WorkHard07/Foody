import Router from "vue-router";
import Vue from "vue";
import axios from "axios"
Vue.use(Router);


const isUser=async function(next){
  let user= await axios.post("http://localhost:3000/filterByToken",{
    token:localStorage.token
  })
  console.log("it is", user)

  if(user.data && user.data.isadmin===false){
    next()

  }else{
    localStorage.clear();
    next({path:'/signin'})
  }
}

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
      beforeEnter:(to,from,next)=>{
        isUser(next)
      }
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
      path:"/createMenu",
      name:"createMenu",
      component:() =>import("../components/resto/CreateMenu.vue")
    },
    {
      path:"/restohome",
      name:"restohome",
      component:() =>import("../components/resto/Restohome.vue")
    },
    {
      path:"/adminTasks",
      name:"AdminTasks",
      component:() => import("../components/admin/adminTasks"),
    },
    
  ],
});
