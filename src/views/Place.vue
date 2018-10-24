<template>
  <div class="background" :style="{'background-image': background}">
    <div class="overlay">

      <div class="container flex">
        <div class="w-100">
          <router-link to="/" class="logo">
            <h1>Urban girls movement</h1>
          </router-link>
        </div>
      </div>

      <div class="container flex">
        <ul class="w-40 nav">
          <li class="menu-item" @click="goBack()">
            <span>
              <fa icon="arrow-left" />
            </span>
            Tillbaka till kartan
          </li>

          <li class="menu-item" style="margin-top: 3rem;" @click="navigate('images')"  v-if="show.images">
            <span>
              <fa icon="camera" />
            </span>
            Bilder
          </li>

          <li class="menu-item" @click="navigate('challenges')" v-if="show.challenges">
            <span>
              <fa icon="exclamation" />
            </span>
            Utmaningar
          </li>

          <li class="menu-item" @click="navigate('solution')" v-if="show.solutions">
            <span>
              <fa icon="lightbulb" />
            </span>
            Lösningsförslag
          </li>

          <li class="menu-item" @click="navigate('sounds')" v-if="show.sounds">
            <span>
              <fa icon="bullhorn" />
            </span>
            Ljud
          </li>
        </ul>

        <div class="w-60 content">
          <p v-for="({ beskrivning }, i) in place.texts.slice(0, 5)" :key="'description' + i" v-if="beskrivning">
            "{{ beskrivning }}"
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['place'],
  data() {
    const { place } = this
    const { background: url, texts, images, sounds } = place

    const challenges = texts.some(object => object.utmaningar)
    const solutions = texts.some(object => object.förslag)
    const background = `url(${url.startsWith('/') ? url : require(`@/assets/${url}`)})`

    return {
      background,
      show: {
        challenges,
        solutions,
        images: !!(images || []).length,
        sounds: !!(sounds || []).length,
      }
    }
  },
  methods: {
    goBack () {
      this.$router.push({ name: 'map'})
    },
    navigate (name) {
      this.$router.push({ name })
    }
  },
}
</script>

<style lang="sass" scoped>
  .logo
    margin-top: 0
    &, &:visited
      text-decoration: none

  .background
    background-position: center center
    width: 100%
    min-height: 100vh
    background-size: cover
    // background-attachment: fixed

  .overlay
    background-color: rgba(0, 0, 0, 0.5)
    width: 100%
    min-height: 100%
    position: absolute

  .menu-item
    span
      min-width: 50px
      min-height: 50px

  .nav
    display: flex
    flex-direction: column

  .content
    flex: 1
    display: flex
    align-items: flex-start
    justify-content: space-evenly
    flex-direction: column
    padding: 2rem
    p
      max-width: 400px
</style>
