import Home from '../views/home';
import Profile from '../views/profiles';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/profiles',
    exact: true,
    component: Profile,
  }
];

export default routes;
