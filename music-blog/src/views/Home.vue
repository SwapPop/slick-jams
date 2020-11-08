<template>
  <div class="home">
    <div class="heading">
      <h1>top 50 mtotm song picks this week:</h1>
    </div>
    <SongsList :songs="songs"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SongsList from '@/components/SongsList.vue'

export default {
  name: 'Home',
  components: {
    SongsList
  },
  computed: {
    songs() {
      return this.$root.$data.songs;
    }
  },
}
</script>

<style scoped>
.home {
  background-color: #8f878790;
}

.heading {
  padding:200px 25px;
}

.heading h1 {
  font-size: 36pt;
}
</style>
