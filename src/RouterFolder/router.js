// 1st
import { createRouter, createWebHistory } from "vue-router";
import Page1 from "../RouterFolder/Page1.vue";
import Page2 from "../RouterFolder/Page2.vue";
import Page3 from "../RouterFolder/Page3.vue";
import Page4 from "../RouterFolder/Page4.vue";
import Page5 from "../RouterFolder/Page5.vue";
import Home from "../RouterFolder/Home.vue";

// 2nd
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/page1",
    name: "Page1",
    component: Page1,
  },
  {
    path: "/page2",
    name: "Page2",
    component: Page2,
  },
  {
    path: "/page3",
    name: "Page3",
    component: Page3,
  },
  {
    path: "/page4",
    name: "Page4",
    component: Page4,
  },
  {
    path: "/page5",
    name: "Page5",
    component: Page5,
  },
];
// 3rd step
const router = createRouter({
  history: createWebHistory(),
  //cal the allRouter var here
  routes,
});

// 4th export it
export default router;
