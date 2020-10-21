<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-row>
          <drawer></drawer>
          <router-view></router-view>
        </v-row>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Drawer from "./components/molcules/Drawer";

export default {
  name: 'App',
  components: {
    Drawer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
