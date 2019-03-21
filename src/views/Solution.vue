<template>
  <div class="background">
    <div class="container">
      <div class="content" v-if="solution && solution.title">
        <div class="container flex">
          <div class="w-100">
            <div class="flex">
              <div class="w-100">
                <h1><strong>{{place.title}}:</strong> {{ solution.title }}</h1>
              </div>
              <div class="w-100">
                <em>{{ solution.gist }}</em>
              </div>
              <div class="w-100">
                <p>{{ solution.description }}</p>
              </div>
              <div class="w-100">
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
export default {
  props: [
    'place',
    'images',
    'solution',
  ],
  methods: {
    goBack () {
      this.$router.push({ name: 'place', params: { placeId: this.place.name } })
    }
  },
}
</script>

<style lang="sass" scoped>
  @import "@/globals.sass"

  .background
    width: 100%
    height: 100%
  .container
    max-width: 960px

  .content
    height: 90%
    height: 90vh
    width: 100%
    display: flex
    flex-wrap: column
    @include narrow
      margin-bottom: 20px
    p
      width: 50%
      padding: 1em
      @include narrow
        width: 100%
      @include wide
        width: 33%
</style>
