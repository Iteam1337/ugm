import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Map from '@/views/Map.vue'
import Place from '@/views/Place.vue'
import Images from '@/views/Images.vue'
import Challenges from '@/views/Challenges.vue'
import Solution from '@/views/Solution.vue'

import places from './assets/map/places'

Vue.use(Router)

function placeProps ({ params: { placeId }}) {
  const place = places.find(({ name }) =>
    name.toLowerCase() === placeId.toLowerCase())

  const images = place && place.name
    ? require(`@/assets/images/places/${place.name}`)
    : {}

  return {
    images: images && images.default,
    place
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/map',
      name: 'map',
      component: Map,
    },
    {
      path: '/place/:placeId',
      name: 'place',
      component: Place,
      props: route => placeProps(route),
    },
    {
      path: '/place/:placeId/images',
      name: 'images',
      component: Images,
      props: route => placeProps(route),
    },
    {
      path: '/place/:placeId/challenges',
      name: 'challenges',
      component: Challenges,
      props: route => placeProps(route),
    },
    {
      path: '/place/:placeId/solution',
      name: 'solution',
      component: Solution,
      props: route => placeProps(route),
    }
  ]
})
