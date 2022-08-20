export const RoutesMenu = {
  MENU: 'menu',
};

const route = {
  path: '/menu',
  name: RoutesMenu.MENU,
  component: () => import(/* webpackChunkName: "route-menu" */ '@/modules/menu/view/Menu.vue'),
};

export default route;
