import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Views/Home.vue'
import SignIn from '../components/Views/Auth/SignIn.vue'
import SignUp from '../components/Views/Auth/SignUp.vue'
import Program from '../components/Views/Program/Program.vue'
import Programs from '../components/Views/Program/Programs.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/register",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/program-id",
    name: "Program",
    component: Program,
  },
  {
    path: "/programlist",
    name: "Programs",
    component: Programs,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;