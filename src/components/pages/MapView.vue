<template>
  <GmapMap
    class="ma-3"
    :center="center"
    :zoom="15"
    map-type-id="satellite"
    :style="$vuetify.breakpoint.smAndDown ? 'width: 300px; height: 600px' : 'width: 98%; height: 800px'"
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
    <GmapInfoWindow
      :options="infoOptions"
      :position="infoWindowPos"
      :opened="infoWinOpen"
      @closeclick="infoWinOpen=false"
    >
      <div class="title">
        {{ spotName }}
      </div>
      <div class="body-2 text-left">
        営業時間: {{ businessHours }}
      </div>
      <div class="text-left">
        混み具合:
      </div>
      <br>
      <div>
        <v-btn color="blue" dark>経路を表示</v-btn>
      </div>
      </GmapInfoWindow>
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :title="m.title"
      :position="m.position"
      :clickable="true"
      :draggable="false"
      :icon="{ url: require('../../assets/markers/' + m.icon)}"
      @click="toggleInfoWindow(m, m.position)"
    />
  </GmapMap>
</template>

<script>

  export default {
    name: 'Map',
    data() {
      return {
        spotName: '',
        businessHours: '',
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        },
        infoWindowPos: null,
        infoWinOpen: false,
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
            time: '10:00 ~ 19:00',
            position: {
              lat: 35.616463,
              lng: 139.544759
            },
            icon: 'food.svg'
          },
          {
            title: 'ドトール',
            time: '10:00 ~ 19:00',
            position: {
              lat: 35.615218,
              lng: 139.542351
            },
            icon: 'food.svg'
          },
          {
            title: 'カフェ',
            time: '10:00 ~ 19:00',
            position: {
              lat: 35.620048,
              lng: 139.561672
            },
            icon: 'food.svg'
          },
          {
            title: 'ジョナサン',
            time: '10:00 ~ 19:00',
            position: {
              lat: 35.612794,
              lng: 139.539650
            },
            icon: 'food.svg'
          },
          {
            title: '喫茶店',
            time: '10:00 ~ 19:00',
            position: {
              lat: 35.622104,
              lng: 139.550595
            },
            icon: 'food.svg'
          },
          {
            title: 'マクドナルド',
            time: '10:00 ~ 19:00',
            position: {
              lat: 35.621952,
              lng: 139.549783
            },
            icon: 'food.svg'
          },
          {
            title: 'モコモコシップ',
            time: '24時間',
            position: {
              lat: 35.616292,
              lng: 139.564151
            },
            icon: 'karaoke.svg'
          },
          {
            title: 'ケンタッキー',
            time: '10:00 ~ 19:00',
            position: {
              lat: 35.616577,
              lng: 139.564022
            },
            icon: 'food.svg'
          },
          {
            title: 'モコモコ',
            time: '24時間',
            position: {
              lat: 35.618014,
              lng: 139.566869
            },
            icon: 'karaoke.svg'
          },
          {
            title: '喫茶店',
            time: '10:00 ~ 19:00',
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
      toggleInfoWindow(marker, position) {
        if ( marker.title !== '現在地') {
          this.center=position
          this.infoWindowPos = marker.position
          this.spotName = marker.title
          this.businessHours = marker.time
          this.infoWinOpen = true;
        }
      }
    },
  }

</script>

<style scoped>
</style>
