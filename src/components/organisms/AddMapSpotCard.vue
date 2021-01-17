<template>
  <v-card class="pb-5">
    <v-card-title>
      Add Map Spot
    </v-card-title>
    <v-card-text>
      <select-position-map :title="position" :marker-icon="icons.get(markerIcon)"></select-position-map>
    </v-card-text>
    <v-card-text class="mt-n3">
      <div class="d-flex">
        <div class="mt-1 pt-3 font-weight-medium">
          Position name
        </div>
        <v-spacer></v-spacer>
        <v-text-field v-model="position" placeholder="ガスト生田駅前店">
        </v-text-field>
      </div>
      <div class="d-flex">
        <div class="mt-1 pt-3 font-weight-medium">
          Time
        </div>
        <v-spacer></v-spacer>
        <v-menu
          ref="menu"
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="startTime"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="startTime"
              style="width: 25px"
              label="Start Time"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="menu2"
            v-model="startTime"
            ampm-in-title
            full-width
            @click:minute="$refs.menu.save(startTime)"
          ></v-time-picker>
        </v-menu>
        <div class="mt-1 pt-3 font-weight-medium pl-5 pr-5 pt-4">
          ~
        </div>
        <v-menu
          ref="menu4"
          v-model="menu3"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="endTime"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="endTime"
              style="width: 25px"
              label="End Time"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="menu3"
            v-model="endTime"
            ampm-in-title
            full-width
            @click:minute="$refs.menu4.save(endTime)"
          ></v-time-picker>
        </v-menu>
      </div>
      <div class="d-flex">
        <div class="mt-1 pt-3 font-weight-medium">
          Icon
        </div>
        <v-spacer></v-spacer>
        <v-select
          v-model="markerIcon"
          class="ml-10"
          :items="markerIcons"
          menu-props="auto"
          label="Select"
          hide-details
          single-line
        >
          <template v-slot:prepend>
            <img width="25px" :src="iconSvg" />
          </template>
        </v-select>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import SelectPositionMap from '../atoms/SelectPositionMap'
export default {
  name: 'AddMapSpotCard',
  components: { SelectPositionMap },
  data: () => ({
    position: '',
    startTime: '',
    endTime: '',
    markerIcon: 'Food',
    menu2: false,
    menu3: false,
    iconSvg: require('../../assets/markers/food.svg'),
    markerIcons: ['Food', 'CoWorking Space', 'Car Rental', 'Karaoke'],
    icons: new Map([
      ['Food', 'food.svg'],
      ['CoWorking Space', 'co-working-space.svg'],
      ['Car Rental', 'car.svg'],
      ['Karaoke', 'karaoke.svg'],
    ]),
  }),
  watch: {
    markerIcon(val) {
      this.iconSvg = require('../../assets/markers/' + this.icons.get(val))
    },
  },
}
</script>

<style scoped></style>
