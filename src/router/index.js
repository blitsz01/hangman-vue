import Vue from "vue";
import Router from "vue-router";
import Game from "@/components/game/Game";
import About from "@/components/About";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Game",
      component: Game
    },
    {
      path: "/about",
      name: "About",
      component: About
    }
  ]
});
