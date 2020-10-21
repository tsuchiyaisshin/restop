export default [
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
  }
]
