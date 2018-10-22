<template>
  <div id="app">
    <transition name="fade">
      <loading v-if="isLoading" v-bind:is-loading="isLoading" v-on:done="onDone" />
      <router-view v-if="!isLoading" />
    </transition>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Loading from '@/components/Loading.vue'
  import * as VueGoogleMaps from 'vue2-google-maps'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCKC_OzJnT1jUluk0fsyS9RPl6JzIaOzYs',
      libraries: ['places', 'visualization'],
    },
  })

  export default {
    name: 'app',
    components: {
      loading: Loading
    },
    data() {
      return {
        isLoading: true
      }
    },
    methods: {
      onDone() {
        this.isLoading = false
      }
    }
  }
</script>

<style lang="sass">
  @import "~/node_modules/normalize.css/normalize.css"

  *
    box-sizing: border-box
  html
    height: 100%

  ::selection
    color: white
    background: #9F405B

  body
    height: 100%
    background: black
    color: white
    font-family: Roboto
    margin: 0

  #app
    height: 100%

  .container
    width: 80%
    margin: 0 auto

  a
    color: white
    font-weight: 500

  .text-medium
    font-size: 1.25em

  .fade-enter-active, .fade-leave-active
    transition: opacity .5s
  .fade-enter, .fade-leave-to
    opacity: 0

  .flex
    display: flex

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

  .menu-item
    cursor: pointer
    margin-top: 2rem
    display: flex
    align-items: center
    text-decoration: underline
    div
      margin-right: 1rem
      width: 50px
      height: 50px
      display: flex
      justify-content: center
      align-items: center
      border: 2px solid white
      border-radius: 50%
      img
        width: 50%
        height: 50%

  $spacing-base: 8px
  @for $size from -20 through 20
    @each $type, $short-type in (margin: m, padding: p)
      @each $direction, $short-direction in (top: t, right: r, bottom: b, left: l)
        .#{$short-type}-#{$short-direction}-#{$size}
          #{$type}-#{$direction}: $size * $spacing-base

      .#{$short-type}-#{$size}
        #{$type}: $size * $spacing-base

      .#{$short-type}-x-#{$size}
        #{$type}-left: $size * $spacing-base
        #{$type}-right: $size * $spacing-base

      .#{$short-type}-y-#{$size}
        #{$type}-top: $size * $spacing-base
        #{$type}-bottom: $size * $spacing-base

  @each $size in (90, 80, 70, 60, 50, 40, 30, 20, 10)
    .w-#{$size}
      width: $size * 1%
</style>
