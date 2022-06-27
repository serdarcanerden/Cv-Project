import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/question",
    name: "Question",
    component: () => import("../views/Question.vue"),
  },
  {
    path: "/writing",
    name: "Writing",
    component: () => import("../views/Writing.vue"),
  },

  {
    path: "/faq",
    name: "Faq",
    component: import("../views/Faq.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/404",
    name: "PageNotExist",
    component: () => import("@/views/NoPage.vue"),
  },
  {
    path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
