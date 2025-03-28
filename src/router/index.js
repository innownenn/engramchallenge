import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../components/Homepage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage,
    },
  ],
  scrollBehavior() {
    //scroll to top each time
    return { top: 0 };
  },
});

export default router;
