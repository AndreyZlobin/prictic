import api from '~/js/config/api'
import showNoty from '~/js/components/noty';

const state = {
  catalogGroups: [],
  catalogItems: [],
};
const actions = {
  fetchCatalogGroups({ commit }) {
    const link = api.catalogGroups;
    fetch(link).then(response => {
      return response.json();
    })
      .then(result => {
        let items = result._embedded.items
        commit('setCatalogGroups', items);
      });
  },
};

const mutations = {
  setCatalogGroups(state, items) {
    state.catalogGroups = items
  },
};

const getters = {
  catalogGroups(state) {
    return state.catalogGroups
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
