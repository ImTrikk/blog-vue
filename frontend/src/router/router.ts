import {
 createRouter,
 createWebHistory,
 type RouteRecordRaw,
} from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Confessions from "../views/Confessions.vue";
import About from "../views/About.vue";

const routes: Array<RouteRecordRaw> = [
 {
  path: "/",
  name: "Home",
  component: Home,
 },
 {
  path: "/blogs",
  name: "Blogs",
  component: Blogs,
 },
 {
  path: "/login",
  name: "Login",
  component: Login,
 },
 {
  path: "/register",
  name: "Register",
  component: Register,
 },
 {
  path: "/confessions",
  name: "Confessions",
  component: Confessions,
 },
 {
  path: "/about",
  name: "About",
  component: About,
 },
];

const router = createRouter({
 history: createWebHistory(),
 routes,
});

export default router;
