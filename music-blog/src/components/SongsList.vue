<template>
  <div class="wrapper">
    <h1 v-if="this.$root.$data.songs.length < 1">Songs Not Found</h1>
    <div v-else class="songs">
      <div class="song" v-for="song in songs" :key="song.id">
        <div class="image">
          <img :src="'/images/'+song.image">
        </div>
        <div class="info">
          <div class="artist">
            <h1>{{song.name}}</h1>
          </div><br>
          <h2>{{song.artist}}</h2><br>
          <h2>{{song.genre}}</h2>
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
  border: 2px solid red;
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
    width: 100%;
  }

  .song {
    display: flex;
    height: 300px;
    width: 100%;
    border: 1px solid green;
    margin-bottom: 50px;
    background-color: #424381;
  }

  .image {
    border: 2px solid blue;
    height: 300px;
    width: 300px;
  }

  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
  }


</style>
