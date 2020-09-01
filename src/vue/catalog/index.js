import Vue from 'vue';
import Layout from './layout/layout.vue';
import store from '../../store';




export default class Catalog {
  constructor(selector) {
    Vue.filter("fix-namber", function (value) {
      return Math.round(value * 100) / 100
    })
    new Vue({
      el: selector,
      render: h => h(Layout),
      store
    });
  }

}
