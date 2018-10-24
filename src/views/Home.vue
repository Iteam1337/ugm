<template>
  <div class="background">
    <div class="overlay">
      <div class="header"></div>

      <div class="container hero w-100">
        <div class="logo wow fadeInDown" data-wow-duration="1.5s">
          <h1>Urban girls movement</h1>
        </div>
        <h1 class="title wow fadeInUp" data-wow-duration="1.5s">
          Plan a city for girls, <br/> and it will work for everyone.
        </h1>
      </div>

      <div class="container text flex">
        <div class="w-60 content">
          <p>
            With the fast pace of urbanization also comes widespread segregation and increasing social gaps. At the same time, world leaders have since 2015 agreed on several global agendas for sustainable development, such as the Paris Agreement, Agenda 2030 and New Urban Agenda. If we are to live up to these ambitious goals depends to a large extent on our societies becoming more inclusive and equal, and fulfilling the socioeconomic needs of the youth of the future. How cities and areas are developed is crucial to people’s quality of life, and can increase the opportunities to education, work and social security for young women and girls in particular.
            <br />
            <br />
            <br />
            So, how do we work with global goals and tools such as feminist urban development on a practical, local level? The ambitions are there, but the practical know-how is limited. Urban Girls Movement Botkyrka wants to increase knowledge in this area, with six so called innovation labs where young girls from the Stockholm suburb Botkyrka together with other stakeholders produce innovative solutions to commonly identified problems in the area.
          </p>
        </div>
        <ul class="w-40">
          <li class="menu-item" @click="navigate('map')">
            Explore map
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigate (name) {
      this.$router.push({ name })
    }
  },
}
</script>

<style lang="sass" scoped>
  @import "@/globals.sass"

  .background
    overflow-x: hidden
  .flex
    @include narrow
      flex-direction: column-reverse
  .header
    background-image: url(../assets/images/header.png)
    background-size: cover
    background-position: center center
    position: absolute
    width: 100%
    height: 620px
    z-index: -1
    overflow: hidden
  .overlay
    background-color: rgba(0, 0, 0, 0.3)
    width: 100%
    height: 100%
    min-height: 100vh
    min-width: 100vw
    overflow-x: hidden
  .title
    font-size: 50px
    margin-top: 150px
    font-size: calc((2vw + 2vh + 1vmin))
    @include narrow
      font-size: 30px
    @include wide
      font-size: 60px
  .content
    &.text
      padding: 2rem 0
  .hero
    min-height: 660px
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
