import { ROUTE_PATH } from '../constants/constant';
import HomePage from '../Pages/Home';
import Introduce from '../Pages/Introduce';
import ListPrice from '../Pages/ListPrice';
import Login from '../Pages/Login';
import Training from '../Pages/Training';
const routes = [
  { path: ROUTE_PATH.index, component: HomePage },
  { path: ROUTE_PATH.home, component: HomePage },
  { path: ROUTE_PATH.introduce, component: Introduce },
  { path: ROUTE_PATH.listprice, component: ListPrice },
  { path: ROUTE_PATH.login, component: Login },
  { path: ROUTE_PATH.register, component: Login } ,
  { path: ROUTE_PATH.training, component: Training } ,
];

export default routes;
