<template>
  <div class="artists">
    <div class="heading">
      <h1>top featured artists:</h1>
    </div>
    <ArtistList :artists="artists"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ArtistList from '@/components/ArtistList.vue'

export default {
  name: 'Home',
  components: {
    ArtistList
  },
  computed: {
    artists() {
      return this.$root.$data.artists;
    }
  },
}
</script>

<style scoped>
.artists {
  background-color: #dddddd;
}

.heading {
  padding:200px 25px;
}

.heading h1 {
  font-size: 36pt;
  color: #2c3e50;
}
</style>
