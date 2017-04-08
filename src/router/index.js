import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from '../pages/indexpage/indexpage.vue';
import DetailPage from '../pages/Detail/Detailpage/Detailindexpage.vue';
import ForecatePage from '../pages/Detail/ForecatePage/ForecatePage.vue';
import CountPage from '../pages/Detail/Countpage/Countpage.vue';
import PublicPage from '../pages/Detail/Publicpage/Publicpage.vue';
import Analysis from '../pages/Detail/Analysis/Analysis.vue';
import axios from 'axios';

Vue.use(Router);
Vue.prototype.$http = axios;

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: DetailPage,
      children: [
        {
          path: 'forecate',
          component: ForecatePage
        }, {
          path: 'count',
          component: CountPage
        }, {
          path: 'public',
          component: PublicPage
        }, {
          path: 'analysis',
          component: Analysis
        }
      ]
    }
  ]
});
