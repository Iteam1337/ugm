<template>
  <div class="full-page">
    <logoCity class="logo" />
    <div class="top-frame"></div>
    <div class="map-container">
      <GmapMap ref="map" class="map" :center="center" :zoom="zoom" :options="options">
        <GmapMarker
          v-for="(m, index) in markers"
          :key="index"
          :position="m.position"
          :icon="{
          url: require(`@/assets/images/markers/${m.name}.svg`),
          anchor: { x: 60, y: 60 }, // half of svg-size
        }"
          :clickable="true"
          :draggable="false"
          @click="clickMarker(m.name)"
        />
      </GmapMap>
      <div class="content map-footer">
        <svgButton
          class="map-footer-icon"
          text="View 3D Model"
          link="https://sketchfab.com/models/0f0a3c2db9614e09ab157f8310e9b92d"
        >
          <viewModelIcon />
        </svgButton>
        <svgButton
          class="map-footer-icon"
          text="Comment"
          link="https://globalut.typeform.com/to/cz2raF"
        >
          <commentIcon />
        </svgButton>
      </div>
    </div>

    <article class="container bottom-box">
      <div class="content">
        <div class="flex">
          <div class="w-50 content">
            <p>The #UrbanGirlsMovement project co-run by the independent think tank Global Utmaning and Botkyrka Municipality, in the Stockholm Region, in cooperation with UN-Habitat, Iteam and Mistra Urban Futures. #UrbanGirlsMovement seeks to improve the living conditions for girls and young women in socio-economically vulnerable urban areas through feminist urban planning.</p>
            <p>The initiative is based on the understanding that urban planning is an underutilised tool for bringing about more equal societies. The goal of the UGM innovation labs is to create a space/hub for feminist urban planning in Botkyrka Municipality by letting young girls from the area develop innovative solutions to jointly identified challenges in the public space around Fittja neighbourhood.</p>
          </div>

          <div class="w-50 content">
            <a href="/recommendations" class="link">
              <img class="img-width" src="@/assets/images/sketchfab-thumbnails/mapviewpic.jpg" alt />

              <span class="solution">
                <span class="text">
                  Guidelines &amp; Recommendations
                  <arrow />
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import styles from '@/assets/map/styles.json'
import places from '@/assets/map/places.json'
import Logo from '@/components/Logo.vue'
import LogoCity from '@/components/LogoCity.vue'
import SVGButton from '@/components/SVGButton.vue'
import Arrow from '@/components/Arrow.vue'
import CommentIcon from '@/components/CommentIcon.vue'
import ViewModelIcon from '@/components/ViewModelIcon.vue'

export default {
  methods: {
    clickMarker(placeId) {
      this.$router.push({
        name: 'place',
        params: {
          placeId,
        },
      })
    },
  },
  components: {
    logo: Logo,
    logoCity: LogoCity,
    svgButton: SVGButton,
    arrow: Arrow,
    commentIcon: CommentIcon,
    viewModelIcon: ViewModelIcon,
  },
  data() {
    return {
      center: {
        lat: 59.24785,
        lng: 17.860612,
      },
      userPosition: null,
      zoom: 18,
      options: {
        disableDefaultUI: true,
        styles,
      },
      markers: places.map(place => ({
        name: place.name,
        position: place.position,
      })),
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.map.$mapPromise.then(() => {
        const latlon = new google.maps.MVCArray()

        places.forEach(({ position: { lat, lng } }) =>
          latlon.push(new google.maps.LatLng(lat, lng))
        )

        const heatmap = new google.maps.visualization.HeatmapLayer({
          data: latlon,
          map: this.$refs.map.$mapObject,
        })

        heatmap.set('radius', 100)
        heatmap.set('gradient', [
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
        ])
        heatmap.set('opacity', 0.6)
      })
    })
  },
}
</script>

<style lang="sass" scoped>
@import "@/globals.sass"


.link
  display: block
  border: 1px solid white
  margin: 0 2rem
  .img-width
    max-width: 100%
  .solution .text
    display: inline-block
    padding: 1rem 0.75rem 1.5rem 2rem
    font-family: 'Alegreya Sans', sans-serif
    font-size: 100%;
    text-decoration: underline
    &:hover 
      text-decoration: none


.full-page
  position: relative
  display: flex
  flex-direction: column


.logo
  position: relative
  z-index: 10
  left: 10%
  top: 0


.map-container
  position: absolute
  display: flex
  height: 90vh
  width: 100vw
  flex-direction: column

.content
  padding: 0
  line-height: 1.4
  @include narrow
    padding: 0
  &.text
    padding: 2rem 0
  
.map
  flex: 100% 1 1

.map-footer 
  position: absolute
  right: 10%
  bottom: 5em
  left: auto
  width: auto
  @include narrow
    right: 0
    left: 10%
    bottom: 3rem

.top-frame 
  position: relative
  width: 80%
  z-index: 100
  margin: 0 auto
  pointer-events: none
  border-top: 1px solid white
  

.bottom-box 
  margin: 0 auto
  margin-bottom: 8rem
  margin-top: 80vh
  border-top: 1px solid white

.map-marker
  width: 10px
  height: 10px
  background-clip: pink

.content p:first-of-type
  margin-top: 0

article
  > .content
    padding: 5rem 2rem 3rem
    font-size: calc((2vw + 2vh + 1vmin) / 3)
    @include narrow
      font-size: 18px
    @include wide
      font-size: 28px
  p
    padding: 0 2rem

    @include narrow
      padding: 0
  a
    font-size: 120%
    svg
      margin: 0 0 0 .5em
    &:visited, &:hover
      text-decoration: none

    @include narrow
      font-size: 18px
      svg
        margin-left: .2rem
.map > div
  height: 100%

</style>
