import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from '../pages/indexpage/indexpage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
});
