import Vue from 'vue';
import '@/system/templates/templates';
import '@/system/components/base/components';
import App from './App.vue';
import './registerServiceWorker';
import router from './system/router';
import store from './system/store';
import vuetify from './system/plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
