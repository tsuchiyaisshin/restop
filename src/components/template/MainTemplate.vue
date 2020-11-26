<template>
  <div>
    <app-bar></app-bar>
    <route-drawer
      :active="routeActive"
      :route-data="routeData"
      @route-close="catchRouteIs"
    ></route-drawer>
    <router-view @map-view-event="mainMethod"></router-view>
  </div>
</template>

<script>
import AppBar from '../molcules/AppBar'
import RouteDrawer from '../molcules/RouteDrawer'
export default {
  name: 'MainTemplate',
  components: { RouteDrawer, AppBar },
  data: () => ({
    routeData: [],
    routeActive: false,
  }),
  methods: {
    mainMethod(payload) {
      this.routeActive = true
      this.routeData = payload
    },
    catchRouteIs() {
      this.routeData = false
    },
  },
}
</script>

<style scoped></style>
