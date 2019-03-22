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
      loading: Loading,
    },
    data() {
      return {
        isLoading: true
      }
    },
    methods: {
      onDone() {
        this.isLoading = false
      },
    },
  }
</script>

<style lang="sass">
  @import "~/node_modules/normalize.css/normalize.css"
  @import "@/globals.sass"

  *
    box-sizing: border-box
  html
    height: 100%
    scroll-behavior: smooth
    max-width: 100%
    max-width: 100vw
    overflow-x: hidden

  ::selection
    color: white
    background: #9F405B

  body
    height: 100%
    background: #24002d
    color: white
    font-family: 'Alegreya Sans', sans-serif
    font-weight: 100
    margin: 0

  #app
    height: 100%

  .container
    width: 80%
    margin: 0 auto

  a
    color: white
    font-weight: 500

  .button
    min-width: 250px
    background: #24002d
    border: 1px solid white
    box-sizing: border-box
    padding: 1.5em 2em
    margin: 0
    text-transform: uppercase
    &, &:hover, &:visited
      text-decoration: none

  .text-medium
    font-size: 1.25em

  .fade-enter-active, .fade-leave-active
    transition: opacity .5s
  .fade-enter, .fade-leave-to
    opacity: 0

  .flex
    display: flex
    @include narrow
      flex-direction: column
    p
      padding: 0 20px

  .nav
    margin: 0
    display: flex

    @include narrow
      flex-direction: column
      margin: 0
      align-items: flex-start

  h1, h2
    font-family: 'Libre Baskerville'
    font-weight: normal
    
  .logo
    margin-top: 0
    font-family: 'Alegreya Sans', sans-serif
    font-weight: 100
    &, &:visited
      text-decoration: none

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

  @each $size in (100, 90, 80, 70, 60, 50, 40, 30, 20, 10)
    .w-#{$size}
      width: $size * 1%
      @include narrow
        width: 100%

</style>
