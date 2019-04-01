import Vue from 'vue';
import Router from 'vue-router';
import Authentication from './pages/authentication';
import Dashboard from './pages/dashboard';
import store from '../store';

Vue.use(Router);

const routes = [
  ...Authentication,
  ...Dashboard,
];

const router = new Router({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters.getUserData.email === '') {
      next({ path: '/auth/login' });
    } else {
      next();
    }
  } else {
    next();// make sure to always call next()!
  }
});

export default router;
