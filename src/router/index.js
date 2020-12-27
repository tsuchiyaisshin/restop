import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route'

import store from '../store/user'

import AmplifyModules from 'aws-amplify'

import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'

Vue.use(VueRouter)
Vue.use(AmplifyModules)

onAuthUIStateChange((nextAuthState, authData) => {
  if (nextAuthState === AuthState.SignedIn) {
    store.commit('setUser', authData)
    router.push({ path: '/' })
    console.log('user successfully signed in!')
    console.log('user data: ', authData)
  }
  if (!authData) {
    router.push({ path: '/login' })
    store.commit('setUser', null)
    console.log('user is not signed in...')
  }
})

let user

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeResolve(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    user = store.state.user
    if (!user) {
      return next({
        path: '/login',
      })
    }
    return next()
  }
  return next()
})

export default router
