<template>
  <main v-if="solution && solution.title">
    <header>
      <logo class="left" />
      <typeform class="right" />
    </header>

    <article class="container hero top-box">
      <div class="hero-title">
        <h1><strong>{{place.title}}:</strong> {{ solution.title }}</h1>
      </div>
      <iframe
        src="https://sketchfab.com/models/0f0a3c2db9614e09ab157f8310e9b92d/embed?camera=0" frameborder="0"
        allow="autoplay; fullscreen; vr"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        class="iframe"
      />
    </article>

    <article class="container text flex bottom-box">
      <div class="content">
        <div class="flex">
          <div class="w-60 info">
            <p>{{ solution.text }}</p>
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
  props: [
    'place',
    'images',
    'solution',
  ],
  components: {
    logo: Logo,
    typeform: Typeform,
  },
  methods: {
    goBack () {
      this.$router.push({ name: 'place', params: { placeId: this.place.name } })
    }
  },
}
</script>

<style lang="sass" scoped>
  @import "@/globals.sass"
  .container
    @include narrow
      padding: 0 1.5em
  .hero
    display: flex
    flex-direction: column
    .hero-title
      margin-left: auto
      font-size: 48px
      font-size: calc((2vw + 2vh + 1vmin) / 1.35)
      @include narrow
        font-size: 22px
      @include wide
        font-size: 40px
    .iframe
      height: 479px

  article
    padding: 2em 4em

  .impact,
  .info
    font-size: 22px
    font-size: calc((1.8vw + 2.2vh + 1vmin) / 3)
    @include narrow
      font-size: 18px
    @include wide
      font-size: 22px
    &,
    p
      padding: 0
</style>
