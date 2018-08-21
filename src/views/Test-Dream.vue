<template>
  <div class="background dream">
    <div class="container">
      <div class="flex">
        <span class="block point-nr-1"><fa class="fa-border" icon="camera" /></span>
        <span class="block point-nr-2"><fa class="fa-border" icon="quote-right" /></span>

        <div class="info">
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
  export default {}
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
        width: 1em
        height: 1em
        padding: .5em
        border-width: .05em
        border-radius: 100%

    .point-nr-1,
    .point-nr-2
      position: fixed

    .point-nr-1
      left: 15%
      top: 10%

    .point-nr-2
      left: 70%
      top: 40%

</style>
