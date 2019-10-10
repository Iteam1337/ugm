<template>
  <main>
    <header>
      <logo class="left" />
    </header>

    <article class="container top-box">
      <div class="hero">
        <div class="hero-title">
          <h1 class="title">Guidelines &amp; Recommendations</h1>
        </div>
      </div>

      <h2>Proposals</h2>
      <div class="row">
        <div>
          <router-link
            class="rlink"
            :to="{ name: 'proposal', params: { title: 'Fittja Square', proposalId: 'prop1' } }"
          >
            <proposal-link
              title="Fittja Square"
              desc="Botkyrka municipality (local actor)"
            />
          </router-link>
        </div>
        <div>
          <router-link
            class="rlink"
            :to="{ name: 'proposal', params: { title: 'Fittja Centrum', proposalId: 'prop2' } }"
          >
            <proposal-link title="Fittja Centrum" desc="Land owner Kungsvåningen (private actor) " />
          </router-link>
        </div>
        <div>
          <router-link
            class="rlink"
            :to="{ name: 'proposal', params: { title: 'FittjaStation / Fittja Square', proposalId: 'prop3' } }"
          >
            <proposal-link title="Fittja Station / Fittja Square" desc="Region Stockholm/SL (regional level)and Botkyrka municipality (local level)" />
          </router-link>
        </div>
      </div>
    </article>

    <article class="container text flex bottom-box">
      <div class="content">
        <div class="flex">
          <div class="w-70 info">
            <span>In the sixth and final innovation lab of the Vinnova financed #UrbanGirlsMovement (UGM) initiative, the main objective was to of discuss what is required in order to realise the proposals developed throughout labs 1-5. Together, the girls and experts worked on policy recommendations to present to decision-makers at different levels and developed guidelines to support the implementing actors. This section provides an overview of the results from the sixth workshop</span>
          </div>
          <div class="w-70 info">
            <img src="@/assets/images/recommendationsview.jpg" />
          </div>
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
  methods: {
    goTo(id) {
      this.$router.push({
        name: 'proposal',
        params: { proposalId: id },
      })
    },
  },
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

  .rlink
    text-decoration: none
  
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