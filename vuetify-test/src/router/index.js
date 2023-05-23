import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyProject from "../views/MyProject.vue";
import Team from "../views/Team.vue";
import Educations from "../views/Educations";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
  },
  {
    path: "/myproject",
    name: "Myproject",
    component: MyProject,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/educations",
    name: "Educations",
    component: Educations,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
