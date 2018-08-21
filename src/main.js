import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCamera, faQuoteRight }  from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faCamera, faQuoteRight])
Vue.component('fa', FontAwesomeIcon)

import 'normalize.css/normalize.css'
import './App.sass'

new WOW().init()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
