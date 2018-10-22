<template>
  <div class="background">
  <div class="overlay">
    <div class="container">
      <div class="left-content">
        <div class="logo">
          <h1>Urban girls movement</h1>
        </div>
        <div class="menu-item" @click="goBack()">
          <div>
            <img src="../assets/icons/left-arrow.svg">
          </div>
          Tillbaka till kartan
        </div>

        <div class="menu-item" style="margin-top: 3rem;" @click="navigate('images')">
          <div>
            <img src="../assets/icons/camera.svg">
          </div>
          Bilder
        </div>
        <div class="menu-item" @click="navigate('challenges')">
          <div>
            <img src="../assets/icons/challenge.svg">
          </div>
          Utmaningar
        </div>
        <div class="menu-item" @click="navigate('ideas')">
          <div>
            <img src="../assets/icons/idea.svg">
          </div>
          Lösningsförslag
        </div>
        <div class="menu-item" @click="navigate('sounds')">
          <div>
            <img>
          </div>
          Ljud
        </div>
      </div>
      <div class="right-content">
        <p v-for="({ beskrivning }, i) in place.texts.slice(0, 5)" :key="'challenge' + i" v-if="beskrivning">
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
    background-image: url('/images/place_background.png');
    width: 100%
    height: 100%
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