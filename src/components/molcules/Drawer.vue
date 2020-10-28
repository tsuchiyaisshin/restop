<template>
  <v-navigation-drawer
    app
    mobile-break-point="960"
    width="260"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          <div>
            <v-img
              src="../../assets/restop-logo.svg"
              style="display: inline-block; _display: inline;"
              width="20"
            ></v-img>
            RESTOP
          </div>
        </v-list-item-title>
        <v-list-item-subtitle>
          rest spot in 1 second!
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        @click="$router.push(item.path)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "Drawer",
    data() {
      return {
        items: [
          {title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/'},
          {title: 'History', icon: 'mdi-history', path: 'history'},
          {title: 'Account', icon: 'mdi-account', path: 'account'},
        ],
        right: null,
      }
    },
  }
</script>

<style scoped>

</style>
