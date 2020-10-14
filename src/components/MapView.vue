<template>
  <div>
    <GmapMap
      :center="center"
      :zoom="15"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<script>

  export default {
    name: 'Map',
    data() {
      return {
        markers: [{position: {lat: 10, lng: 10}}],
        center: {lat: 10, lng: 10},
      }
    },
    mounted() {
      if (navigator.geolocation) {
        // callback関数内でthis使えないため
        let vm = this
        navigator.geolocation.getCurrentPosition(
          function (position) {
            vm.center.lat = position.coords.latitude
            vm.center.lng = position.coords.longitude
            vm.markers[0].position.lat = position.coords.latitude
            vm.markers[0].position.lng = position.coords.longitude
          },
        )
      }
    }
  }

</script>

<style scoped>
</style>
