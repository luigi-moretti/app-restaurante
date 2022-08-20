export const RoutesHome = {
  HOME: 'home',
};

const route = {
  path: '/',
  name: RoutesHome.HOME,
  component: () => import(/* webpackChunkName: "home" */ '@/modules/home/view/Home.vue'),
};

export default route;
