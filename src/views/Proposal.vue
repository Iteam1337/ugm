<template>
  <main>
    <header>
      <logo class="left" />
    </header>

    <article class="container top-box">
      <div class="hero">
        <div class="hero-title">
          <!-- <h1 class="title">{{proposal.heading.subtitle}}</h1>
          <h1 class="title">{{proposal.heading.title}}</h1>
          <p>{{proposal.observations.text}}</p> -->
        </div>
      </div>
      </article>
  </main>
</template>

<script>
import Logo from '@/components/Logo.vue'
import ProposalLink from '@/components/ProposalLink.vue'

export default {
  components: {
    logo: Logo,
    proposalLink: ProposalLink,
  },
  props: ["proposal", "images"]
}
</script>

<style lang="sass" scoped>
  @import "@/globals.sass"

  .hero
    
    .hero-title
      margin-left: auto
      font-size: 48px
      font-size: calc((2vw + 2vh + 1vmin) / 2)
      > h1
        text-align: left
      @include narrow
        font-size: 22px
      @include wide
        font-size: 36px
    .iframe
      height: 479px

  .row 
    display: flex; 
    > div
      width: 30%
  
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