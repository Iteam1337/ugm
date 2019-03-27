<template>
  <main>
    <header>
      <logo class="left" />
      <typeform class="right" />
    </header>

    <article class="container hero top-box">
      <styling :background="background" />

      <div class="hero-title">
        <div class="content">
          <h1 class="title">{{ place.title }}</h1>
        </div>
      </div>

      <div class="content">
        <div class="w-100 flex">
          <div class="solutions-preview-wrap w-100">
            <h2>Solutions</h2>
            <ul class="flex solutions-preview-list">
              <li
                v-for="(solution, i) in place.solutions"
                :key="'solution' + i"
              >
                <router-link :to="{
                  name: 'solution',
                  params: {
                    placeId: place.name,
                    solutionId: solution.name
                  },
                }" class="link">
                  <div class="background" :style="{
                  backgroundImage:
                    solution.sketchfab && solution.sketchfab.thumb
                      ? `url(${require(`@/assets/images/sketchfab-thumbnails/${solution.sketchfab.thumb}`)})`
                      : null
                }"/>
                  <span class="solution"><span class="text">{{solution.title}}</span><arrow /> </span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>

    <article class="container text flex bottom-box">
      <div class="content">
        <div class="flex">
          <div class="w-40 challenges">
            <h1>Challenges</h1>
            <ul>
              <li
                v-for="(challenge, i) in place.challenges"
                :key="'challenge' + i"
              >
                "{{ challenge }}"
              </li>
            </ul>
          </div>

          <div class="w-60 images">
            <ul>
              <li v-for="(image, i) in images" :key="'image' + i">
                <a :href="image.startsWith('/') ? image : require(`@/assets/${image}`)" target="_blank">
                  <img :src="image.startsWith('/') ? image : require(`@/assets/${image}`)">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Typeform from '@/components/Typeform.vue'
import Arrow from '@/components/Arrow.vue'
import Styling from '@/components/Styling.vue'

export default {
  props: [
    'place',
    'images'
  ],
  components: {
    logo: Logo,
    typeform: Typeform,
    arrow: Arrow,
    styling: Styling,
  },
  data() {
    const {
      place: { background: url = '', challenges, solutions, name = '' } = {},
      images
    } = this;

    const imageURL =
      name && name.trim() ? `places/${name}/${url}` : "places-background.png";

    const background = `${
      url.startsWith('/') ? url : require(`@/assets/images/${imageURL}`)
    }`

    function show(array = []) {
      return array && !!array.length;
    }

    return {
      page: 0,
      background,
      show: {
        challenges: show(challenges),
        solutions: show(solutions),
        images: show(images)
      }
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'map' })
    },
    navigate(name, options) {
      this.$router.push({ name })
    },
  }
}
</script>

<style lang="sass" scoped>
  @import "@/globals.sass"

  h1, h2
    padding-left: 1rem
    @include narrow
      padding-left: 0
  a
    cursor: pointer
    text-decoration: none

  .content
    padding: 2em 2em 0 2em
    display: flex
    flex-direction: row

  .challenges
    padding-right: 2em
    li
      margin-bottom: 1rem

  .bottom-box
    padding-bottom: 2em

  .solutions-preview-list
    $height: 200px
    list-style: none
    padding: 0
    flex-flow: row wrap
    justify-content: flex-start

    @include narrow
      flex-flow: column
      justify-content: center

    li
      margin: 1rem
      min-width: 300px
      height: $height
      flex: auto
      border: 1px solid white
      align-items: flex-start
      background: #24002D
      padding: 0
      position: relative
      flex-grow: 0
      @include narrow
        width: 100%
        max-width: 100%
        align-self: center
        justify-content: flex-start

    .background
      position: absolute
      left: 0
      top: 0
      z-index: -1
      width: 100%
      height: 145px
      background-size: cover
      background-position: center right

    .link
      display: inline-block
      min-width: 100%
      height: 100%
      width: 100%
      padding: 20px 20px
      text-align: left
      margin: 0
      position: absolute
      left: 0
      bottom: 0
      z-index: 0

  .solution
    max-width: 300px
    max-width: calc(100% - 40px)
    overflow: hidden
    height: 20px
    line-heigth: 1em
    margin-bottom: 15px
    display: block
    position: absolute
    bottom: 0
    .text
      display: inline-block
      max-width: 200px
      max-width: calc(100% - 40px - .5rem)
      text-overflow: ellipsis
      overflow: hidden
      white-space: nowrap
    svg
      margin-bottom: 6px
      margin-left: .5rem
      flex-shrink: 0

  .hero-title
    display: flex
    align-items: flex-end
    justify-content: flex-end
    .title
      flex-shrink: 0

  .images
    column-count: 2
    column-gap: 2rem
    @include narrow
      column-count: 1
    img
      padding: 2% 2% 2% 0
      width: 100%
    ul
      padding: 0
      margin: 0
    li
      list-style: none
</style>
