<template>
  <div>
    <app-bar></app-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import AppBar from '../molcules/AppBar'
export default {
  name: 'MainTemplate',
  components: { AppBar },
}
</script>

<style scoped></style>
