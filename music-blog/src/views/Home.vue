<template>
  <div class="home">
    <SongsList/>
  </div>
</template>

<script>
// @ is an alias to /src
import SongsList from '@/components/SongsList.vue'

export default {
  name: 'Home',
  components: {
    SongsList
  }
}
</script>

<style scoped>
.home {
  background-color: #8f8787;
}
</style>
