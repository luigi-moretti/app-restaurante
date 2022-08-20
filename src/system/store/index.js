import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    order: [],
  },
  getters: {
    getLoading: (state) => state.loading,
    getOrder: (state) => state.order,
    getOderQuantity: (state) => state.order.length,
  },
  mutations: {
    SET_LOADING: (state) => { state.loading = true; },
    UNSET_LOADING: (state) => { state.loading = false; },
    ADD_ORDER: (state, value) => { state.order.push(value); },
  },
  actions: {
    SET_LOADING: ({ commit }) => commit('SET_LOADING'),
    UNSET_LOADING: ({ commit }) => commit('UNSET_LOADING'),
    ADD_ORDER: ({ commit }, value) => commit('ADD_ORDER', value),
  },
  modules: {
  },
});
