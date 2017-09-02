import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';
import router from './router';
import store from './vuex/store';

// CSS Imports
import 'font-awesome/css/font-awesome.css';

Vue.config.productionTip = false;
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
});
