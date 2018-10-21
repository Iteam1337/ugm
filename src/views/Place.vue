<template>
  <div class="background">
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
        <p>
          “Jag tycker att det viktigaste var nog det här med att vara en tjej och gå runt i de olika områden, jag tror de flesta inklusive mig själv tycker inte att det är ganska tryggt att gå t.ex. genom en grupp killar med mask och stora jackor man vet aldrig vad de kan göra.”
        </p>
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
    width: 100%
    height: 100%
  .container
    height: 100%
    display: flex
  .left-content
    display: flex
    flex-direction: column
  .right-content
    display: flex
    justify-content: flex-end
    padding: 2rem
    p
      width: 75%
  .logo
    width: 248px
    height: 224px
    padding: 2rem 1.5rem
    background-color: #FF305E
    font-size: 18px
    display: flex
    align-items: flex-end
    h1
      margin: 0
      text-transform: uppercase
</style>