<template>
  <div class="background">
  <div class="overlay">
    <div class="container">
      <div class="left-content">
        <router-link to="/">
          <div class="logo">
            <h1>Urban girls movement</h1>
          </div>
        </router-link>

        <div class="menu-item" @click="goBack()">
          <div>
            <fa icon="arrow-left" />
          </div>
          Tillbaka till kartan
        </div>

        <div class="menu-item" style="margin-top: 3rem;" @click="navigate('images')">
          <div>
            <fa icon="camera" />
          </div>
          Bilder
        </div>
        <div class="menu-item" @click="navigate('challenges')">
          <div>
            <fa icon="exclamation" />
          </div>
          Utmaningar
        </div>
        <div class="menu-item" @click="navigate('solution')">
          <div>
            <fa icon="lightbulb" />
          </div>
          Lösningsförslag
        </div>
        <div class="menu-item" @click="navigate('sounds')">
          <div>
            <fa icon="bullhorn" />
          </div>
          Ljud
        </div>
      </div>
      <div class="right-content">
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
  .background
    background-image: url(../assets/images/place-background.png)
    width: 100%
    height: 100%
    background-size: cover
    position: absolute
  .overlay
    position: absolute
    background-color: rgba(0, 0, 0, 0.5)
    width: 100%
    height: 100%

  .container
    height: 100%
    display: flex
  .left-content
    display: flex
    flex-direction: column
  .right-content
    flex: 1
    display: flex
    align-items: flex-end
    justify-content: space-evenly
    flex-direction: column
    padding: 2rem
    p
      width: 50%
</style>
