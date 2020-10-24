<template>
  <GmapMap
    :center="center"
    :zoom="15"
    map-type-id="terrain"
    style="width: 100%; height: 600px"
    :options="{
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
          disableDefaultUi: true
        }"
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :title="m.title"
      :position="m.position"
      :clickable="true"
      :draggable="false"
      :icon="{ url: require('../../assets/markers/' + m.icon)}"
      @click="center=m.position"
    />
  </GmapMap>
</template>

<script>

  export default {
    name: 'Map',
    data() {
      return {
        windowSize: {
          x: 0,
          y: 0,
        },
        markers: [
          {
            title: '現在地',
            position: {
              lat: 35.617325,
              lng: 139.564624
            },
            icon: 'current.svg'
          },
          {
            title: 'ガスト',
            position: {
              lat: 35.616463,
              lng: 139.544759
            },
            icon: 'food.svg'
          },
          {
            title: 'ドトール',
            position: {
              lat: 35.615218,
              lng: 139.542351
            },
            icon: 'food.svg'
          },
          {
            title: 'カフェ',
            position: {
              lat: 35.620048,
              lng: 139.561672
            },
            icon: 'food.svg'
          },
          {
            title: 'ジョナサン',
            position: {
              lat: 35.612794,
              lng: 139.539650
            },
            icon: 'food.svg'
          },
          {
            position: {
              lat: 35.622104,
              lng: 139.550595
            },
            icon: 'food.svg'
          },
          {
            title: 'マクドナルド',
            position: {
              lat: 35.621952,
              lng: 139.549783
            },
            icon: 'food.svg'
          },
          {
            title: 'モコモコシップ',
            position: {
              lat: 35.616292,
              lng: 139.564151
            },
            icon: 'karaoke.svg'
          },
          {
            title: 'ケンタッキー',
            position: {
              lat: 35.616577,
              lng: 139.564022
            },
            icon: 'food.svg'
          },
          {
            title: 'モコモコ',
            position: {
              lat: 35.618014,
              lng: 139.566869
            },
            icon: 'karaoke.svg'
          },
          {
            position: {
              lat: 35.618705,
              lng: 139.562450
            },
            icon: 'food.svg'
          }
          ],
        center: {lat: 35.617325, lng: 139.564624},
      }
    },
    mounted() {
      this.onResize()
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
    },
    methods: {
      onResize() {
        this.windowSize = {x: window.innerWidth, y: window.innerHeight}
      },
    },
  }

</script>

<style scoped>
  .styles {
    --width: 600px;
    --height: 400px;
    width: var(--width);
    height: var(--height);
  }
</style>
