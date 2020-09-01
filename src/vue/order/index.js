import Vue from 'vue';
import Layout from './layout/layout.vue';


export default class Order {
  constructor(selector) {
    Vue.filter("fix-namber", function (value) {
      return Math.round(value * 100) / 100
    })
    new Vue({
      el: selector,
      render: h => h(Layout),
    });
  }
}