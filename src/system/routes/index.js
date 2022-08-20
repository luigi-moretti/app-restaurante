import RouterHome, { RoutesHome } from './home';
import RouterMenu, { RoutesMenu } from './menu';
import RouterOrder, { RoutesOrder } from './order';

const Routes = {
  ...RoutesHome,
  ...RoutesMenu,
  ...RoutesOrder,
};

export {
  RouterHome,
  RouterMenu,
  RouterOrder,
  Routes,
};
