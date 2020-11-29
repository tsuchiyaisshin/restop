<template>
  <v-app-bar color="white" elevate-on-scroll>
    <v-btn text @click="$router.push('login')">
      Login
    </v-btn>
    <amplify-sign-out></amplify-sign-out>
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
</template>

<script>
export default {
  name: 'AppBar',
}
</script>

<style scoped></style>
