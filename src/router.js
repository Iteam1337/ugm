import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Map from '@/views/Map.vue'
import Place from '@/views/Place.vue'
import Solution from '@/views/Solution.vue'

import places from './assets/map/places'

Vue.use(Router)

function placeProps ({ params: { placeId, solutionId = null }}) {
  const place = places.find(({ name }) =>
    name.toLowerCase() === placeId.toLowerCase())

  if (!place) {
    return {
      images: [],
      place: {},
      solution: {},
    }
  }

  const images = place && place.name
    ? require(`@/assets/images/places/${place.name}`)
    : {}

  const solution = solutionId ? (place.solutions || []).find(({ name }) =>
    name.toLowerCase() === solutionId.toLowerCase()) : {}

  return {
    images: images && images.default,
    place,
    solution,
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
      path: '/place/:placeId/:solutionId',
      name: 'solution',
      component: Solution,
      props: route => placeProps(route),
    }
  ]
})
