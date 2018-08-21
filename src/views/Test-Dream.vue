<template>
  <div class="background dream">
    <div class="container">
      <div class="flex">

        <div class="point nr-1">
          <span class="block"><fa class="fa-border" @click="point1Visible = !point1Visible"  icon="camera" /></span>
          <div class="fa-border w-40" v-if="point1Visible">
            <p>POINT 1</p>
          </div>
        </div>

        <div class="point nr-2">
          <span class="block"><fa class="fa-border" @click="point2Visible = !point2Visible" icon="quote-right" /></span>

          <div class="fa-border w-40" v-if="point2Visible">
            <p>POINT 2</p>
          </div>
        </div>

        <div class="info w-60">
          <p class="text-medium">
            Phasellus faucibus molestie nisl.
            Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante.
            Nullam eget nisl.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        point1Visible: false,
        point2Visible: false
      }
    },
    methods: {
    }
  }
</script>

<style lang="sass">
  .dream
    &.background
      background: url(../assets/nav-link-background.png) no-repeat center center fixed
      background-size: cover
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%

    .info
      position: fixed
      bottom: 0
      max-width: 50vw
      font-size: 2vw

    .block
      font-size: 2vw
      text-align: center
      .fa-border
        background: rgba(0,0,0,.5)
        width: 1em
        height: 1em
        padding: .5em
        border-color: rgba(255,255,255,.5)
        border-width: .05em
        border-radius: 100%

    .point
      position: fixed
      &.nr-1
        left: 15%
        top: 10%
      &.nr-2
        left: 70%
        top: 40%

</style>
