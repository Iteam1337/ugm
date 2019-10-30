<template>
  <div class="link">
    <div class="top">
      <span class="text">{{title}}</span>
      <arrow class="arrow" />
    </div>
    <div class="bottom">
      <span class="text">{{desc}}</span>
    </div>
  </div>
</template>

<style lang="sass" scoped>

.link
  display: block
  border: 1px solid white
  font-variant: small-caps
  text-decoration: none
  font-size: 1rem


.top,
.bottom
  padding: 1rem 1.5rem

.top 
  border-bottom: 1px solid white
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  font-size: 120%
  .text
    text-decoration: underline
  &:hover
    .text
      text-decoration: none


.bottom .text
  font-style: italic
  font-variant: normal
  font-weight: normal
  text-transform: initial


</style>

<script>
import Arrow from '@/components/Arrow.vue'

export default {
  props: {
    title: String,
    desc: String,
  },
  components: {
    arrow: Arrow,
  },
}
</script>
