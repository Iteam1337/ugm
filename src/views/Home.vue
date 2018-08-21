<template>
  <div>
    <h1 class="title wow fadeIn" data-wow-duration="5s">Urban Girls Movement</h1>

    <div class="container">
      <div class="flex">
        <div class="w-60 wow fadeIn p-r-10" data-wow-delay="1s" data-wow-duration="4s">
          <p class="text-medium wow fadeInDown" data-wow-delay="500ms" data-wow-duration="3s">
            Urban Girls Movement is a project where young girls from Botkyrka in Sweden. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia veritatis nam iusto reiciendis quia quae natus error provident, at, ex quisquam, temporibus optio aliquid excepturi illum laudantium iure quasi laborum!
          </p>

          <p class="text-medium wow fadeInDown" data-wow-delay="1s" data-wow-duration="2s">
            <a href="#">Read more about the project</a>
          </p>
        </div>
        <div class="w-40 wow fadeIn" data-wow-delay="1s" data-wow-duration="4s">
          <router-link to="/reality" :class="{ 'reality-zoom': realityShown }" class="nav-link reality wow fadeInRight" data-wow-delay="1200ms" data-wow-duration="3s">Reality</router-link>
          <router-link to="/dream" class="nav-link dream wow fadeInRight" data-wow-delay="1800ms" data-wow-duration="3s">Dream</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  .title
    position: relative
    font-weight: 900
    text-transform: uppercase
    font-size: 270px
    font-size: 16vw
    word-spacing: 100vw
    margin: 30px -40px 60px -20px
    background-image: url(../assets/title-background.png)
    background-size: cover
    background-clip: text
    -webkit-background-clip: text
    color: rgba(white, 0.3)
    line-height: 0.9
    z-index: 100

    &, &:after
      padding-left: 20px
      overflow: hidden
      max-width: 100%
      max-width: calc(100vw - 40px)

    @media screen and (min-width: 1600px)
      font-size: 270px

    &:after
      content: 'Urban Girls Movement'
      position: absolute
      top: 0
      left: 0
      height: 100%
      color: transparent
      background: linear-gradient(178.81deg, rgba(46, 46, 46, 0.52) 1.64%, rgba(178, 33, 87, 0.46) 48.66%, rgba(182, 29, 86, 0.84) 98.36%)
      background-clip: text
      -webkit-background-clip: text

  .nav-link
    display: block
    position: relative
    font-weight: 900
    text-transform: uppercase
    font-size: 112px
    background-image: url(../assets/nav-link-background.png)
    background-size: cover
    background-clip: text
    -webkit-background-clip: text
    color: rgba(white, 0.2)
    line-height: 1
    z-index: 100

    &:hover
      color: rgba(white, 0.5)

    &:after
      content: 'Reality'
      position: absolute
      top: 0
      left: 0
      height: 100%
      width: 100%
      color: transparent
      background: linear-gradient(0deg, rgba(29, 99, 182, 0.36) 0%, rgba(29, 99, 182, 0.36) 100%)
      background-clip: text
      -webkit-background-clip: text

    &.reality
      text-decoration-color: rgba(29, 99, 182, 0.6)
      margin-bottom: 0.25em

      &:after
        content: 'Reality'
        background-image: linear-gradient(0deg, rgba(29, 99, 182, 0.36) 0%, rgba(29, 99, 182, 0.36) 100%)

    &.dream
      text-decoration-color: rgba(182, 29, 86, 0.6)

      &:after
        content: 'Dream'
        background-image: linear-gradient(0deg, rgba(182, 29, 86, 0.36) 0%, rgba(182, 29, 86, 0.36) 100%)
</style>

