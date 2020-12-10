import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Artists from '../views/Artists.vue'
import Collection from '../views/Collection.vue'
import Suggestions from '../views/Suggestions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/artists',
    name: 'Artists',
    component: Artists
  },
  {
    path: '/collection',
    name: 'Collection',
    component: Collection
  },
  {
    path: '/suggestions',
    name: 'Suggestions',
    component: Suggestions
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
