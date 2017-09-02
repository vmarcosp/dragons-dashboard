import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';

// CSS Imports
import 'font-awesome/css/font-awesome.css';

Vue.config.productionTip = false;

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
