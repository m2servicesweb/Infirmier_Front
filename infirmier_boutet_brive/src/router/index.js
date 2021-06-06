import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Soin from '../views/Soin.vue';
import SoinHome from '../views/SoinHome.vue';
import Login from "../views/Login.vue";
<<<<<<< HEAD
=======
import Contact from "../views/Contact.vue";
import Domicile from "../views/Domicile.vue";
import Mentions_Légales from "../views/Mentions_Légales.vue";
import Politique_de_confidentialité from "../views/Politique_de_confidentialité.vue";

>>>>>>> lien Canva retabli

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
<<<<<<< HEAD
=======
  {
    path: "/Contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/Domicile",
    name: "Domicile",
    component: Domicile
  },
  {
    path: "/Mentions_Légales",
    name: "Mentions_Légales",
    component: Mentions_Légales
  },
  {
    path: "/Politique_de_confidentialité",
    name: "Politique_de_confidentialité",
    component: Politique_de_confidentialité
  },
>>>>>>> lien Canva retabli
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

export default router;
