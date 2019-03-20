import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'

import {
  faCamera,
  faQuoteRight,
  faArrowLeft,
  faExclamation,
  faLightbulb,
  faBullhorn,
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([
  faCamera,
  faQuoteRight,
  faArrowLeft,
  faLightbulb,
  faExclamation,
  faBullhorn,
  faLongArrowAltLeft,
  faLongArrowAltRight,
])

Vue.component('fa', FontAwesomeIcon)

window.wow = new WOW()
window.wow.init()

Vue.config.productionTip = false

new Vue({
  router,
  el: '#app',
  render: h => h(App),
})
