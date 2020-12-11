<template>
  <div class="suggestionBox">
    <div class="heading">
      <h1>suggestion box:</h1>
    </div>
    <p></p>
    <br/>
    <div class="add">
      <h2>song we should check out:</h2>
      <div class="form">
        <input v-model="songTitle" placeholder="title">
        <p></p>
        <input v-model="songArtist" placeholder="artist">
        <p></p>
        <input v-model="songGenre" placeholder="genre (optional)">
        <h2>image (optional):</h2>
        <input type="file" name="photo" @change="songFileChanged">

        <button v-bind:class="{ active: songButtonActive }" @click="postSong">{{this.songButton}}</button>
      </div>
    </div>
    <div class="add">
      <h2>artist we should check out:</h2>
      <div class="form">
        <input v-model="artistName" placeholder="artist name">
        <p></p>
        <input v-model="artistAlbum" placeholder="favorite album (optional)">
        <p></p>
        <input v-model="artistCountry" placeholder="country of origin (optional)">
        <h2>image (optional):</h2>
        <input type="file" name="photo" @change="artistFileChanged">

        <button v-bind:class="{ active: artistButtonActive }" @click="postArtist">{{this.artistButton}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Suggestions',
  data() {
    return {
      songTitle: "",
      songArtist: "",
      songGenre: "",
      songFile: null,
      artistName: "",
      artistAlbum: "",
      artistCountry: "",
      artistFile: null,
      songs: [],
      artists: [],
      songButton: "submit",
      artistButton: "submit",
      songButtonActive: false,
      artistButtonActive: false
    }
  },
  created() {
    this.getSongs();
    this.getArtists();
  },
  methods: {
    songFileChanged(event) {
      this.songFile = event.target.files[0]
    },
    artistFileChanged(event) {
      this.artistFile = event.target.files[0]
    },
    async postSong() {
      try {
        const formData = new FormData();
        formData.append('photo', this.songFile, this.songFile.name)
        let r1 = await axios.post('/api/photos', formData);
        await axios.post('/api/songs', {
          title: this.songTitle,
          artist: this.songArtist,
          genre: this.songGenre,
          image: r1.data.path,
        });
        this.songButton = "submitted!";
      } catch (error) {
        console.log(error);
      }
    },
    async postArtist() {
      try {
        const formData = new FormData();
        formData.append('photo', this.artistFile, this.artistFile.name)
        let r1 = await axios.post('/api/photos', formData);
        await axios.post('/api/artists', {
          name: this.artistName,
          album: this.artistAlbum,
          country: this.artistCountry,
          image: r1.data.path,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getSongs() {
      try {
        let response = await axios.get("/api/songs");
        this.songs = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getArtists() {
      try {
        let response = await axios.get("/api/artists");
        this.artists = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.suggestionBox {
  background-color: #dddddd;
}

.heading {
  padding:200px 25px;
}

.heading h1 {
  font-size: 36pt;
  color: #2c3e50;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.add {
  margin: 0px 0px 150px 0px;
}

input {
  border-radius: 15px;
  width: 50%;
  height: 30px;
  margin: 30px 10px;
  padding: 5px 15px;
  font-size: 16pt;
}

button {
  background-color: #424381;
  width: 120px;
  height: 60px;
  border-radius: 50px;
  color: #dddddd;
  font-size: 20pt;
  border-bottom-color: #424381;
  border-top-color: #424381;
  margin: 25px;
}

.active {
  background-color: green;
}

h2 {
  font-size: 24pt;
}

</style>
