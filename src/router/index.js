import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Visualize from "../views/Visualize.vue";
import Test from "../views/Test.vue";
import Building from "../views/Building.vue";
import Form from '../views/Form.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/visualize",
    name: "Visualize",
    component: Visualize,
  },
  {
    path: "/visualize/:building_code",
    name: "Building",
    component: Building,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  {
    path: "/visualize/:building_code/:form_id",
    name: "Form",
    component: Form,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
