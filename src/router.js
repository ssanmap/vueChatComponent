import vue from 'vue';
import Router from 'vue-router';

import Home from "@/views/Home";
import About from "@/views/About";
import Contact from "@/views/Contact";
import CoinDetail from "@/views/CoinDetail";



vue.use(Router)

export default new Router({
    mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/about",
      name: "about",
      component: About
    },

    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
    ,

    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail
    }
  ]

})