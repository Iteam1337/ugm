<template>
  <div class="background">
    <div class="container">
      <ul class="nav">
        <li class="menu-item" @click="goBack()">
          <span>
            <fa icon="arrow-left" />
          </span>
          Tillbaka till platsen
        </li>
      </ul>
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
  }
}
</script>

<style lang="sass" scoped>
  @import "@/globals.sass"

  .background
    width: 100%
    height: 100%
  .container
    height: 100%
    display: flex
    flex-direction: column
  .nav
    display: block
    min-height: 100px
  .image-content
    column-count: 2
    column-gap: 2rem
    @include narrow
      column-count: 1
    @include wide
      column-count: 3
    img
      padding: 2% 2% 2% 0
      width: 100%
</style>
