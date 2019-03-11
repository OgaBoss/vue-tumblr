const authentication = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import(/* webpackChunkName: "auth" */'../../pages/AuthenticationPage.vue'),
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "auth" */'../../components/authentication/LoginComponent.vue'),
      },
      {
        path: 'create-account',
        name: 'create-account',
        component: () => import(/* webpackChunkName: "create-account" */'../../components/authentication/CreateAccountComponent.vue'),
      },
    ],
  },
];

export default authentication;
