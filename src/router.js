import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Map from '@/views/Map.vue'
import Place from '@/views/Place.vue'
import Solution from '@/views/Solution.vue'
import Recommendations from '@/views/Recommendations.vue'
import Proposal from '@/views/Proposal.vue'

import places from './assets/map/places'

Vue.use(Router)

function placeProps({ params: { placeId, solutionId = null } }) {
  const place = places.find(
    ({ name }) => name.toLowerCase() === placeId.toLowerCase()
  )

  if (!place) {
    return {
      images: [],
      place: {},
      solution: {},
    }
  }

  const images =
    place && place.name ? require(`@/assets/images/places/${place.name}`) : {}

  const solution = solutionId
    ? (place.solutions || []).find(
        ({ name }) => name.toLowerCase() === solutionId.toLowerCase()
      )
    : {}

  return {
    images: images && images.default,
    place,
    solution,
  }
}

function proposalProps({ params: { proposalId } }) {

  const proposal = require(`@/assets/proposal/${proposalId}`).default

  const solutions = function(places, solutions) {
    let matching = []
    solutions.forEach(solutionString => {
      places.forEach(place => {
        place.solutions.forEach(solution => {
          if (solution.name === solutionString) {
            matching.push({...solution, placeId: place.name})
          }
        })
      })
    })
    return matching
  }

  let images = require(`@/assets/proposal/${proposalId}`)
  if (!images) {
    images = []
  }

  return {
    images: images,
    proposal: proposal.data,
    solutions: solutions(places, proposal.solutions)
  }
}

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/recommendations',
      name: 'recommendations',
      component: Recommendations,
    },
    {
      path: '/recommendations/proposal/:proposalId',
      name: 'proposal',
      component: Proposal,
      props: route => proposalProps(route),
    },
  ],
})
