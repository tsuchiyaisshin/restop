<template>
  <v-navigation-drawer width="350" absolute permanent right>
    <template v-slot:prepend>
      <div class="d-flex justify-space-between">
        <v-list-item-title class="text-left ml-4"
          >Route名を表示</v-list-item-title
        >
        <v-list-item-action>
          <v-btn class="mr-4" fab dark x-small color="red" @click="close()">
            <v-icon dark>
              mdi-close
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </div>
    </template>

    <v-divider></v-divider>

    <v-timeline dense clipped>
      <v-timeline-item
        v-for="(item, key) in routeData"
        :key="key"
        class="text-left"
        small
      >
        <div class="mt-2">
          <div v-html="item.htmlInstructions"></div>
          {{ item.distance.humanReadable }}
          {{ item.duration.humanReadable }}
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'RouteDrawer',
  props: {
    routeData: {
      type: Array,
      default: undefined,
    },
  },
  computed: {},
  methods: {
    close() {
      this.$emit('route-close')
    },
  },
}
</script>

<style scoped></style>
