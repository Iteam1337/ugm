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

      <div class="container flex">
        <div class="w-60">
          <p>
            With the fast pace of urbanization also comes widespread segregation and increasing social gaps. At the same time, world leaders have since 2015 agreed on several global agendas for sustainable development, such as the Paris Agreement, Agenda 2030 and New Urban Agenda. If we are to live up to these ambitious goals depends to a large extent on our societies becoming more inclusive and equal, and fulfilling the socioeconomic needs of the youth of the future. How cities and areas are developed is crucial to people’s quality of life, and can increase the opportunities to education, work and social security for young women and girls in particular.
            <br />
            <br />
            <br />
            So, how do we work with global goals and tools such as feminist urban development on a practical, local level? The ambitions are there, but the practical know-how is limited. Urban Girls Movement Botkyrka wants to increase knowledge in this area, with six so called innovation labs where young girls from the Stockholm suburb Botkyrka together with other stakeholders produce innovative solutions to commonly identified problems in the area.
          </p>
        </div>
        <div class="w-40">
          <div class="menu-item" @click="navigate('map')">
            Explore map
          </div>
        </div>
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
  .header
    background-image: url(../assets/images/header.png)
    background-size: cover
    background-position: center center
    position: absolute
    width: 100%
    height: 620px
    z-index: -1
  .overlay
    position: absolute
    background-color: rgba(0, 0, 0, 0.3)
    width: 100%
    height: 100%
    min-height: 620px
  .title
    font-size: 50px
    margin-top: 150px
  .hero
    min-height: 660px
  .menu-item
    vertical-align: top
    font-size: 25px
    text-align: left
    margin-left: 5rem
    display: block
</style>
