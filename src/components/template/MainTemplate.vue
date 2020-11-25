<template>
  <div>
    <app-bar></app-bar>
    <route-drawer :active="true"></route-drawer>
    <router-view></router-view>
  </div>
</template>

<script>
import AppBar from '../molcules/AppBar'
import RouteDrawer from '../molcules/RouteDrawer'
export default {
  name: 'MainTemplate',
  components: { RouteDrawer, AppBar },
}
</script>

<style scoped></style>
