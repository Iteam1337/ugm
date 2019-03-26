<template>
  <main>
    <header>
      <logo class="left" />
    </header>

    <article class="container hero top-box">
      <styling />
      <div class="hero-title">
        <h1 class="title">
          Plan a city for girls,<br />and it will work<br />for everyone.
        </h1>
      </div>

      <div class="hero-link w-50">
        <router-link to="/map" class="link" >
          Results &amp; Insights <arrow />
        </router-link>
      </div>
    </article>

    <article class="container bottom-box">
      <div class="content">
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
              <a class="link" target="_blank" href="https://www.globalutmaning.se/urbangirlsmovement/innovationslabb-botkyrka/">
                Project Background <arrow />
              </a>
            </p>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>

import Logo from '@/components/Logo.vue'
import MenuItem from '@/components/MenuItem.vue'
import Arrow from '@/components/Arrow.vue'
import Dash from '@/components/svg/Dash.vue'

import Styling from '@/components/Styling.vue'

export default {
  components: {
    logo: Logo,
    item: MenuItem,
    arrow: Arrow,
    styling: Styling,
    dash: Dash,
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

  .hero
    display: flex
    flex-direction: column

    font-size: 50px
    font-size: calc((2vw + 2vh + 1vmin) / 2)
    @include narrow
      font-size: 30px
    @include wide
      font-size: 52px
    &-title
      display: flex
      align-items: flex-end
      justify-content: flex-end
      align-items: center
      flex-shrink:
      justify-content: center
      padding: 10rem 4rem 0
      @include narrow
        padding-top: 1rem

    &-link
      align-items: flex-end
      flex-shrink: 0
      justify-content: flex-end
      padding: 0 4rem 10rem 0
      margin-left: auto
    a
      font-size: 80%

    &-link,
    &-title
      display: flex

      @include narrow
        align-items: flex-start
        padding-left: 2rem
        padding-right: 2rem

  .flex
    @include narrow
      flex-direction: column

  .top-box,
  .bottom-box
    padding: 0

  .bottom-box
    position: relative
    &:before
      width: 1px
      background: white
      display: block
      height: 120px
      content: ''
      position: absolute
      left: 0
      right: 0
      top: -60px
      margin: 0 auto
      z-index: -1
      padding: 0
      @include narrow
        background: transparent

  .content
    padding: 0
    line-height: 1.4
    @include narrow
      padding: 0
    &.text
      padding: 2rem 0

  article
    > .content
      padding: 5rem 2rem 3rem
      font-size: calc((2vw + 2vh + 1vmin) / 3)
      @include narrow
        font-size: 18px
      @include wide
        font-size: 28px
  p
    padding: 0 2rem

    @include narrow
      padding: 0
  a
    font-size: 120%
    svg
      margin: 0 0 0 .5em
    &, &:visited, &:hover
      text-decoration: none

    @include narrow
      font-size: 18px
      svg
        margin-left: .2rem
</style>
