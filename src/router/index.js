import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue"
import GamerGradeTable from "../components/GamerGradeTable/GamerGradeTable.vue"
import Login from "../components/Login.vue"

const routes = [
  {
    path: "/",
    name: "Sign In",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: GamerGradeTable,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;