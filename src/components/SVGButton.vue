<template>
  <div class="ib">
    <a v-bind:href="link" target="_blank" class="container">
      <slot></slot>

      <p class="text">{{text}}</p>
    </a>
  </div>
</template>

<style lang="sass" scoped>
  .ib 
    display: inline-block
    margin-right: 1rem;
    
  .container
    display: flex
    flex-direction: column
    align-items: center

  .text
    margin: 0.75rem 0 0
    white-space: nowrap

  a 
    text-decoration: underline
    color: rgba(255,255,255,0.9)
    &hover
      text-decoration: none


  .container svg 
    fill: rgba(255, 255, 255, 08)
</style>


<script>
export default {
  props: {
    link: String,
    text: String,
  },
}
</script>
