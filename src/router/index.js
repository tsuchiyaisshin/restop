import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route'

import store from '../store/user'

import { components, AmplifyEventBus, AmplifyPlugin } from 'aws-amplify-vue'
import Amplify, * as AmplifyModules from 'aws-amplify'

Vue.use(VueRouter)
Vue.use(AmplifyPlugin, AmplifyModules)

let user

getUser().then(user => {
  if (user) {
    router.push({ path: '/' })
  }
})

function getUser() {
  return Vue.prototype.$Amplify.Auth.currentAuthenticatedUser()
    .then(data => {
      if (data && data.signInUserSession) {
        store.commit('setUser', data)
        return data
      }
    })
    .catch(() => {
      store.commit('setUser', null)
      return null
    })
}

AmplifyEventBus.$on('authState', async state => {
  if (state === 'signedOut') {
    user = null
    store.commit('setUser', null)
    router.push({ path: '/login' })
  } else if (state === 'signedIn') {
    user = await getUser()
    router.push({ path: '/' })
  }
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeResolve(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    user = await getUser()
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
