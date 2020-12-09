<template>
  <v-app-bar color="white" elevate-on-scroll>
    <v-btn
      class="mt-3"
      icon
      @click="
        $vuetify.breakpoint.smAndDown
          ? $store.commit('setDrawer', !$store.state.drawer)
          : $emit('input', !value)
      "
    >
      <v-icon>
        mdi-dots-vertical-circle-outline
      </v-icon>
    </v-btn>
    <v-spacer></v-spacer>

    <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="mt-3" icon v-bind="attrs" v-on="on">
            <v-icon>
              mdi-account
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <amplify-sign-out class="pr-3 pl-3 pb-n10"></amplify-sign-out>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped></style>
