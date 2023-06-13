import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyProject from "../views/MyProject.vue";
import Stores from "../views/projectDetail/StoreView.vue";
import School from "../views/projectDetail/SchoolView.vue";
import Team from "../views/Team.vue";
import Bus from "../views/projectDetail/BusView.vue";
import Educations from "../views/Educations";
import Sognando from "../views/projectDetail/SognandoView.vue";
import Calling from "../views/projectDetail/CallingView.vue";

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
  {
    path: "/sognando",
    name: "Sognando",
    component: Sognando,
  },
  {
    path: "/calling",
    name: "Calling",
    component: Calling,
  },
  {
    path: "/school",
    name: "School",
    component: School,
  },
  {
    path: "/bus",
    name: "Bus",
    component: Bus,
  },
  {
    path: "/stores",
    name: "Stores",
    component: Stores,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
