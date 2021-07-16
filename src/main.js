import Vue from 'vue'
import App from './App.vue'

import Axios from 'axios';
import jQuery from 'jquery';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.prototype.$axios = Axios;
Vue.prototype.$jquery = jQuery;
Vue.config.productionTip = false;

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueToast, {
  position: 'bottom',
  duration: 3000
});

Vue.config.productionTip = false

import Home from './components/Home.vue'

const routes = [
  { path:'/', component: Home },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
