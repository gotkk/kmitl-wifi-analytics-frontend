import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Visualize from '../views/Visualize.vue';

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
