import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import homeC from "@/components/page/homeC";
import Article from "@/components/page/Article";
import Guestbook from "@/components/page/Guestbook";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      children: [
        {
          path: "homeC",
          name: "homeC",
          component: homeC
        },
        {
          path: "Article",
          name: "Article",
          component: Article
        },
        {
          path: "Guestbook",
          name: "Guestbook",
          component: Guestbook
        }
      ]
    }
  ]
});
