<template>
  <div class="styling" :style="{
    height: `${offset}px`,
    opacity
  }">
    <div class="color-overlay"/>
    <div class="background" :style="{
      backgroundImage: `url(${background})`
    }"/>
  </div>
</template>

<script>
export default {
  name: 'styling',
  props: {
    background: {
      type: String,
      default: require('@/assets/images/header.png')
    }
  },
  data() {
    return {
      offset: 0,
      opacity: 0,
    }
  },
  mounted() {
    this.opacity = 0
    setTimeout(() => {
      this.opacity = 100
      this.handleResize()
    }, 600)
  },
  methods: {
    handleResize() {
      const { offsetHeight, offsetTop } = this.$el.parentNode
      this.offset = offsetHeight + offsetTop
    }
  },
  beforeMount () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="sass" scoped>
@import "@/globals.sass"

.styling
  display: flex
  height: auto
  z-index: -1
  overflow: hidden
  transition: opacity .8s

  &,
  .color-overlay,
  .background
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0

  .color-overlay
    background: linear-gradient(rgba(56, 13, 126, 0.5), rgba(182, 29, 86, 0.5))
    z-index: 1

  .background
    background-size: cover
    background-position: center right
    overflow: hidden
    z-index: 0
    opacity: 90
    @include narrow
      min-height: 0
</style>
