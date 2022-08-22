import RouterHome, { RoutesHome } from './home';
import RouterMenu, { RoutesMenu } from './menu';
import RouterOrder, { RoutesOrder } from './order';
import RouterProduct, { RoutesProduct } from './product';

const Routes = {
  ...RoutesHome,
  ...RoutesMenu,
  ...RoutesOrder,
  ...RoutesProduct,
};

export {
  RouterHome,
  RouterMenu,
  RouterOrder,
  RouterProduct,
  Routes,
};
