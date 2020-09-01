import Vue from 'vue';
import Layout from './layout/layout.vue';


export default class ToCart {
  constructor(selector) {
    new Vue({
      el: selector,
      render: h => h(Layout),
    });
  }
}