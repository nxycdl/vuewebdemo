import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from '../pages/indexpage/indexpage.vue';
import axios from 'axios';

Vue.use(Router);
Vue.prototype.$http = axios;

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
});
