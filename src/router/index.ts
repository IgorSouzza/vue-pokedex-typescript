import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pokedex',
    name: 'Pokedex',
    component: () => import('../views/Pokedex.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
