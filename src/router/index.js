import Vue from "vue";
import VueRouter from "vue-router";

// import SignUP from "@/views/auth/SignUP";
// import SignIn from "@/views/auth/SignIn";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signin",
    name: "SignIn",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/SignIn.vue"),
  },
  {
    path: "/signup",
    name: "SignUP",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "SignUP" */ "../views/auth/SignUp.vue"),
  },
  {
    path: "/findpassword",
    name: "FindPassword",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "SignUP" */ "../views/auth/FindPassword.vue"),
  },
  {
    path: "/findemail",
    name: "FindEmail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "SignUP" */ "../views/auth/FindEmail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
