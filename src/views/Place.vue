<template>
  <div class="page-content">
    <div class="styling">
      <div class="color-overlay"/>
      <div class="background" :style="{
        backgroundImage: background
      }"/>
    </div>

    <div class="main">
      <div class="header">
        <div class="logo">
          <logo />
        </div>
        <div class="link">
          <typeform />
        </div>
      </div>

      <div class="boxed-content">
        <div class="container hero w-100 top-box">
          <div class="hero-title">
            <div class="w-100 content">
              <h1 class="title">{{ place.title }}</h1>
            </div>
          </div>
          <div class="w-100 content">
            <div class="flex">
              <div class="w-100">
                <h2>Solutions</h2>
                <ul>
                  <li v-for="(solution, i) in place.solutions" :key="'solution' + i">
                    <router-link :to="{
                      name: 'solution',
                      params: {
                        placeId: place.name,
                        solutionId: solution.name
                      },
                    }">
                      {{solution.title}}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="container text flex bottom-box">
          <div class="w-100 content">
            <div class="flex">
              <div class="w-50 challenges">
                <h2>Challenges</h2>
                <ul>
                  <li
                    v-for="(challenge, i) in place.challenges"
                    :key="'challenge' + i"
                  >"{{ challenge }}"</li>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Typeform from '@/components/Typeform.vue'

export default {
  props: [
    'place',
    'images'
  ],
  components: {
    logo: Logo,
    typeform: Typeform
  },
  data() {
    const {
      place: { background: url = '', challenges, solutions, name = '' } = {},
      images
    } = this;

    const imageURL =
      name && name.trim() ? `places/${name}/${url}` : "places-background.png";

    const background = `url(${
      url.startsWith('/') ? url : require(`@/assets/images/${imageURL}`)
    })`

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
};
</script>

<style lang="sass" scoped>
  @import "@/globals.sass"

  a
    cursor: pointer

  .content
    padding: 5%
    display: flex
    flex-direction: row

  .header,
    display: flex
    margin: 0 130px
    padding: 0
    align-items: center
    justify-content: center

    .logo,
    .link
      width: auto
    .link
      margin-left: auto
    .logo
      padding-left: 0
</style>
