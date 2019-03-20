import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Giiker from './views/Giiker.vue';
import Collect from './views/Collect.vue';
import Socket from './views/Socket.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/giiker',
      name: 'giiker',
      component: Giiker,
    },
    {
      path: '/socket',
      name: 'socket',
      component: Socket,
    },
    {
      path: '/collect',
      name: 'collect',
      component: Collect,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
