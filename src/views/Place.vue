<template>
  <div class="page-content">
    <div class="header">
      <logo class="logo" />
    </div>
    <div class="side-menu">
      <div class="side-menu-items">
        <div v-if="show.challenges">
          <i :class="{ selected: page === 1 }" />
          <span :class="{ 'text-selected': page === 1 }" @click="scrollTo(1)">
            Utmaningar
          </span>
        </div>
        <div v-if="show.images">
          <i :class="{ selected: page === 2 }" />
          <span :class="{ 'text-selected': page === 2 }" @click="scrollTo(2)">
            Bilder
          </span>
        </div>
        <div v-if="show.solutions">
          <i :class="{ selected: page === 3 }" />
          <span :class="{ 'text-selected': page === 3 }" @click="scrollTo(3)">
            Lösningsförslag
          </span>
        </div>
      </div>
    </div>
    <div class="pages">
      <div class="page">
        <div class="background">
          <div class="color-overlay"></div>
          <div class="background-image" :style="{ backgroundImage: background }">
          </div>
        </div>
        <div class="page-content" v-if="show.challenges">
          <h1 class="quoute">
            "{{ place.challenges[0] }}"
          </h1>
        </div>
      </div>
      <div class="page" id="page1">
        <div class="page-content" v-if="show.challenges">
          <h1>Utmaningar</h1>
          <div class="quotes">
            <span v-for="(challenge, i) in place.challenges" :key="'challenge' + i">
              "{{ challenge }}"
            </span>
          </div>
        </div>
      </div>
      <div class="page" id="page2">
        <div class="page-content" v-if="show.images">
          <h1>Bilder</h1>
          <div class="image-content">
            <img
              v-for="(image, i) in images"
              :key="'image' + i"
              :src="image.startsWith('/') ? image : require(`@/assets/${image}`)">
          </div>
        </div>
      </div>
      <div class="page" id="page3">
        <div class="page-content" v-if="show.solutions">
          <h1>Lösningsförslag</h1>
          <div class="quotes">
            <span v-for="(solution, i) in place.solutions" :key="'solution' + i">
              "{{ solution }}"
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  props: [
    'place',
    'images',
  ],
  components: {
    logo: Logo,
  },
  data() {
    const { place = {}, images } = this

    const {
      background: url = '',
      challenges,
      solutions,
      name = '',
    } = place

    const imageURL = name && name.trim()
      ? `places/${name}/${url}`
      : 'places-background.png'

    const background = `url(${
      url.startsWith('/')
        ? url :
        require(`@/assets/images/${imageURL}`)
    })`

    function show (array = []) {
      return array && !!array.length
    }

    return {
      page: 0,
      background,
      show: {
        challenges: show(challenges),
        solutions: show(solutions),
        images: show(images),
      }
    }
  },
  methods: {
    scrollTo (page) {
      document.getElementById(`page${page}`).scrollIntoView()
    },
    goBack () {
      this.$router.push({ name: 'map'})
    },
    navigate (name) {
      this.$router.push({ name })
    },
    handleScroll(event) {
      const scrollTop = window.pageYOffset !== undefined
        ? window.pageYOffset
        : (document.documentElement || document.body.parentNode || document.body).scrollTop

      this.page = Math.floor(scrollTop / window.innerHeight)
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="sass" scoped>
  @import "@/globals.sass"

  a
    cursor: pointer

  .background
    left: 0
    top: 0
    position: absolute
    display: block
    min-width: 100vw
    min-height: 100vh
    z-index: -1
    overflow: hidden
    @include narrow
      min-height: 400px
    .color-overlay
      background: rgba(182, 29, 86, 0.5)
      height: 100%
      width: 100%
      display: block
      z-index: 100
      position: absolute
      top: 0
      left: 0
    .background-image
      height: 100%
      width: 100%
      position: absolute
      background-size: cover
      background-position: center center
      overflow: hidden
      z-index: 0

  .page-content
    padding: 5%
  .header
    width: 90%
    height: 150px
    position: absolute
    display: flex
    justify-content: space-between
  .header-links
    width: 500px
    display: flex
    font-size: 20px
    letter-spacing: 1.5px
    text-transform: uppercase
    justify-content: space-around
    align-items: center
    @include narrow
      display: none

  .content
    padding: 5%
    display: flex
    flex-direction: row
  .side-menu
    @include narrow
      position: absolute
      padding: 0
      margin-top: 0
      width: 100%
      .back
        position: absolute
        right: 40px
    margin-top: 150px
    padding-top: 5%
    position: fixed
    width: 33%
    text-transform: uppercase
    letter-spacing: 1.5px
    flex: 1
    .side-menu-items
      @include narrow
        display: none
      display: none
      padding-top: 20%
      display: flex
      flex-direction: column
      div
        position: relative
        margin-left: 10px
        height: 80px
        border-left: 1px solid white
        display: flex
        &:nth-child(3)
          border-left: none
        i
          background: #24002D
          position: absolute
          left: -10px
          top: -4px
          width: 20px
          height: 20px
          border: 1px solid white
          border-radius: 50%
        .selected
          background: #fff
        span
          cursor: pointer
          margin-top: -8px
          font-size: 20px
          font-weight: 300
          margin-left: 25px
        .text-selected
          text-decoration: underline

  .pages
    display: flex
    flex-direction: column
  .page
    width: 100%
    min-height: 100vh
    padding-left: 33%
    @include narrow
      padding-left: 0
      min-height: 400px
      padding-top: 100px
      &:nth-child(2)
        padding-top: 0
    &:nth-child(1)
      padding-top: 150px
    .page-content
      width: 100%
      height: 100%

  .quoute
    margin-top: 20%
    font-size: calc(2vw + 2vh + 1vmin)
    align-self: center
    font-family: 'Libre Baskerville', serif
    @include narrow
      font-size: 25px
  .quotes
    display: flex
    flex-wrap: wrap
    span
      padding: 1rem
      width: 50%
      height: 100px
  .image-content
    column-count: 3
    column-gap: 2rem
    @include narrow
      column-count: 1
    @include wide
      column-count: 3
    img
      padding: 2% 2% 2% 0
      width: 100%
</style>
