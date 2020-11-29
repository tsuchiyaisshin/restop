export default [
  {
    name: 'MainTemplate',
    path: '/',
    component: () => import('../components/template/MainTemplate'),
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
      {
        name: 'Login',
        path: '/login',
        component: () => import('../components/pages/Login')
      }
    ],
  },
]
