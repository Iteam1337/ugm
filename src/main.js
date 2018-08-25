import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCamera, faQuoteRight }  from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([ faCamera, faQuoteRight ])
Vue.component('fa', FontAwesomeIcon)

new WOW().init()

Vue.config.productionTip = false

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
