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
          xhr.responseType = 'arraybuffer'

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

            const options = {}
            const headers = xhr.getAllResponseHeaders()
            const m = headers.match(/^Content-Type\:\s*(.*?)$/mi)

            if (m && m[1]) {
              options.type = m[1]
            }

            const blob = new Blob([this.response], options)

            resolve(window.URL.createObjectURL(blob))
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

          const imgs = await Promise.all(images.map(async (image, index) => await this.preloadImage(image, progress => {
            this.progress = ((progress + (index * 100)) / all) * 100
          })))

          await this.sleep(2000)

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
    background: black
    position: absolute
    margin: auto
    top: 0
    right: 0
    bottom: 0
    left: 0
    width: 100px
    height: 100px
</style>
