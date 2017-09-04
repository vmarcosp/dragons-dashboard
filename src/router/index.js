import Vue from 'vue';
import Router from 'vue-router';
import {
  Home,
  AllDragons
} from '@/pages';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/all-dragons',
      name: 'AllDragons',
      component: AllDragons
    }
  ]
});
