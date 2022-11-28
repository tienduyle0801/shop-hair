import { ROUTE_PATH } from '../constants/constant';
import HomePage from '../Pages/Home';
import Login from '../Pages/Login';

const routes = [
  { path: ROUTE_PATH.index, component: HomePage },
  { path: ROUTE_PATH.home, component: HomePage },
  { path: ROUTE_PATH.login, component: Login }
];

export default routes;
