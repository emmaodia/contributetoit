import Home from '../views/home';
import Profile from '../views/projects';
import ViewProject from '../views/viewProject'

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
  },
  {
    path: '/projects/:id',
    exact: false,
    component: ViewProject
  }
];

export default routes;
