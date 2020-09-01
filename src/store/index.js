import Vue from "vue";
import Vuex from "vuex";
import showNoty from '../js/components/noty';
import api from '../js/config/api';
import cart from "./modules/cart"
import catalog from "./modules/catalog"
import auth from "./modules/auth"
import search from "./modules/search"

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        cart,
        catalog,
        auth,
        search
    },
    state: {},
    actions: {},
    mutations: {},
    getters: {}
})

export default store;
