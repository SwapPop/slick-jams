<template>
    <div class="wrapper">
      <h1 v-if="this.$root.$data.artists.length < 1">Artists Not Found</h1>
      <div v-else class="artists">
        <div class="artist" v-for="artist in artists" :key="artist.id">
          <div class="image">
            <img :src="artist.image">
          </div>
          <div class="info">
            <div class="namebox">
              <h1>#{{artist.id}})&#9;{{artist.name}}</h1>
            </div>
            <div class="artistbox">
              <p>country of origin: </p><h2>{{artist.country}}</h2><br>
              <p>latest album: </p><h2>{{artist.album}}</h2><br/>
              <p>featured songs: </p><h2>{{artist.songs}}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ArtistList',
  props: {
    artists: Array
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 400px;
  width: 400px;
}

ul {
  padding: 15px;
}
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 500px;
    width: 100%;
  }

  .artists {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 500px;
    width: 90%;
  }

  .artist {
    display: flex;
    min-height: 500px;
    width: 100%;
    margin-bottom: 100px;
    background-color: #424381;
    color: #dddddd;
    padding: 25px;
  }

  .image {
    height: 400px;
    width: 400px;
  }

  .namebox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    background-color: #dddddd;
    color: #2c3e50;
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
