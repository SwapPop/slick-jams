<template>
  <div class="songSuggestions">
    <div class="heading">
      <h1>your suggestions to us!</h1>
    </div>
    <div class="song" v-for="song in songs" :key="song._id">
      <div class="image">
        <img :src="song.image">
      </div>
      <div class="info">
        <div class="namebox">
          <div class="buffer"></div>
          <div class="name">
            <h2 class="midBuffer">{{song.artist}}</h2>
            <div class="midBuffer"></div>
            <h1 style="width: 20%;">{{song.title}}</h1>
            <div class="midBuffer"></div>
            <h2 class="midBuffer">{{song.genre}}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'songSuggestions',
  data() {
    return {
      songs: []
    }
  },
  created() {
    this.getSongs();
  },
  methods: {
    async getSongs() {
      try {
        let response = await axios.get("/api/songs");
        this.songs = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>

<style scoped>
img {
  height: 150px;
  width: 150px;
}

.songSuggestions {
  background-color: #dddddd;
}

.heading {
  padding:200px 25px;
}

.heading h1 {
  font-size: 36pt;
  color: #2c3e50;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
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

.midBuffer {
  width: 15%;
}

.name {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
}

</style>
