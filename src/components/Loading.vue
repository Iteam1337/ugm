<template>
  <transition name="fade">
    <div class="fs-loader" v-if="!preLoaded">
      <HollowDotsSpinner class="fs-spinner" :size="120" />
    </div>
  </transition>
</template>

<script>
  import { HollowDotsSpinner } from 'epic-spinners'
  import images from '@/assets'

  export default {
    name: 'loading',
    components: {
      HollowDotsSpinner
    },
    props: {
      isLoading: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        preLoaded: false
      }
    },
    mounted() {
      this.updatePleaseWait()
    },
    methods: {
      preloadImage(src) {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = image => {
            img.onload = null
            resolve(image)
          }

          img.onerror = error => {
            reject(error)
          }

          img.src = src
        })
      },
      sleep(ms = 1) {
        return new Promise(resolve => setTimeout(() => resolve(), ms))
      },
      updatePleaseWait() {
        if (!this.isLoading || this.preLoaded) {
          return
        }

        ;(async () => {
          await Promise.all(images.map(async image => await this.preloadImage(image)))

          await this.sleep(1500)

          this.preLoaded = true
          this.$emit('done', true)
        })()
      }
    }
  }
</script>

<style lang="sass">
  .fs-loader
    background: black
    position: absolute
    margin: auto
    top: 0
    right: 0
    bottom: 0
    left: 0
    width: 100px
    height: 100px
    .fs-spinner
      margin: auto
</style>
