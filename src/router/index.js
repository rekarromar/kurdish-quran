import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Surah from "../views/Surah.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/surah/:index",
      name: "surah",
      component: Surah,
      params: true,
    },
  ],
});

export default router;
