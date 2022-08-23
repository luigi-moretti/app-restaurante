import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    products: [],
    order: [],
    user: '',
    table: 0,
  },
  getters: {
    getTable: (state) => state.table,
    getUser: (state) => state.user,
    getLoading: (state) => state.loading,
    getProducts: (state) => state.products,
    getProduct: (state) => (idProduct) => state.order.find((item) => item.id === idProduct),
    getOrder: (state) => state.order,
    getOrderPending: (state) => state.order.filter((item) => item.status === 'pendente'),
    getOrderSent: (state) => state.order.filter((item) => item.status === 'solicitado'),
    getOrderPaid: (state) => state.order.filter((item) => item.status === 'pago'),
    getOderQuantity: (state) => state.order.length,
  },
  mutations: {
    SET_LOADING: (state) => { state.loading = true; },
    UNSET_LOADING: (state) => { state.loading = false; },
    SET_TABLE: (state, value) => { state.table = value; },
    UNSET_TABLE: (state) => { state.table = 0; },
    SET_USER: (state, value) => { state.user = value; },
    UNSET_USER: (state) => { state.user = ''; },
    SET_PRODUCTS: (state, value) => { state.products = value; },
    ADD_ORDER: (state, value) => { state.order.push(value); },
    REMOVE_ORDER: (state, idProduct) => {
      const newOrder = state.order.filter((item) => item.id !== idProduct);
      state.order = newOrder;
    },
    INCREASE_ORDER: (state, idProduct) => {
      const newOrder = state.order.map((item) => {
        if (idProduct === item.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      state.order = newOrder;
    },
    DECREASE_ORDER: (state, idProduct) => {
      const newOrder = state.order.map((item) => {
        if (idProduct === item.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      state.order = newOrder;
    },
  },
  actions: {
    SET_LOADING: ({ commit }) => commit('SET_LOADING'),
    UNSET_LOADING: ({ commit }) => commit('UNSET_LOADING'),
    SET_TABLE: ({ commit }, value) => commit('SET_TABLE', value),
    UNSET_TABLE: ({ commit }) => commit('UNSET_TABLE'),
    SET_USER: ({ commit }, value) => commit('SET_USER', value),
    UNSET_USER: ({ commit }) => commit('UNSET_USER'),
    ADD_ORDER: ({ commit }, value) => commit('ADD_ORDER', value),
    REMOVE_ORDER: ({ commit }, value) => commit('REMOVE_ORDER', value),
    SET_PRODUCTS: ({ commit }, value) => commit('SET_PRODUCTS', value),
    INCREASE_ORDER: ({ commit }, value) => commit('INCREASE_ORDER', value),
    DECREASE_ORDER: ({ commit }, value) => commit('DECREASE_ORDER', value),
  },
  modules: {
  },
});
