export default [
  {
    path: '/',
    component: () => import('../components/template/MainTemplate'),
    meta: { requiresAuth: true },
    children: [
      {
        name: 'MapView',
        path: '/',
        component: () => import('../components/pages/MapView'),
      },
      {
        name: 'History',
        path: '/history',
        component: () => import('../components/pages/History'),
      },
      {
        name: 'Account',
        path: '/account',
        component: () => import('../components/pages/Account'),
      },
    ],
  },
  {
    name: 'SubTemplate',
    path: '/',
    component: () => import('../components/template/SubTemplate'),
    children: [
      {
        name: 'Login',
        path: '/login',
        component: () => import('../components/pages/Login'),
      },
    ],
  },
]
