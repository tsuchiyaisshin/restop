<template>
  <v-app-bar
    color="white"
    elevate-on-scroll
  >
    <v-avatar>
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        src="https://picsum.photos/id/11/500/300"
      >
      </v-img>
    </v-avatar>
    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
  </v-app-bar>
</template>

<script>
  export default {
    name: "AppBar"
  }
</script>

<style scoped>

</style>
