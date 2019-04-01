const dashboard = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */'../../pages/DashboardPage.vue'),
    children: [],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/search_posts',
    name: 'search_posts',
    component: () => import(/* webpackChunkName: "dashboard" */'../../pages/SearchPostResult.vue'),
  },
];

export default dashboard;
