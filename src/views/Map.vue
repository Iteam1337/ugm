<template>
  <div class="full-page">
    <div>
      <div class="h-container">
        <logoCity class="logo" />
        <div class="top-frame"></div>
      </div>
      <GmapMap ref="map" class="full-page" :center="center" :zoom="zoom" :options="options">
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

      <footer class="map-footer">
        <svgButton
          text="View 3D Model"
          link="https://sketchfab.com/models/0f0a3c2db9614e09ab157f8310e9b92d"
        >
          <viewModelIcon />
        </svgButton>
        <svgButton text="Comment" link="https://globalut.typeform.com/to/cz2raF">
          <commentIcon />
        </svgButton>
      </footer>
    </div>

    <article class="container bottom-box">
      <div class="content">
        <div class="flex">
          <div class="w-50 content">
            <p>The #UrbanGirlsMovement project co-run by the independent think tank Global Utmaning and Botkyrka Municipality, in the Stockholm Region, in cooperation with UN-Habitat, Iteam and Mistra Urban Futures. #UrbanGirlsMovement seeks to improve the living conditions for girls and young women in socio-economically vulnerable urban areas through feminist urban planning.</p>
            <p>The initiative is based on the understanding that urban planning is an underutilised tool for bringing about more equal societies. The goal of the UGM innovation labs is to create a space/hub for feminist urban planning in Botkyrka Municipality by letting young girls from the area develop innovative solutions to jointly identified challenges in the public space around Fittja neighbourhood.</p>
          </div>

          <div class="w-50 content">
            <a href="#" class="link">
              <img class="img-width" src="@/assets/images/sketchfab-thumbnails/mapviewpic.jpg" alt />

              <span class="solution">
                <span class="text">Result &amp; recommendations</span>
                <arrow />
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
    viewModelIcon: ViewModelIcon
  },
  data() {
    return {
      center: {
        lat: 59.24771,
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
  .img-width
    max-width: 100%
  .solution .text
    display: inline-block
    padding: 1.5rem 0.75rem 1.5rem 2rem
    font-family: 'Alegreya Sans', sans-serif
    font-size: 18px


.full-page
  position: relative
  display: flex
  height: 100vh
  flex-direction: column

.top-frame 
  position: relative
  width: 80%
  height: 100%
  z-index: 100
  margin: 0 auto
  pointer-events: none
  border: 1px solid white
  border-bottom: none

.bottom-frame 
  position: relative
  width: 80%
  height: 100%
  z-index: 100
  margin: 0 auto
  pointer-events: none
  border: 1px solid white
  border-top: none

.h-container
  position: absolute
  width: 100%
  height: 100%
  top: 0
  left: 0
  overflow: hidden

.logo
  position: relative
  z-index: 10
  left: 10%
  top: 0

  // &:after
  //   display: block
  //   width: 100%
  //   width: 80vw
  //   content: ""
  //   height: 1px
  //   background: white
  //   left: 0
  //   position: absolute
  //   bottom: 0
  //   pointer-events: none
  // &:before
  //   display: block
  //   width: 1px
  //   height: 100vh
  //   content: ""
  //   background: white
  //   left: 0
  //   top: 100%
  //   position: absolute
  //   pointer-events: none


footer
  position: absolute
  z-index: 10
  left: 10%
  bottom: 7em
  a
    margin: 0 2em

  @include narrow
    display: flex
    flex-direction: column
    bottom: 2em
    a
      margin: .5em 0


.bottom-box 
  margin: 0 auto
  margin-bottom: 8rem


.map-marker
  width: 10px
  height: 10px
  background-clip: pink

.map
  flex: 100% 1 1

.map-footer 
  position: absolute;
  right: 15%;
  bottom: 5em;
  left: auto;
  width: auto;
  
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
    &, &:visited, &:hover
      text-decoration: none

    @include narrow
      font-size: 18px
      svg
        margin-left: .2rem
</style>
<style lang="sass">
.map > div
  height: 100%

</style>