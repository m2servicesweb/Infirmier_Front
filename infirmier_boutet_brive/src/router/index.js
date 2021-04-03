import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Actu from '../views/Actu.vue';
import ActuHome from '../views/ActuHome.vue';
import Login from "../views/Login.vue";
import InviteFriend from '../views/InviteFriend.vue';

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
    path: "/InviteFriend",
    name: "InviteFriend",
    component: InviteFriend
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: '/actuHome', 
    name: 'actu-home', 
    component: ActuHome
  }, 
  {
    path: "/actuHome/:actuId",
    name: "single-actu",
    component: Actu
  },
  {
    path: "/:pageNumber",
    name: "home-paginated",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

export default router;
