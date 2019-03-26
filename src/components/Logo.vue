<template>
  <router-link to="/" class="logo">
    <span>Urban girls <br/> movement <br/> Botkyrka</span>
  </router-link>
</template>

<style lang="sass" scoped>
  .logo
    padding: 2rem 0
    letter-spacing: 1.5px
    display: flex
    align-items: flex-end
    opacity: 100 !important
    z-index: 2147483647

    font-family: 'Alegreya Sans'
    font-style: normal
    font-weight: 300
    font-size: 28px
    line-height: 27px
    font-variant: small-caps

    span
      user-select: none
      margin: 0
      text-transform: uppercase
      &, &:hover, &:visited
        text-decoration: none !important
</style>
