// 1st Install the Vue 3 Router from the Command Line
// 2nd step import this one from router
import { createWebHistory, createRouter } from "vue-router";
import Home from "../routerscomponent/Home.vue";
import About from "../routerscomponent/About.vue";
import Login from "../routerscomponent/Login.vue";
import Signup from "../routerscomponent/Signup.vue";
import Cart from "../routerscomponent/Cart.vue";
import DynamicRoutePage from "../routerscomponent/DynamicRoutePage.vue";

// 2nd step Add a routing directory & configuration file
//           /src/router/index.js'
//wherer...
// 3rd step create all Routes as array of object
// Path - the URL path where this route can be found.
// Name - An optional name to use when we link to this route.
// Component - Which component to load when this route is called.

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/dynamicRoutePage/:name", //<--for dynamic routing notice the colon
    name: "DynamicRoutePage",
    component: DynamicRoutePage,
  },
];

// 4th step do this line of code

const router = createRouter({
  history: createWebHistory(),
  routes, //call this var inside router
});

// 5th export it and use it in mainfile.js
export default router;
// 6thNext we’ll need to edit our main.js file to use our router in our application.
