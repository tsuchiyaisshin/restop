<template>
  <v-container>
    <v-row align="center" justify="center" no-gutters>
      <div class="display-1 mr-3">Welcome! {{ $store.state.username }}!</div>
      <v-avatar size="100">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          src="https://picsum.photos/id/11/500/300"
        >
        </v-img>
      </v-avatar>
    </v-row>
    <v-row class="mt-10">
      <v-col cols="12" md="6">
        <edit-name-card></edit-name-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pb-5">
          <v-card-title>
            Add Position
          </v-card-title>
          <v-card-text>
            sorry.. I develop now..
          </v-card-text>
          <v-card-text>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import EditNameCard from "../atoms/EditNameCard";
export default {
  name: '',
  components: {EditNameCard},
  data: () => ({
    dialog: false,
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

  methods: {
    log() {
      console.log(this.markerIcon)
    },
    openDialog() {
      if (this.dialog) {
        this.dialog = false
      } else {
        this.dialog = true
      }
    },
  },
}
</script>

<style scoped></style>
