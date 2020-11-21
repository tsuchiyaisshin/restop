import { MapElementFactory } from 'vue2-google-maps'

export default MapElementFactory({
  name: 'directionsRenderer',
  ctr() {
    return google.maps.DirectionRenderer
  },

  events: [],

  props: {
    origin: { type: Object },
    destination: { type: Object },
    travelMode: { type: String },
  },

  afterCreate(directionsRenderer) {
    const directionsService = new google.maps.DirectionsService()

    this.$watch(
      () => [this.origin, this.destination, this.travelMode],
      () => {
        const { origin, destination, travelMode } = this
        if (!origin || !destination || !travelMode) return

        directionsService.route(
          {
            origin,
            destination,
            travelMode,
          },
          (response, status) => {
            if (status !== 'OK') return
            directionsRenderer.setDirections(response)
          },
        )
      },
    )
  },
})
