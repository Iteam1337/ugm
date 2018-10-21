import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Dream from '@/views/Test-Dream.vue'
import Reality from '@/views/Test-Reality.vue'
import About from '@/views/About.vue'
import Map from '@/views/Map.vue'
import Place from '@/views/Place.vue'
import Images from '@/views/Images.vue'
import Challenges from '@/views/Images.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dream',
      name: 'dream',
      component: Dream
    },
    {
      path: '/reality',
      name: 'reality',
      component: Reality
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/place',
      name: 'place',
      component: Place
    },
    {
      path: '/images',
      name: 'images',
      component: Images
    },
    {
      path: '/challenges',
      name: 'challenges',
      component: Challenges
    }
  ]
})
