import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';
import router from './router';
import store from './vuex/store';
import filters from './filters';

// CSS Imports
import 'font-awesome/css/font-awesome.css';

// Vue "use's"
Vue.config.productionTip = false;
Vue.use(Vuex);

// Registering filters
filters.forEach(filter => Vue.filter(filter.name, filter.implementation));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  filters: {
    teste() {
      return 'teste';
    }
  },
  router,
  template: '<App/>',
  components: {
    App
  }
});
