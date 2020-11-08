import Vue from 'vue'
import App from './App.vue'
import router from './router'
import songsList from './songs-data.js'
import artists from './mock-data.js'

Vue.config.productionTip = false

let data = {
  songs: songsList,
  artists: artists,
  collection: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
