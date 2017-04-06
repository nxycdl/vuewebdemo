// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.productionTip = false;

let store = new Vuex.Store({
  state: {
    totalPrice: 0
  },
  getters: {
    getTotal(state) {
      return this.state.totalPrice;
    }
  },
  /* mutations --同步更新状态的时候使用 */
  mutations: {
    increment(state, price) {
      state.totalPrice += price;
    },
    decrement(state, price) {
      state.totalPrice -= price;
    }
  },
  actions: {
    /* actions 只能用来调用mutations; */
    increase(context, price) {
      context.commit('increment', price);
    },
    decrease(context, price) {
      context.commit('decrement', price);
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
