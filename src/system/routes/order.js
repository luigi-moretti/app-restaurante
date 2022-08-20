export const RoutesOrder = {
  ORDER: 'orders',
};

const route = {
  path: '/orders',
  name: RoutesOrder.ORDER,
  component: () => import(/* webpackChunkName: "route-orders" */ '@/modules/order/view/Order.vue'),
};

export default route;
