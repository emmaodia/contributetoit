import Home from '../views/home';
import Profile from '../views/projects';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/projects',
    exact: true,
    component: Profile,
  }
];

export default routes;
