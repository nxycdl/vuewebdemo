import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import World from '../components/World/World';
import Redapple from '../components/Redapple/Redapple';
import VuexDemo from '../components/VuexDemo/VuexDemo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/VuexDemo',
      name: 'VuexDemo',
      component: VuexDemo
    },
    {
      path: '/world',
      name: 'World',
      component: World,
      children: [{
        path: 'red',
        component: Redapple
      }]
    }
  ]
});
