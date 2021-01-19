<template>
  <div>
    <div class="mt-1 pt-3 pb-3 font-weight-medium text-left">
      Set Position
    </div>
    <GmapMap
      :center="center"
      :zoom="15"
      map-type-id="terrain"
      :style="
        $vuetify.breakpoint.mobile
          ? 'width: 98%; height: 200px'
          : 'width: 98%; height: 300px'
      "
      :options="{
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,
        clickableIcons: false,
      }"
    >
      <GmapMarker
        :title="title"
        :position="marker.position"
        :clickable="true"
        :draggable="drag"
        :icon="{ url: require('../../assets/markers/' + markerIcon) }"
        @drag="updatePosition"
      />
    </GmapMap>
    <div class="mt-1 pt-3 pb-3 font-weight-medium text-right">
      <v-btn
        dark
        :color="drag ? 'blue' : 'red'"
        @click="isDrag"
        v-text="dragText"
      ></v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectPositionMap',
  props: {
    title: {
      type: String,
      default: 'ガスト生田駅前店',
    },
    markerIcon: {
      type: String,
      default: 'current.svg'
    },
    time: {
      type: String,
      default: '10:00 ~ 18:00'
    }
  },
  data: () => ({
    center: {
      lat: 35.617325,
      lng: 139.564624,
    },
    marker: {
      position: {
        lat: 35.617325,
        lng: 139.564624,
      },
      title: 'Set Position',
      icon: 'current.svg',
    },
    dragText: 'lock',
    drag: true,
  }),
  methods: {
    isDrag() {
      if (this.drag) {
        this.drag = false
        this.dragText = 'unlock'
      } else {
        this.drag = true
        this.dragText = 'lock'
      }
      console.log(this.marker.position)
      this.$emit("set-position", this.marker.position);
    },
    updatePosition(location) {
      this.marker.position = {
        lat: location.latLng.lat(),
        lng: location.latLng.lng(),
      }
    },
  },
}
</script>

<style scoped></style>
