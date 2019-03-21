<template>
  <div class="background">
    <div class="container">
      <ul class="nav">
        <item @click.native="navigate('map')">
          <fa class="navigate-arrow" icon="long-arrow-alt-left" /> Tillbaka till kartan
        </item>
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
import MenuItem from '@/components/MenuItem.vue'

export default {
  props: [
    'place',
    'images'
  ],
  components: {
    item: MenuItem,
  },
  methods: {
    navigate(name) {
      this.$router.push({ name })
    },
  },
}
</script>

<style lang="sass" scoped>
  @import "@/globals.sass"
  .navigate-arrow
    margin-right: 1em
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
