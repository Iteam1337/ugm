<template>
  <div class="styling">
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
}
</script>

<style lang="sass" scoped>
@import "@/globals.sass"

.styling
  display: flex
  min-width: 100%
  min-width: 100vw
  position: absolute
  z-index: -1
  overflow: hidden
  left: 0
  top: 0
  .color-overlay
    background: linear-gradient(rgba(56, 13, 126, 0.5), rgba(182, 29, 86, 0.5))
    height: 100%
    width: 100%
    display: block
    z-index: 1
    position: absolute
    top: 0
    left: 0
  .background
    min-height: 809px
    width: 100%
    display: flex
    background-size: cover
    background-position: center right
    overflow: hidden
    z-index: 0
    @include narrow
      min-height: 0
</style>
