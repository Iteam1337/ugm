<template>
  <div class="background" :style="{'background-image': background}">
  <div class="overlay">
    <div class="container flex">
      <div class="w-40 nav">
        <router-link to="/" class="logo">
          <h1>Urban girls movement</h1>
        </router-link>

        <div class="menu-item" @click="goBack()">
          <div>
            <fa icon="arrow-left" />
          </div>
          Tillbaka till kartan
        </div>

        <div class="menu-item" style="margin-top: 3rem;" @click="navigate('images')"  v-if="show.images">
          <div>
            <fa icon="camera" />
          </div>
          Bilder
        </div>
        <div class="menu-item" @click="navigate('challenges')" v-if="show.challenges">
          <div>
            <fa icon="exclamation" />
          </div>
          Utmaningar
        </div>
        <div class="menu-item" @click="navigate('solution')" v-if="show.solutions">
          <div>
            <fa icon="lightbulb" />
          </div>
          Lösningsförslag
        </div>
        <div class="menu-item" @click="navigate('sounds')" v-if="show.sounds">
          <div>
            <fa icon="bullhorn" />
          </div>
          Ljud
        </div>
      </div>

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
    &, &:visited
      text-decoration: none
  .background
    background-position: center center
    width: 100%
    height: 100%
    background-size: cover
    position: absolute
  .overlay
    position: absolute
    background-color: rgba(0, 0, 0, 0.5)
    width: 100%
    height: 100%

  .menu-item
    div
      min-width: 50px
      min-height: 50px
  .container
    height: 100%
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
