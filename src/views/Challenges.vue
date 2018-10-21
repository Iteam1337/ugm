<template>
  <div class="background">
    <div class="container">
      <div class="left-content">
        <div class="menu-item" @click="goBack()">
          <div>
            <img src="../assets/icons/left-arrow.svg">
          </div>
          Tillbaka till platsen
        </div>
      </div>
      <div class="right-content">
        <p v-for="(challenge, i) in place.challenges" :key="'challenge' + i">
          {{ challenge }}
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
      this.$router.push({ name: 'place', params: { placeId: this.place.name } })
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
    flex-direction: column
  .left-content
    display: flex
    flex-direction: column
  .right-content
    display: flex
    flex-wrap: wrap
    padding: 2rem
    p
      margin: 2rem
      width: 40%
</style>