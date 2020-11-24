import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import HomeBody from "../layout/components/SiteBody.vue";
import Products from "../views/Products.vue";
import News from "../views/News.vue";
// import Layout from "../layout";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "home",
        component: HomeBody,
      },
      {
        path: "products",
        component: Products,
      },
      {
        path: "news",
        component: News,
      },
      {
        path: "about",
        component: About,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
