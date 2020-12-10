<template>
  <div class="wrapper">
    <h1 v-if="this.$root.$data.collection.length < 1">( your collection is empty, add songs in "discover" )</h1>
    <div v-else class="songs">
      <div class="song" v-for="song in collection" :key="song.rank">
        <div class="image">
          <img :src="song.image">
        </div>
        <div class="info">
          <div class="namebox">
            <div class="buffer"></div>
            <div class="name">
              <h1>{{song.name}}</h1>
              <h2>{{song.artist}}</h2>
            </div>
            <div class="plus">
              <span class="tooltiptext">remove from collection</span>
              <img src="../assets/minus.png" @click="removeFromCollection(song)"/>
            </div>
            <div class="play">
              <img src="../assets/play.png"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionList',
  props: {
    collection: Array
  },
  methods: {
    removeFromCollection(song) {
      this.$root.$data.collection.splice(this.$root.$data.collection.indexOf(song), 1);
    }
  }
}
</script>

<style scoped>
img {
  height: 150px;
  width: 150px;
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
    height: 150px;
    width: 100%;
    margin-bottom: 20px;
    background-color: #2c3e50df;
    color: #dddddd;
  }

  .image {
    height: 150px;
    width: 150px;
  }

  .namebox {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    background-color: #38659c;
  }

  .buffer {
    float: left;
    height: 100%;
    width: 80px;
  }

  .name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .plus, .play {
    float: right;
    height: 40px;
    width: 40px;
    position: relative;
    display: inline-block;
  }

  .plus img, .play img {
    height: 40px;
    width: 40px;
  }

  .plus img:hover, .play img:hover {
    border-radius: 15px;
    background-color: #cccccc55;
  }

  .plus img:active, .play img:active {
    background-color: #cccccc;
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
