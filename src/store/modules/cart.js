import api from '~/js/config/api'
import showNoty from '~/js/components/noty';
const state = {
  cartItems: [],
};

const actions = {
  fetchCartItems({ commit }) {
    const link = api.cartItems;
    fetch(link).then(response => {
      if (!response.ok) throw 'Произошла ошибка при загрузке корзины. Попробуйте снова.';
      return response.json();
    }).then(result => {
      commit('setCartItems', result._embedded.items);
    }).catch(err => {
      showNoty('error', err);
    });
  },

  addItemToCart({ commit }, item) {
    const link = api.cartItems;
    const body = JSON.stringify(item)
    fetch(link, {
      method: 'POST',
      body,
    }).then(response => {
      if (!response.ok) {
        if (response.statusText == "Conflict") {
          showNoty('warning', 'Товар уже в корзине');
        } else {
          throw new Error;
        }
      } else {
        return response.json();
      }
    }).then(item => {
      if (!item) return;
      commit('addItemToCart', item);
      showNoty('success', 'Товар добавлен в корзину');
    }).catch(err => {
      console.log(err);
      showNoty('warning', 'Товар уже в корзине');
      // showNoty('error', 'Ошибка соединения');
    });
  },

  sendItemCount({ commit }, item) {
    const link = `${api.cartItems}/${item.id}`;
    const body = JSON.stringify([{ op: "add", path: "/count", value: item.count }]);
    fetch(link, { method: 'PATCH', body })
      .catch(e => console.log(e));
  },

  removeItemFromCart({ commit }, item) {
    const link = `${api.cartItems}/${item.id}`;
    fetch(link, { method: 'DELETE' }).then(response => {
      if (!response.ok) throw 'Ошибка соединения';
      commit('removeItemFromCart', item);
    }).catch(err => {
      showNoty('error', err);
    });
  },

};

const mutations = {

  setCartItems: (state, items) => {
    state.cartItems = items
  },
  removeItemFromCart(state, item) {
    state.cartItems = state.cartItems.filter(cartItem => cartItem.id != item.id);
  },
  addItemToCart(state, item) {
    state.cartItems.push(item);
  },
};

const getters = {
  cartItems(state) {
    return state.cartItems;
  },

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
