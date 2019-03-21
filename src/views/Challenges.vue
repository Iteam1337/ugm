<template>
  <div class="background">
    <div class="container">
      <ul class="nav">
        <item @click.native="navigate('map')">
          <fa class="navigate-arrow" icon="long-arrow-alt-left" /> Tillbaka till kartan
        </item>
      </ul>
      <div class="content">
        <p v-for="({ utmaningar }, i) in place.texts" :key="'challenge' + i" v-if="utmaningar">
          "{{ utmaningar }}"
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import MenuItem from '@/components/MenuItem.vue'

export default {
  props: [
    'place',
    'images'
  ],
  components: {
    item: MenuItem,
  },
  methods: {
    goBack() {
      this.$router.push({
        name: 'place', params: {
          placeId: this.place.name
        }
      })
    },
    navigate(name) {
      this.$router.push({ name })
    },
  }
}
</script>

<style lang="sass" scoped>
  @import "@/globals.sass"

  .navigate-arrow
    margin-right: 1em

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
      padding: 1em
      @include narrow
        width: 100%
      @include wide
        width: 33%
</style>
