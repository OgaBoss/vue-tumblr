import Vue from 'vue';
import Router from 'vue-router';
import Authentication from './pages/authentication';
import Dashboard from './pages/dashboard';

Vue.use(Router);

const routes = [
  ...Authentication,
  ...Dashboard,
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
