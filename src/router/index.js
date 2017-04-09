import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from '../pages/indexpage/indexpage.vue';
import DetailPage from '../pages/Detail/Detailpage/Detailindexpage.vue';
import ForecatePage from '../pages/Detail/ForecatePage/ForecatePage.vue';
import CountPage from '../pages/Detail/Countpage/Countpage.vue';
import PublicPage from '../pages/Detail/Publicpage/Publicpage.vue';
import Analysis from '../pages/Detail/Analysis/Analysis.vue';
import {ClientTable} from 'vue-tables-2';
// import axios from 'axios';
Vue.use(Router);
Vue.use(ClientTable, {}, false, require('./template.js')('client'));
// Vue.prototype.$http = axios;
// 这里注释掉axios了,主要是在使用了 vuetable-2 之后使用这个会报错,原因不明;

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
