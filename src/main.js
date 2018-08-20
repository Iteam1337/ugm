import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'normalize.css/normalize.css'
import './App.sass'

new WOW().init()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
