<template>
  <div>
    <GmapMap
      :center="center"
      :zoom="15"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
      :options="{
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: true,
          fullscreenControl: false,
          disableDefaultUi: true
        }"
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
        markers: [{position: {lat: 35.617325, lng: 139.564624}}, {
          position: {
            lat: 35.616463,
            lng: 139.544759
          }
        }, {position: {lat: 35.615218, lng: 139.542351}}, {
          position: {
            lat: 35.620048,
            lng: 139.561672
          }
        }, {position: {lat: 35.612794, lng: 139.539650}}, {
          position: {
            lat: 35.622104,
            lng: 139.550595
          }
        }, {position: {lat: 35.621952, lng: 139.549783}}, {
          position: {
            lat: 35.616292,
            lng: 139.564151
          }
        }, {position: {lat: 35.616577, lng: 139.564022}}, {
          position: {
            lat: 35.618014,
            lng: 139.566869
          }
        }, {position: {lat: 35.618705, lng: 139.562450}}],
        center: {lat: 35.617325, lng: 139.564624},
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
