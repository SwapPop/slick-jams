<template>
  <div class="wrapper">
    <h1 v-if="this.$root.$data.songs.length < 1">Songs Not Found</h1>
    <div v-else class="songs">
      <div class="song" v-for="song in songs" :key="song.rank">
        <div class="image">
          <img :src="song.image">
        </div>
        <div class="info">
          <div class="namebox">
            <div class="buffer"></div>
            <div class="name">
              <h1>{{song.name}}</h1>
            </div>
            <div class="plus">
              <span v-if="inCollection(song)" class="tooltiptext">in collection</span>
              <span v-else class="tooltiptext">add to collection</span>
              <img src="../assets/plus.png" @click="addToCollection(song)"/>
            </div>
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
  },
  methods: {
    inCollection(song) {
        return this.$root.$data.collection.includes(song);
    },
    addToCollection(song) {
      if (!this.$root.$data.collection.includes(song)) {
        this.$root.$data.collection.push(song);
        console.log(this.$root.$data.collection);
      }
    },
  },
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
    justify-content: flex-start;
    width: 100%;
    height: 50%;
    background-color: #80132f;
  }

  .buffer {
    float: left;
    height: 100%;
    width: 40px;
  }

  .name {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .plus {
    float: right;
    height: 40px;
    width: 40px;
    position: relative;
    display: inline-block;
  }

  .plus img {
    height: 40px;
    width: 40px;
  }

  .plus img:hover {
    border-radius: 15px;
    background-color: #cccccc55;
  }

  .plus img:active{
    background-color: #cccccc;
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

  /* Tooltip text */
  .plus .tooltiptext {
    visibility: hidden;
    top: -5px;
    right: 105%;
    width: 120px;
    background-color: #cccccc55;
    text-align: center;
    padding: 5px 0;
    border-radius: 15px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;

    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  .plus:hover .tooltiptext {
    visibility: visible;
  }

</style>
