<template>
  <div class="background">
    <div class="nav container flex">
      <div class="w-100 box">
        <div class="menu-item" @click="goBack()">
          <div>
            <fa icon="arrow-left" />
          </div>
          Tillbaka till platsen
        </div>
      </div>
    </div>
    <div class="container flex content">
      <div class="w-100 box">
        <p v-for="({ utmaningar }, i) in place.texts" :key="'challenge' + i" v-if="utmaningar">
          "{{ utmaningar }}"
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
  .background
    width: 100%
    height: 100%
  .container
    max-width: 960px
  .box
    width: 100%
  .nav
    width: 80%
    height: 10%
  .content
    height: 90%
    .box
      display: flex
      flex-wrap: wrap
      padding: 2rem
      p
        margin: 2rem
        width: 40%
</style>
