<template>
  <div class="page-content">

    <div class="main">
      <div class="header">
        <div class="logo">
          <logo/>
        </div>
        <div class="link">
          <a href="#link-to-typeform" class="button">
            LEAVE COMMENTS
          </a>
        </div>
      </div>

      <div class="boxed-content">
        <div class="container hero w-100 top-box">
          <div class="content" v-if="solution && solution.title">
            <div class="container text flex">
              <div class="w-100">
                <div class="flex">
                  <div class="w-100">
                    <h1><strong>{{place.title}}:</strong> {{ solution.title }}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container text flex bottom-box">
          <div class="w-100 content">
            <div class="flex">
              <div class="w-50">
                <em>{{ solution.gist }}</em>
                <p>{{ solution.description }}</p>
              </div>
              <div class="w-50">
                <h2>Impact on the space</h2>
                <p>{{ solution.impact }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Logo from "@/components/Logo.vue";

export default {
  props: [
    'place',
    'images',
    'solution',
  ],
  components: {
    logo: Logo
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
  .content
    padding: 5%
    display: flex
    flex-direction: row

  .header,
    display: flex
    margin: 0 130px
    padding: 0
    align-items: center
    justify-content: center

    .logo,
    .link
      width: auto
    .link
      margin-left: auto
    .logo
      padding-left: 0
</style>
