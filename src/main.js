import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import router from './router/index'
import store from './store/user'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsconfig from './aws-exports'
Amplify.configure(awsconfig)

Vue.use(
  VueGoogleMaps,
  {
    load: {
      key: process.env.VUE_APP_GOOGLE_MAP_API,
      libraries: 'places',
      region: 'JP',
      language: 'ja',
    },
  },
  VueAxios,
  axios,
  AmplifyPlugin,
  AmplifyModules,
)

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
