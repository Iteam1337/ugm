<template>
  <div class="background">
    <div class="container">
      <div class="left-content">
        <div class="menu-item" @click="goBack()">
          <div>
            <fa icon="arrow-left" />
          </div>
          Tillbaka till platsen
        </div>
      </div>
      <div class="right-content">
        <img
          v-for="(image, i) in place.images"
          :key="'image' + i"
          :src="image.startsWith('/') ? image : require(`@/assets/${image}`)">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['place'],
  methods: {
    goBack() {
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
    height: 150px
  .right-content
    display: flex
    flex-wrap: wrap
    justify-content: space-evenly
    padding: 0 2rem
    img
      margin: 2rem
      width: 40%
      height: 40%
</style>
