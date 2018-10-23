<template>
  <div class="background">
    <div class="container">
      <div class="top-content">
        <div class="menu-item" @click="goBack()">
          <div>
            <fa icon="arrow-left" />
          </div>
          Tillbaka till platsen
        </div>
      </div>
      <div class="image-content">
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
  .top-content
    display: flex
    flex-direction: column
    height: 150px
  .image-content
    column-count: 2
    column-gap: 2rem
    img
      padding: 2% 2% 2% 0
      width: 100%
</style>
