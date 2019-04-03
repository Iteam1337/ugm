<template>
  <main v-if="solution && solution.title">
    <header>
      <logo class="left"/>
      <typeform class="right"/>
    </header>

    <article class="container hero top-box">
      <div class="hero-title">
        <h1>
          <strong>{{place.title}}:</strong>
          {{ solution.title }}
        </h1>
      </div>
      <iframe
        src="https://sketchfab.com/models/0f0a3c2db9614e09ab157f8310e9b92d/embed?autostart=1&annotation={{ solution.annotation }}"
        frameborder="0"
        allow="autoplay; fullscreen; vr"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        class="iframe"
      />
    </article>

    <article class="container text flex bottom-box">
      <div class="content">
        <div class="flex">
          <div class="w-70 info">
            <div>
              <h3 class="gist">"{{solution.gist}}"</h3>
              <p>{{ solution.text }}</p>
            </div>
            <div>
              <h3>
                <strong>Impact on the space</strong>
              </h3>

              <p>{{ solution.impact }}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Typeform from '@/components/Typeform.vue'

export default {
  props: ['place', 'images', 'solution'],
  components: {
    logo: Logo,
    typeform: Typeform,
  },
  methods: {
    goBack() {
      this.$router.push({
        name: 'place',
        params: { placeId: this.place.name },
      })
    },
  },
}
</script>

<style lang="sass" scoped>
  @import "@/globals.sass"

  .hero
    display: flex
    flex-direction: column
    .hero-title
      margin-left: auto
      font-size: 48px
      font-size: calc((2vw + 2vh + 1vmin) / 2)
      @include narrow
        font-size: 22px
      @include wide
        font-size: 36px
    .iframe
      height: 479px

  article
    padding: 1em 4em
    @include narrow
      padding: 0 2em
  .content
    padding: 0
    margin: 0
    @include narrow
      padding: 0 0 1em

  h1
    text-align: right
    @include narrow
      text-align: left

  .bottom-box
    padding-bottom: 2em
    @include narrow
      padding-top: 1em
      padding-bottom: 0

  .info
    display: flex
    font-size: 22px
    font-size: calc((1.6vw + 2.2vh + 1vmin) / 2.8)
    @include narrow
      font-size: 18px
      flex-flow: column
    @include wide
      font-size: 22px
    &,
    p, h3, div
      flex: 1
      padding: 0
    .gist
      font-style: italic
    div
      padding-left: 1rem
      @include narrow
        padding-left: 0
</style>
