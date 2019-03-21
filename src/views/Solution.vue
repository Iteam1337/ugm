<template>
  <div class="background">
    <div class="container">
      <div class="content" v-if="solution && solution.title">
        <div class="container text flex">
          <div class="w-100 content">
            <div class="flex">
              <div class="w-100 content">
                <h1><strong>{{place.title}}:</strong> {{ solution.title }}</h1>
              </div>
            </div>
            <div class="flex">
              <div class="w-50 content">
                <em>{{ solution.gist }}</em>
                <p>{{ solution.description }}</p>
              </div>
              <div class="w-50 content">
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
</style>
