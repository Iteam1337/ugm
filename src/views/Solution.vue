<template>
  <div class="background">
    <div class="container">
      <ul class="nav">
        <li class="menu-item" @click="goBack()">
          <span>
            <fa icon="arrow-left" />
          </span>
          Tillbaka till platsen
        </li>
      </ul>
      <div class="content">
        <p v-for="({ förslag }, i) in place.texts" :key="'solution' + i" v-if="förslag">
          "{{ förslag }}"
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['place'],
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
  .nav
    width: 80%
    height: 10%
    height: 10vh
    @include narrow
      width: 100%
      padding: 0
    .menu-item
      margin-top: 0
      @include narrow
        margin-top: 21px

  .content
    height: 90%
    height: 90vh
    width: 100%
    display: flex
    flex-wrap: wrap
    @include narrow
      margin-bottom: 20px
    p
      width: 50%
      @include narrow
        width: 100%
</style>
