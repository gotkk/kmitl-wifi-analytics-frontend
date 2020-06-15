import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Visualize from '../views/Visualize.vue';
import Test from '../views/Test.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/visualize',
    name: 'Visualize',
    component: Visualize
  },
  {
    path: '/visualize/:building_code',
    name: 'VisualizeData',
    component: Test
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
