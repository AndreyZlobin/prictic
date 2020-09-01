import Vue from 'vue';
import Layout from './layout/layout.vue';
import VueRouter from 'vue-router';
// import router from '../../router/routes.js'
import Vuelidate from 'vuelidate'
import store from "../../store/"


// Vue.use(VueRouter)
Vue.use(Vuelidate)


export default class Header {
  constructor(selector) {
    new Vue({
      el: selector,
      render: h => h(Layout),
      // router: router
      store
    });
  }
}