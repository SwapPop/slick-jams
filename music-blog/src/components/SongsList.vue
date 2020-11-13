<template>
  <div class="wrapper">
    <h1 v-if="this.$root.$data.songs.length < 1">Songs Not Found</h1>
    <div v-else class="songs">
      <div class="song" v-for="song in songs" :key="song.id">
        <div class="image">
          <img :src="song.image">
        </div>
        <div class="info">
          <div class="namebox">
            <h1>{{song.name}}</h1>
          </div>
          <div class="artistbox">
            <h2>{{song.artist}}</h2><br>
            <h2>{{song.genre}}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SongsList',
  props: {
    songs: Array
  }
}
</script>

<style scoped>
img {
  height: 300px;
  width: 300px;
}
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 600px;
    width: 100%;
  }

  .songs {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 600px;
    width: 90%;
  }

  .song {
    display: flex;
    height: 300px;
    width: 100%;
    margin-bottom: 100px;
    background-color: #2c3e50df;
    color: #dddddd;
  }

  .image {
    height: 300px;
    width: 300px;
  }

  .namebox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
    background-color: #80132f;
  }

  .artistbox {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }


</style>
