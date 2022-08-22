export const RoutesProduct = {
  PRODUCT: 'product',
};

const route = {
  path: '/product/:idProduct',
  name: RoutesProduct.PRODUCT,
  component: () => import(/* webpackChunkName: "route-product" */ '@/modules/product/view/Product.vue'),
  props: true,
};

export default route;
