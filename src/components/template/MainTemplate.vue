<template>
  <div>
    <drawer></drawer>
    <app-bar @map-view-active="catchOpen"></app-bar>
    <route-drawer
      v-if="routeActive"
      :route-data="routeData"
      @route-close="catchClose"
    ></route-drawer>
    <router-view @map-view-event="mainMethod"></router-view>
  </div>
</template>

<script>
import AppBar from '../molcules/AppBar'
import RouteDrawer from '../molcules/RouteDrawer'
import Drawer from '../molcules/Drawer'
import store from '../../store/user'
import { api } from '../../apis/api'

export default {
  name: 'MainTemplate',
  components: { Drawer, RouteDrawer, AppBar },
  data: () => ({
    routeData: [],
    routeActive: false,
  }),
  mounted() {
    const body = {
      userId: store.state.user.username,
    }
    const result = api.getUser(body)
    result.then(val => {
      store.commit('setUsername', val.name)
    })
  },
  methods: {
    mainMethod(payload) {
      this.routeData = []
      this.routeActive = true
      this.routeData = payload
    },
    catchClose() {
      this.routeActive = false
    },
    catchOpen() {
      this.routeActive = true
    },
  },
}
</script>

<style scoped></style>
