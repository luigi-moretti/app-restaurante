import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  RouterHome,
  RouterMenu,
} from '../routes';

Vue.use(VueRouter);

const routes = [
  RouterHome,
  RouterMenu,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;