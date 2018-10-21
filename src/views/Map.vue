<template>
	<div class="simple-map demo">		
		<GmapMap
			ref="map"
			class="map"
			:center="center"
			:zoom="zoom"
      :options="options"
		>

    <GmapMarker
      v-for="(m, index) in markers"
      :key="index"
      :position="m.position"
      :clickable="true"
      :draggable="false"
      @click="clickMarker(m.name)"
    />
		</GmapMap>
	</div>
</template>

<script>
import mapStyle from '../assets/hotpink.json'
export default {
  methods: {
    clickMarker(marker){
      // console.log(marker.latLng.lat(), marker.latLng.lng())
      console.log(marker)
    }
  },
	data () {
		return {
			center: {
				lat: 59.2484413,
        lng: 17.8602922,
      },
			userPosition: null,
      zoom: 18,
      options: {
        styles: mapStyle
      },
      markers: [
        {
          name: 'baksidan',
          icon: '',
          position: { lat: 59.2479177, lng: 17.8592948 }
        },
        {
          name: 'ingången',
          position: { lat: 59.247965, lng: 17.860078 }
        },
        {
          name: 'gränden',
          position: { lat: 59.248978, lng: 17.861043 }
        }
      ]
		}
	},
}
</script>

<style scoped>
.demo {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.map {
  flex: 100% 1 1;
}
</style>
<style>
.map > div {
  height: 100%;
}
</style>