import Vue from 'vue';
import Router from 'vue-router';
import Authentication from './pages/authentication';

Vue.use(Router);

const routes = [
  ...Authentication,
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
