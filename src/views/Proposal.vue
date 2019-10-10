<template>
  <main>
    <header>
      <logoCity class="left" />
    </header>

    <article class="container top-box">
      <div class="hero">
        <div class="hero-title">
          <h1 class="title">{{proposal.heading.subtitle}}</h1>
          <h1 class="title">{{proposal.heading.title}}</h1>
        </div>
        <div>
          <p>
            <b>Public Space</b>
          </p>
          <p>{{proposal.space}}</p>
          <p>
            <b>Proposal Recipient</b>
          </p>
          <p>{{proposal.recipient}}</p>
        </div>
      </div>

      <div>
        <p>
          <b>Observations</b>
        </p>
        <p>{{proposal.observations.text}}</p>
      </div>
      <div>
        <p>
          <b>Posibilities</b>
        </p>
        <p>{{proposal.possibilities.text}}</p>
      </div>
      <div>
        <p>
          <b>Vision</b>
        </p>
        <p>{{proposal.vision.text}}</p>
      </div>
      <div>
        <p>
          <b>Design Priorities</b>
        </p>
        <p>{{proposal.priorities.text}}</p>
      </div>
      </article>
      <article class="container">
      <h1>Design Solutions</h1>

      <div class="w-30 content">
        <a href="/recommendations" class="link">
          <img class="img-width" src="@/assets/images/sketchfab-thumbnails/mapviewpic.jpg" alt />
          <span class="solution">
            <span class="text">TEXT HÄR</span>
            <arrow />
          </span>
        </a>
      </div>

      <div class="w-30 content">
        <a href="/recommendations" class="link">
          <img class="img-width" src="@/assets/images/sketchfab-thumbnails/mapviewpic.jpg" alt />
          <span class="solution">
            <span class="text">TEXT HÄR</span>
            <arrow />
          </span>
        </a>
      </div>

      <div class="w-30 content">
        <a href="/recommendations" class="link">
          <img class="img-width" src="@/assets/images/sketchfab-thumbnails/mapviewpic.jpg" alt />
          <span class="solution">
            <span class="text">TEXT HÄR</span>
            <arrow />
          </span>
        </a>
      </div>
    </article>

    <article class="container bottom-box">
      <div>
        <p>
          <b>Main Solution</b>
        </p>
        <p>{{proposal.solution.text}}</p>
      </div>
      <div>
        <p>
          <b>Partnership</b>
        </p>
        <p>{{proposal.partnership.text}}</p>
      </div>
      <div>
        <p>
          <b>Competence</b>
        </p>
        <p>{{proposal.competences.text}}</p>
      </div>
      <div>
        <p>
          <b>Ways Forward</b>
        </p>
        <p>{{proposal.forward.text}}</p>
      </div>
      <div>
        <p>
          <b>Action</b>
        </p>
        <p>{{proposal.action.text}}</p>
      </div>
      <div>
        <p>
          <b>Responsibility</b>
        </p>
        <p>{{proposal.responsibility.text}}</p>
      </div>
      <div>
        <p>
          <b>Financing</b>
        </p>
        <p>{{proposal.financing.text}}</p>
      </div>
      <div>
        <p>
          <b>Time</b>
        </p>
        <p>{{proposal.time.text}}</p>
      </div>
      <div>
        <p>
          <b>Obstacles</b>
        </p>
        <p>{{proposal.obstacles.text}}</p>
      </div>
      <div>
        <p>
          <b>Impact</b>
        </p>
        <p>{{proposal.impact.text}}</p>
      </div>
    </article>
  </main>
</template>

<script>
import LogoCity from '@/components/LogoCity.vue'
import ProposalLink from '@/components/ProposalLink.vue'
import Arrow from '@/components/Arrow.vue'

export default {
  components: {
    logoCity: LogoCity,
    proposalLink: ProposalLink,
    arrow: Arrow
  },
  props: ['proposal', 'images'],
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
  
  .link
    display: block
    border: 1px solid white
  .img-width
    max-width: 100%
  .solution .text
    display: inline-block
    padding: 1.5rem 0.75rem 1.5rem 2rem
    font-family: 'Alegreya Sans', sans-serif
    font-size: 18px

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