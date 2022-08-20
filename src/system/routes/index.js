import RouterHome, { RoutesHome } from './home';
import RouterMenu, { RoutesMenu } from './menu';

const Routes = {
  ...RoutesHome,
  ...RoutesMenu,
};

export {
  RouterHome,
  RouterMenu,
  Routes,
};
