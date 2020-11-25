<template>
  <v-navigation-drawer v-if="active" absolute permanent right>
    <template v-slot:prepend>
      <v-list-item>
        <div class="d-flex">
          <v-list-item-title>Route</v-list-item-title>
          <div class="ml-10 mr-10"></div>
          <v-list-item-action>
            <v-btn
              class="mx-2"
              fab
              dark
              x-small
              color="red"
              @click="active = false"
            >
              <v-icon dark>
                mdi-close
              </v-icon>
            </v-btn>
          </v-list-item-action>
        </div>
      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-timeline dense clipped>
      <v-timeline-item>timeline item</v-timeline-item>
      <v-timeline-item>timeline item</v-timeline-item>
      <v-timeline-item>timeline item</v-timeline-item>
    </v-timeline>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'RouteDrawer',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      default: undefined,
    },
  },
  data() {
    return {
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
    }
  },
}
</script>

<style scoped></style>
