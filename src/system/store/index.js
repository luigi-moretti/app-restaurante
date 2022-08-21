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
    getOrderPending: (state) => state.order.filter((item) => item.status === 'pendente'),
    getOrderSent: (state) => state.order.filter((item) => item.status === 'solicitado'),
    getOrderPaid: (state) => state.order.filter((item) => item.status === 'pago'),
    getOderQuantity: (state) => state.order.length,
  },
  mutations: {
    SET_LOADING: (state) => { state.loading = true; },
    UNSET_LOADING: (state) => { state.loading = false; },
    ADD_ORDER: (state, value) => {
      const alreadyContains = state.order.find((item) => item.id === value.id);
      console.log('fui chamado', { alreadyContains });
      if (alreadyContains) {
        console.log('salve');
        state.order.forEach((item) => {
          if (item.id === value.id) {
            console.log('ooooiii', item.quantity);
            // eslint-disable-next-line no-param-reassign
            item.quantity += value.quantity;
            console.log('OOOI', item.quantity);
          }
        });
      } else {
        console.log('faaala');
        state.order.push(value);
      }
    },
  },
  actions: {
    SET_LOADING: ({ commit }) => commit('SET_LOADING'),
    UNSET_LOADING: ({ commit }) => commit('UNSET_LOADING'),
    ADD_ORDER: ({ commit }, value) => commit('ADD_ORDER', value),
  },
  modules: {
  },
});
