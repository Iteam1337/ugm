<template>
  <div id="fullpage">
    <about-ugm class="section" />
    <About-ugm-background class="section" />
  </div>
</template>

<script>
  import AboutUgmBackground from '@/components/AboutUgmBackground.vue'
  import AboutUgm from '@/components/AboutUgm.vue'

  export default {
    data() {
      return {
        fullpage
      }
    },
    mounted() {
      this.fullpage = new fullpage(this.$el, {
        autoScrolling: false,
        scrollBar: true,
      })
      // hack to get animations to work after route changes
      setTimeout(() => {
        window.wow = new WOW()
        window.wow.init()
      }, 600);
    },
    components: {
      AboutUgmBackground,
      AboutUgm
    },
    beforeDestroy() {
      this.fullpage.destroy('all')
    }
  }
</script>

<style lang="sass" scoped>
  .center
    margin: auto
</style>
