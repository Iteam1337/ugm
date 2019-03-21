<template>
  <transition name="fade">
    <div class="fs-loader" v-if="!preLoaded">
      <progress-bar :value="progress"></progress-bar>
    </div>
  </transition>
</template>

<script>
  import ProgressBar from 'vue-progressbar-component'
  import images from '@/assets'

  export default {
    name: 'loading',
    components: {
      ProgressBar
    },
    props: {
      isLoading: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        preLoaded: false,
        progress: 0
      }
    },
    mounted() {
      this.updatePleaseWait()
    },
    methods: {
      loadImage(imageUrl, onprogress) {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest()
          let notifiedNotComputable = false

          xhr.open('GET', imageUrl, true)
          xhr.responseType = 'blob'

          const sentProgress = new Set()
          function sendOnProgress (progress) {
            if (sentProgress.has(progress)) {
              return
            }

            sentProgress.add(progress)
            onprogress(progress)
          }

          xhr.onprogress = event => {
            if (event.lengthComputable) {
              return sendOnProgress(parseInt((event.loaded / event.total) * 100))
            }

            if (!notifiedNotComputable) {
              notifiedNotComputable = true
              sendOnProgress(-1)
            }
          }

          xhr.onloadend = () => {
            if ((`${xhr.status}`.startsWith('2') || `${xhr.status}`.startsWith('3')) === false) {
              return reject(xhr)
            }

            if (!notifiedNotComputable) {
              sendOnProgress(100)
            }

            resolve(window.URL.createObjectURL(xhr.response))
          }

          xhr.send()
        })
      },
      preloadImage(src, progress) {
        return this.loadImage(src, progress)
      },
      sleep(ms = 1) {
        return new Promise(resolve => setTimeout(() => resolve(), ms))
      },
      updatePleaseWait() {
        if (!this.isLoading || this.preLoaded) {
          return
        }

        ;(async () => {
          const all = images.length * 100
          const imgs = await Promise.all(images.map(async (src, index) => {
            const blob = await this.preloadImage(src, progress => {
              const current = ((progress + (index * 100)) / all) * 100
              if (current > this.progress) {
                this.progress = current
              }
            })
            const image = new Image()
            image.crossOrigin = ''
            image.src = blob
          }))

          await this.sleep(500)

          this.preLoaded = true
          this.$emit('done', true)
        })()
      }
    }
  }
</script>

<style lang="sass">
  $progressbar-background: gray
  $progressbar-bar-background: #e6e6e6
  @import "./node_modules/vue-progressbar-component/src/scss/progressbar"

  .fs-loader
    position: absolute
    margin: auto
    top: 0
    right: 0
    bottom: 0
    left: 0
    width: 100px
    height: 20px
</style>
