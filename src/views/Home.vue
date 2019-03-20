<template>
  <div class="background">
    <div class="overlay">

      <div class="header">
        <div class="color-overlay"></div>
        <div class="background"></div>
      </div>

      <div class="container hero w-100">
        <logo class="logo" />
        <div class="hero-title">
          <h1 class="title">
              Plan a city for girls,<br />and it will work<br />for everyone.
          </h1>
          <ul style="padding: 0">
            <item @click.native="navigate('map')">
              Results & Insights <fa class="navigate-arrow" icon="long-arrow-alt-right" />
            </item>
          </ul>
        </div>
      </div>

      <div class="container text flex">
        <div class="w-100 content">
          <div class="flex">
            <div class="w-50 content">
              <p>
                With the fast pace of urbanization also comes widespread segregation and increasing social gaps. At the same time, world leaders have since 2015 agreed on several global agendas for sustainable development, such as the Paris Agreement, Agenda 2030 and New Urban Agenda. If we are to live up to these ambitious goals depends to a large extent on our societies becoming more inclusive and equal, and fulfilling the socioeconomic needs of the youth of the future. How cities and areas are developed is crucial to people’s quality of life, and can increase the opportunities to education, work and social security for young women and girls in particular.
              </p>
            </div>
            <div class="w-50 content">
              <p>
                So, how do we work with global goals and tools such as feminist urban development on a practical, local level? The ambitions are there, but the practical know-how is limited. Urban Girls Movement Botkyrka wants to increase knowledge in this area, with six so called innovation labs where young girls from the Stockholm suburb Botkyrka together with other stakeholders produce innovative solutions to commonly identified problems in the area.
              </p>
              <p>
                <a href="https://www.globalutmaning.se/urbangirlsmovement/innovationslabb-botkyrka/">
                  Project Backgroud <fa class="navigate-arrow" icon="long-arrow-alt-right" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Logo from '@/components/Logo.vue'
import MenuItem from '@/components/MenuItem.vue'

export default {
  components: {
    logo: Logo,
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
    margin-left: 1em

  .logo
    position: static

  .background
    overflow-x: hidden

  .hero-title
    flex: 1
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    @include narrow
      align-items: flex-start

  .overlay
    background-color: rgba(0, 0, 0, 0.3)
    width: 100%
    height: 100%
    min-height: 100vh
    min-width: 100vw
    overflow-x: hidden

  .flex
    @include narrow
      flex-direction: column-reverse

  .header
    display: block
    min-width: 100%
    min-width: 100vw
    min-height: 809px
    position: absolute
    z-index: -1
    overflow: hidden
    @include narrow
      min-height: 450px

    .color-overlay
      background: linear-gradient(rgba(56, 13, 126, 0.5), rgba(182, 29, 86, 0.5))
      height: 100%
      width: 100%
      display: block
      z-index: 100
      position: absolute
      top: 0
      left: 0
    .background
      min-height: 809px
      width: 100%
      position: absolute
      background-image: url(../assets/images/header.png)
      background-size: cover
      background-position: center center
      overflow: hidden
      z-index: 0
      @include narrow
        min-height: 450px

  .title
    font-size: 50px
    font-size: calc((2vw + 2vh + 1vmin))
    @include narrow
      font-size: 30px
    @include wide
      font-size: 60px
  .content
    padding: 2rem 1rem
    line-height: 1.4
    &.text
      padding: 2rem 0
  .hero
    min-height: 880px
    display: flex
    flex-direction: column
    @include narrow
      min-height: 475px
  .menu-item
    vertical-align: top
    text-align: left
    margin-left: 5rem
    display: block
    margin-top: 1rem
    width: 100%
    @include narrow
      margin-left: 0
  p, .menu-item
    font-size: calc((2vw + 2vh + 1vmin) / 3)
    @include narrow
      font-size: 18px
    @include wide
      font-size: 28px
</style>
