import api from '~/js/config/api'
import showNoty from '~/js/components/noty';

const state = {
  showRegistration: false,
};

const actions = {};

const mutations = {

  showRegistr(state) {
    !localStorage.getItem("jwt")
      ? (state.showRegistration = !state.showRegistration)
      : (document.location.href =
        "https://ffarm.1mcg.ru/assets/personal-area.html");
  },
  closeRegistr(state) {
    state.showRegistration = false
  }
};

const getters = {
  showRegistration(state) {
    return state.showRegistration
  },

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
