import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Astrology from "../views/Astrology.vue";
import Numerology from "../views/Numerology.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/astrology",
    name: "astrology",
    component: Astrology,
  },
  {
    path: "/numerology",
    name: "numerology",
    component: Numerology,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
