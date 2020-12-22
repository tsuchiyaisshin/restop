import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null,
    drawer: true,
    username: null,
  },
  getters: {
    getDrawer: state => {
      return state.drawer
    },
  },
  mutations: {
    // ユーザー情報保存
    setUser(state, user) {
      state.user = user
    },

    setUsername(state, username) {
      state.username = username
    },

    setDrawer(state, drawer) {
      state.drawer = drawer
    },
  },
})

export default store
