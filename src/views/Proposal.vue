<template>
  <main>
    <header>
      <logoCity class="left" />
    </header>

    <article class="hero row container top-box">
      <div class="hero-title">
        <h1 class="title">
          <span class="sub-title">{{proposal.heading.subtitle}}</span>
          {{proposal.heading.title}}
        </h1>
      </div>
      <div class="letterHead">
        <p>
          <span>Public Space</span>
          {{proposal.space}}
        </p>

        <p>
          <span>Proposal Recipient</span>
          {{proposal.recipient}}
        </p>
      </div>
    </article>

    <article class="container row middle-box">
      <div class="columnOne">
        <div class="textbox">
          <h3>Observations</h3>
          <p>{{proposal.observations.text}}</p>
        </div>
        <div class="textbox">
          <h3>Posibilities</h3>
          <p>{{proposal.possibilities.text}}</p>
        </div>
      </div>
      <div class="columnTwo">
        <div class="textbox">
          <h3>Vision</h3>
          <p>{{proposal.vision.text}}</p>
        </div>
        <div class="textbox">
          <h3>Design Priorities</h3>
          <p>{{proposal.priorities.text}}</p>
        </div>
      </div>
    </article>
    <article class="container middle-box hero-title">
      <h2 class="mid-title">Design Solutions</h2>
      <ul class="flex solutions-preview-list">
        <li class="solutions" v-for="solution in solutions" v-bind:key="solution.name">
          <router-link
            :to="{
                  name: 'solution',
                  params: {
                    placeId: solution.placeId,
                    solutionId: solution.name
                  },
                }"
            class="link"
          >
            <div class="background" :style="{'background-image': 'url(' + require(`@/assets/images/sketchfab-thumbnails/${solution.sketchfab.thumb}`) + ')' }"></div>
            <div class="solution-text-box">
              <span class="text">{{solution.title}}</span>
              <arrow />
            </div>
          </router-link>
        </li>
      </ul>
    </article>

    <article class="container row bottom-box">
      <div class="columnOne">
        <div class="textbox">
          <h3>Main Solution</h3>
          <p>{{proposal.solution.text}}</p>
        </div>
        <div class="textbox">
          <h3>Partnership</h3>
          <p>{{proposal.partnership.text}}</p>
        </div>
        <div class="textbox">
          <h3>Competence</h3>
          <p>{{proposal.competences.text}}</p>
        </div>
        <div class="textbox">
          <h3>Ways Forward</h3>
          <p>{{proposal.forward.text}}</p>
        </div>
      </div>
      <div class="columnTwo">
        <div class="textbox">
          <h3>Action</h3>
          <p>{{proposal.action.text}}</p>
        </div>
        <div class="textbox">
          <h3>Responsibility</h3>
          <p>{{proposal.responsibility.text}}</p>
        </div>
        <div class="textbox">
          <h3>Financing</h3>
          <p>{{proposal.financing.text}}</p>
        </div>
        <div class="textbox">
          <h3>Time</h3>
          <p>{{proposal.time.text}}</p>
        </div>
        <div class="textbox">
          <h3>Obstacles</h3>
          <p>{{proposal.obstacles.text}}</p>
        </div>
        <div class="textbox">
          <h3>Impact</h3>
          <p>{{proposal.impact.text}}</p>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import LogoCity from '@/components/LogoCity.vue'
import ProposalLink from '@/components/ProposalLink.vue'
import Arrow from '@/components/Arrow.vue'
import places from '@/assets/map/places.json'

export default {
  components: {
    logoCity: LogoCity,
    proposalLink: ProposalLink,
    arrow: Arrow,
  },

  props: ['proposal', 'images', 'solutions'],
}
</script>

<style lang="sass" scoped>
  @import "@/globals.sass"

  .hero
    padding: 2rem 4rem 0
    .hero-title
      font-size: 48px
      font-size: calc((2vw + 2vh + 1vmin) / 2)
      > h1
        text-align: left
        letter-spacing: 0.1rem
      
      .sub-title 
        display: block
        margin-bottom: 0.5rem
        font-weight: 400

      @include narrow
        font-size: 22px
      @include wide
        font-size: 36px
    .iframe
      height: 479px

  .solutionsContainer
    display: flex
    flex-wrap: wrap
    list-style: none
    margin: 0
    padding: 0

  .solutions-preview-list
    $height: 200px
    list-style: none
    padding: 0
    flex-flow: row wrap
    justify-content: flex-start

  .solutions
    flex: 1 0 33.3%
    padding: 1rem
    max-width: 300px
    max-width: calc(100% - 40px)
    overflow: hidden
    .background 
      height: 160px
      width: 100%
      background-size: cover
      background-position: center center
    .text
      max-width: 200px
      max-width: calc(100% - 40px - 0.5rem)
      text-overflow: ellipsis
      overflow: hidden
      white-space: nowrap
      display: inline-block
  .solution-text-box
    padding: 1rem 1.5rem
    .text 
      vertical-align: bottom
    svg 
      margin-left: 0.5rem

  .columnOne
    display: flex
    flex-direction: column
    padding-right: 1rem
    width: 50%
  
  
  .columnTwo
    display: flex
    flex-direction: column
    padding-left: 1rem
    width: 50%

  .mid-title
    display: block
    margin-bottom: 0.5rem
    font-weight: 400
    margin-bottom: 2rem
    font-size: 2rem
    font-family: 'Libre Baskerville'

  .row 
    display: flex;
    align-content: space-between
    justify-content: space-between
  
  .letterHead
    width: 30%
    text-align: right
    margin-top: 1rem
    > p
      margin-bottom: 2rem
    & span
      display: block
      font-weight: bold
      text-transform: uppercase
      margin-bottom: 0.5rem
    
  
  article
    padding: 3em 4em 1em
    @include narrow
      padding: 0 2em
  .content
    padding: 0
    margin: 0
    @include narrow
      padding: 0 0 1em

  .textboxContainer
    display: flex
    flex-direction: column

    margin-left: -4rem
    margin-right: -4rem

  .textbox
    b
      text-transform: uppercase
    p
      line-height: 1.6
      margin: 0
      margin-bottom: 1.5rem

  
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