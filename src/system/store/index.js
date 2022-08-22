import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    products: [],
    order: [],
  },
  getters: {
    getLoading: (state) => state.loading,
    getProducts: (state) => state.products,
    getOrder: (state) => state.order,
    getOrderPending: (state) => state.order.filter((item) => item.status === 'pendente'),
    getOrderSent: (state) => state.order.filter((item) => item.status === 'solicitado'),
    getOrderPaid: (state) => state.order.filter((item) => item.status === 'pago'),
    getOderQuantity: (state) => state.order.length,
  },
  mutations: {
    SET_LOADING: (state) => { state.loading = true; },
    UNSET_LOADING: (state) => { state.loading = false; },
    SET_PRODUCTS: (state, value) => { state.products = value; },
    ADD_ORDER: (state, value) => { state.order.push(value); },
  },
  actions: {
    SET_LOADING: ({ commit }) => commit('SET_LOADING'),
    UNSET_LOADING: ({ commit }) => commit('UNSET_LOADING'),
    ADD_ORDER: ({ commit }, value) => commit('ADD_ORDER', value),
    SET_PRODUCTS: ({ commit }, value) => commit('SET_PRODUCTS', value),
  },
  modules: {
  },
});
