<template>
  <div>
    <drawer></drawer>
    <app-bar></app-bar>
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
export default {
  name: 'MainTemplate',
  components: { Drawer, RouteDrawer, AppBar },
  data: () => ({
    routeData: [],
    routeActive: false,
  }),
  methods: {
    mainMethod(payload) {
      console.log(payload)
      this.routeActive = true
      this.routeData = payload
    },
    catchClose() {
      this.routeData = []
      this.routeActive = false
    },
  },
}
</script>

<style scoped></style>
