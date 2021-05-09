import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Soin from '../views/Soin.vue';
import SoinHome from '../views/SoinHome.vue';
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Register",
    name: "Register",
    component: Register
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: '/SoinHome', 
    name: 'soin-home', 
    component: SoinHome
  }, 
  {
    path: "/SoinHome/:soinId",
    name: "single-soin",
    component: Soin
  },
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

export default router;
