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
              <li v-for="(solution, i) in place.solutions" :key="'solution' + i" class="flex">
                <div>
                  <router-link :to="{
                    name: 'solution',
                    params: {
                      placeId: place.name,
                      solutionId: solution.name
                    },
                  }">
                    {{solution.title}}
                  </router-link>
                  <arrow />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>

    <article class="container text flex bottom-box">
      <div class="content">
        <div class="flex">
          <div class="w-50 challenges">
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

          <div class="w-50 images">
            <ul>
              <li v-for="(image, i) in images" :key="'image' + i">
                <img :src="image.startsWith('/') ? image : require(`@/assets/${image}`)">
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
      console.log({ name, options })
      // this.$router.push({ name })
    }
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
    padding: 5% 5% 0 5%
    display: flex
    flex-direction: row

  .challenges
    li
      margin-bottom: 1rem

  .solutions-preview-list
    list-style: none
    padding: 0
    flex-flow: row wrap
    justify-content: flex-start
    @include narrow
      flex-flow: column
      justify-content: center

    li
      margin: 1rem
      width: 400px
      height: 200px
      flex: auto
      border: 1px solid white
      align-items: flex-end
      background: white
      @include narrow
        width: 100%
        align-self: center
        justify-content: flex-end
      div
        width: 100%
        height: 50px
        background: #24002d
        align-items: center
        padding: 1rem
        letter-spacing: 1.25px
        svg
          margin-left: 1rem
          flex-shrink: 0

  .main
    z-index: 10
    position: relative

  .hero-title
    display: flex
    align-items: flex-end
    justify-content: flex-end
    .title
      flex-shrink: 0

  .images
    display: flex
    flex-flow: row wrap
    ul
      @include narrow
        padding-left: 0
    li
      list-style: none
    img
      display: flex
      margin-bottom: 2rem
      max-width: 100%
      max-height: auto
</style>
