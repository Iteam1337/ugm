<template>
  <li class="menu-item">
    <slot></slot>
  </li>
</template>

<style lang="sass" scoped>
  .menu-item
    cursor: pointer
    margin-top: 2rem
    display: flex
    align-items: center
    text-decoration: none
    user-select: none
    text-transform: uppercase
    span
      margin-right: 1rem
      width: 50px
      height: 50px
      min-width: 50px
      min-height: 50px
      display: flex
      justify-content: center
      align-items: center
      border: 2px solid white
      border-radius: 50%
      img
        width: 50%
        height: 50%
</style>
