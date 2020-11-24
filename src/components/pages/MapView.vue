<template>
  <GmapMap
    class="ma-3"
    :center="center"
    :zoom="15"
    map-type-id="satellite"
    :style="
      $vuetify.breakpoint.smAndDown
        ? 'width: 300px; height: 600px'
        : 'width: 98%; height: 800px'
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
    <gmap-polyline
      :path.sync="path"
      :options="{ strokeColor: '#34eba8', strokeWeight: 5 }"
    ></gmap-polyline>
    <GmapInfoWindow
      :options="infoOptions"
      :position="infoWindowPos"
      :opened="infoWinOpen"
      @closeclick="infoWinOpen = false"
    >
      <div class="title">
        {{ spotName }}
      </div>
      <div class="body-2 text-left">営業時間: {{ businessHours }}</div>
      <div class="text-left">
        混み具合:
      </div>
      <br />
      <div>
        <v-btn color="blue" dark @click="searchRoute">経路を表示</v-btn>
      </div>
    </GmapInfoWindow>
    <GmapMarker
      v-for="(m, index) in markers.marker"
      :key="index"
      :title="m.title"
      :position="m.position"
      :clickable="true"
      :draggable="false"
      :icon="{ url: require('../../assets/markers/' + m.icon) }"
      @click="toggleInfoWindow(m, m.position)"
    />
  </GmapMap>
</template>

<script>
import markers from '../../assets/marker.json'
import { api } from '../../apis/api'

export default {
  name: 'Map',
  data() {
    return {
      spotName: '',
      markers: markers,
      businessHours: '',
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
      info: '',
      infoWindowPos: null,
      infoWinOpen: false,
      center: { lat: 135, lng: 50 },
      direction: null,
      path: [],
    }
  },
  mounted() {
    if (navigator.geolocation) {
      const vm = this
      navigator.geolocation.getCurrentPosition(function(position) {
        vm.center.lat = position.coords.latitude
        vm.center.lng = position.coords.longitude
        vm.markers.marker[0].position.lat = position.coords.latitude
        vm.markers.marker[0].position.lng = position.coords.longitude
      })
    }
  },
  methods: {
    toggleInfoWindow(marker, position) {
      if (marker.title !== '現在地') {
        this.center = position
        this.direction = position
        this.infoWindowPos = marker.position
        this.spotName = marker.title
        this.businessHours = marker.time
        this.infoWinOpen = true
      }
    },
    async searchRoute() {
      this.path = []
      const params = {
        origin: this.markers.marker[0].position,
        direction: this.direction,
      }
      const result = await api.getRoute(params)
      const polyUtil = require('polyline-encoded')
      const decodeArray = polyUtil.decode(
        result.routes[0].overviewPolyline.encodedPath,
      )
      decodeArray.forEach(latlngArray => {
        this.path.push({ lat: latlngArray[0], lng: latlngArray[1] })
      })
      console.log(result)
    },
  },
}
</script>

<style scoped></style>
