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
import places from '../assets/places.json'

export default {
  methods: {
    clickMarker(name){
      this.$router.push({ name: 'place', params: { placeId: name } })
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
      markers: places
        .map(place => ({ name: place.name, position: place.position}))
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