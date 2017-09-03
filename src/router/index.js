import Vue from 'vue';
import Router from 'vue-router';
import {
  Home
} from '@/pages';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'HOme',
    component: Home
  }]
});
