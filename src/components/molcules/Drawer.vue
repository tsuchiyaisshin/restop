<template>
  <v-navigation-drawer
    absolute
    permanent
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          RESTOP
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
