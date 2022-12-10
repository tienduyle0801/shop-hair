import { ROUTE_PATH } from '../constants/constant';
import HomePage from '../Pages/Home';
import Login from '../Pages/Login';
import Introduce from '../Pages/Introduce';
const routes = [
  { path: ROUTE_PATH.index, component: HomePage },
  { path: ROUTE_PATH.home, component: HomePage },
  { path: ROUTE_PATH.login, component: Login } ,
  { path: ROUTE_PATH.introduce, component: Introduce } ,
];

export default routes;
