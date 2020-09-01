import api from '~/js/config/api'
import showNoty from '~/js/components/noty';

const state = {
  searchValue: "",
  searchItems: []
};

const actions = {
  activeSearchProduct({ commit }) {
    const api = document.location.origin;
    const searchValue = state.searchValue;
    if (searchValue) {
      fetch(`${api}/api/catalog/products?limit=10&query=${searchValue}`)
        .then(response => {
          return response.json();
        })
        .then(result => {
          let items = result._embedded.items
          commit('setSearchItems', items);
        })
      // .catch(err => {
      //   const message = "Ошибка соединения";
      //   showNoty("error", error.message);
      //   console.error("Ошибка:", error);
      // });
    }
  },
  searchProduct({ commit }) {
    const api = document.location.origin;
    const searchValue = state.searchValue;
    if (searchValue) {
      fetch(`${api}/api/catalog/products?query=${searchValue}`)
        .then(response => {
          return response.json();
        })
        .then(result => {
          console.log(result);
          localStorage.setItem("items", JSON.stringify(result));
          document.location.href =
            "https://localhost:3000/catalog.html";
        })
        .catch(err => {
          const message = "Ошибка соединения";
          showNoty("error", error.message);
          console.error("Ошибка:", error);
        });
    }
  }
};

const mutations = {
  updatesearchValue(state, value) {
    state.searchValue = value
  },
  setSearchItems(state, items) {
    state.searchItems = items
  },
  clearSearchItems(state) {
    state.searchItems = []
  },
};

const getters = {
  searchValue(state) {
    return state.searchValue
  },
  searchItems(state) {
    return state.searchItems
  },
  clearSearchItems(state) {
    return state.searchItems = []
  },

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
