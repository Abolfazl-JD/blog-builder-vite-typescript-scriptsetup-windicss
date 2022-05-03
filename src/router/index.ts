import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/BlogsView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/add-blog",
      name: "add-blog",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AddBlog.vue"),
    },
    {
      path: "/:linkName",
      name: "single-blog",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SingleBlog.vue"),
    },
    {
      path: "/form-validation-try",
      name: "form-validation",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/FormValidationTry.vue"),
    },
  ],
})

export default router
