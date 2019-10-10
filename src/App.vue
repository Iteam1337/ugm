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
      isLoading: true,
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
    min-width: 320px
    overflow-x: hidden
    @include narrow
      overflow-x: auto

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

  main
    width: 100%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    overflow-x: hidden
    min-width: 320px
    max-width: 1440px
    margin: 0 auto

    header
      display: flex
      align-items: center
      > a
        display: flex
        width: auto
      .left
        padding-left: 0
      .right
        margin-left: auto

    header,
    nav
      width: 80%
      padding: 0

    nav,
    article
      padding: 2em

    @include narrow
      padding: 0
      article
        width: 100%
      header, nav, article
        padding: 0

  #app
    height: 100%

  .container
    width: 80%
    margin: 0 auto

  .content
    padding: 2em 2em 0 2em
    p 
      line-height: 1.6


  .container,
  .content
    @include narrow
      padding: 0 1.5em

  a
    color: white
    font-weight: 500
    text-transform: lowercase
    font-variant: small-caps

  .button
    min-width: 200px
    background: #24002d
    border: 1px solid white
    box-sizing: border-box
    padding: 1.5em 2em
    margin: 0
    text-transform: uppercase
    display: inline-block
    text-align: center
    &, &:hover, &:visited
      text-decoration: none
    @include narrow
      min-width: 100px
      font-size: 90%
      padding: 1em 1.5em

  .text-medium
    font-size: 1.25em

  .fade
    &-enter,
    &-leave,
      &, &-to
        opacity: 0
      &-active
        transition: opacity .5s

  .flex
    display: flex
    @include narrow
      flex-direction: column
    p
      padding: 0 20px

  h1, h2
    font-family: 'Libre Baskerville'
    font-weight: bold
  h3, h4, h5, h6
    font-family: 'Alegreya Sans', sans-serif
    font-weight: 100

  .logo
    margin-top: 0
    font-family: 'Alegreya Sans', sans-serif
    font-weight: 100
    &, &:visited
      text-decoration: none

  .top,
  .bottom
    &-box
      padding: 0
      margin: 0

  .top-box
    border: 1px solid white
    border-bottom-style: none
    overflow: hidden

  .bottom-box
    border: 1px solid white
    border-top-style: none
    margin-bottom: 3em

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
