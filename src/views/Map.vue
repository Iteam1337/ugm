<template>
	<div class="simple-map demo">
    <router-link to="/">
      <div class="logo">
        <h1>Urban girls movement</h1>
      </div>
    </router-link>
		<GmapMap
			ref="map"
			class="map"
			:center="center"
			:zoom="zoom"
      :options="options"
		>

    <GmapMarker
      v-for="(m, index) in markers"
      style="position: relative; margin-top: 1rem;"
      :key="index"
      :position="m.position"
      :icon="m.icon"
      :clickable="true"
      :draggable="false"
      @click="clickMarker(m.name)"
    />
		</GmapMap>
	</div>
</template>

<script>

import styles from '../assets/map/styles.json'
import places from '../assets/map/places.json'

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
        disableDefaultUI : true,
        styles
      },
      markers: places
        .map(place => ({ name: place.name, position: place.position }))
		}
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.map.$mapPromise.then(() => {
        let latlon = new google.maps.MVCArray();
        places.forEach(p => {
          // latlon.push(new google.maps.LatLng(p.position.lat - 0.00001, p.position.lng - 0.00001))
          latlon.push(new google.maps.LatLng(p.position.lat, p.position.lng))
          // latlon.push(new google.maps.LatLng(p.position.lat + 0.00001, p.position.lng + 0.00001))
        })
        const heatmap = new google.maps.visualization.HeatmapLayer({
          data: latlon,
          map: this.$refs.map.$mapObject
        })
        heatmap.set('radius', 100);
        var gradient = [
          'rgba(255, 255, 255, 0)',
          'rgba(87, 95, 207, 0.4)',
          'rgba(62, 141, 181, 0.6)',
          'rgba(37, 186, 154, 0.6)',
          'rgba(12, 232, 128, 0.6)',
          'rgba(12, 232, 128, 0.8)',
          '#5AAE6D',
          '#C16253',
          '#DB4E4C',
          '#F53B46',
        ]
        heatmap.set('gradient', gradient)
        heatmap.set('opacity', 0.6)
      })
    })
  }
}
</script>

<style scoped>
.logo {
  position: absolute;
  z-index: 10;
  left: 10%;
  top: 0;
}
.map-marker {
  width: 10px;
  height: 10px;
  background-clip: pink;
}
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
