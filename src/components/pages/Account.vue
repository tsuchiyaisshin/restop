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
        <add-map-spot-card></add-map-spot-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EditNameCard from '../atoms/EditNameCard'
import AddMapSpotCard from '../organisms/AddMapSpotCard'
export default {
  name: '',
  components: { AddMapSpotCard, EditNameCard },
}
</script>

<style scoped></style>
