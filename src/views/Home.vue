<template>
  <div class="background">
    <div class="styling">
      <div class="color-overlay"></div>
      <div class="background"></div>
    </div>

    <main>
      <header>
        <logo />
      </header>

      <article class="container hero w-100 top-box">
        <div class="hero-title">
          <h1 class="title">
              Plan a city for girls,<br />and it will work<br />for everyone.
          </h1>
        </div>

        <div class="link">
          <router-link to="/map">
            Results &amp; Insights <arrow />
          </router-link>
        </div>
      </article>

      <article class="container text flex bottom-box">
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
                  Project Backgroud <arrow />
                </a>
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  </div>
</template>

<script>

import Logo from '@/components/Logo.vue'
import MenuItem from '@/components/MenuItem.vue'
import Arrow from '@/components/Arrow.vue'

export default {
  components: {
    logo: Logo,
    item: MenuItem,
    arrow: Arrow,
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

  main
    max-width: 1440px
    margin: 0 auto

  .logo
    width: auto
    padding-left: 0

  .navigate-arrow
    margin-left: 1em

  .logo
    position: static

  .background
    overflow-x: hidden

  .hero-title
    flex: 0
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    @include narrow
      align-items: flex-start

  .flex
    @include narrow
      flex-direction: column-reverse

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

  .styling
    min-height: 800px

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
