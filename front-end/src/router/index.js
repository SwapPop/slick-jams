import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Artists from '../views/Artists.vue'
import Collection from '../views/Collection.vue'
import Suggestions from '../views/Suggestions.vue'
import SongSuggestions from '../views/SongSuggestions.vue'
import ArtistSuggestions from '../views/ArtistSuggestions.vue'


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
  },
  {
    path: '/songSuggestions',
    name: 'SongSuggestions',
    component: SongSuggestions
  },
  {
    path: '/artistSuggestions',
    name: 'ArtistSuggestions',
    component: ArtistSuggestions
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
