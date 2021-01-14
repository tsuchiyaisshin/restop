<template>
  <v-app-bar color="white" elevate-on-scroll>
    <v-btn
      v-if="$vuetify.breakpoint.mobile"
      class="mt-3"
      icon
      @click="
        $vuetify.breakpoint.mobile
          ? $store.commit('setDrawer', !$store.state.drawer)
          : $emit('input', !value)
      "
    >
      <v-icon>
        mdi-dots-vertical-circle-outline
      </v-icon>
    </v-btn>
    <div class="mt-5">
      {{ $store.state.username }}
    </div>
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
          <amplify-sign-out button-text="Sign Out"></amplify-sign-out>
        </v-list>
      </v-menu>
    </div>
    <v-btn class="mt-3 mr-3" icon @click="routeActive">
      <v-icon>
        mdi-map-marker-path
      </v-icon>
    </v-btn>
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
  methods: {
    routeActive() {
      this.$emit('map-view-active')
    },
  },
}
</script>

<style scoped></style>
