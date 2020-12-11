<template>
  <div class="songSuggestions">
    <div class="heading">
      <h1>your suggestions to us!</h1>
    </div>
    <div class="links">
      <a @click="switchManage()">manage suggestions</a>
    </div>
    <div class="song" v-for="song in songs" :key="song._id">
      <div class="image">
        <img :src="song.image">
      </div>
      <div class="info">
        <div v-if="song._id === editCheck()" class="form, namebox">
          <input v-model="songTitle">
          <div class="name">
            <input v-model="songArtist" class="midBuffer">
            <div class="buffer"></div>
            <input v-model="songGenre" class="midBuffer">
          </div>
        </div>
        <div v-else class="namebox">
          <h1>{{song.title}}</h1>
          <div class="name">
            <h2 class="midBuffer">{{song.artist}}</h2>
            <div class="buffer"></div>
            <h2 class="midBuffer">genre: {{song.genre}}</h2>
          </div>
        </div>
      </div>
      <button v-if="song._id === editCheck()" @click="saveSong">save</button>
      <button v-else-if="manageCheck()" @click="openEdit(song)">edit</button>
      <button v-show="manageCheck()" @click="deleteSong(song)">delete</button>
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
      manage: false,
      editID: "0",
      songs: [],
      songTitle: "",
      songArtist: "",
      songGenre: "",
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
    switchManage() {
      this.manage = !this.manage;
    },
    manageCheck() {
      return this.manage;
    },
    editCheck() {
      return this.editID;
    },
    async deleteSong(song) {
      try {
        await axios.delete("/api/songs/" + song._id);
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    openEdit(song) {
      this.editID = song._id;
      this.songTitle = song.title;
      this.songArtist = song.artist;
      this.songGenre = song.genre;
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
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

.song {
  display: flex;
  height: 150px;
  width: 100%;
  margin-bottom: 30px;
  background-color: #2c3e50df;
  color: #dddddd;
}

.image {
  height: 150px;
  width: 150px;
}

.namebox {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #38659c;
}

.namebox h1 {
  font-size: 32pt;
  padding: 5px 20px;
  color: #2c3e50;
}

.buffer {
  float: left;
  height: 100%;
  width: 80px;
}

.midBuffer {
  display: flex;
  justify-content: flex-start;
  width: 220px;
  padding: 5px 20px;
}

.name {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
}

.links a {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 12px;
  font-weight: bold;
  font-size: 24pt;
  padding: 20px;
  margin: 10px;
  height: 50px;
  color: #80132f;
  background-color: #2c3e50;
}

.links a:hover {
  background-color: #80132f55;
}

.links a.router-link-exact-active {
  color: #8f8787;
}

.links {
  grid-area: "links";
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0px 10px 50px 10px;
}

button {
  background-color: #424381;
  width: 150px;
  height: 60px;
  border-radius: 50px;
  color: #dddddd;
  font-size: 20pt;
  border-bottom-color: #424381;
  border-top-color: #424381;
  margin: 25px;
}

</style>
