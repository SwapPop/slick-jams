<template>
  <div class="suggestionBox">
    <div class="heading">
      <h1>suggestion box:</h1>
    </div>
    <div class="links">
      <router-link to="/songSuggestions">top song suggestions!</router-link>
      <router-link to="/artistSuggestions">top artist suggestions!</router-link>
    </div>
    <p></p>
    <br/>
    <div class="add">
      <h2>song we should check out:</h2>
      <div class="form">
        <input v-bind:class="{ active: songButtonActive }" v-model="songTitle" placeholder="title">
        <p></p>
        <input v-bind:class="{ active: songButtonActive }" v-model="songArtist" placeholder="artist">
        <p></p>
        <input v-bind:class="{ active: songButtonActive }" v-model="songGenre" placeholder="genre (optional)">
        <h2>image (optional):</h2>
        <input type="file" name="photo" @change="songFileChanged">

        <button v-if="!songButtonActive" @click="postSong">{{this.songButton}}</button>
        <button v-else class="buttonActive" @click="resetSong">{{this.songButton}}</button>
      </div>
    </div>
    <div class="add">
      <h2>artist we should check out:</h2>
      <div class="form">
        <input v-bind:class="{ active: artistButtonActive }" v-model="artistName" placeholder="artist name">
        <p></p>
        <input v-bind:class="{ active: artistButtonActive }" v-model="artistCountry" placeholder="country of origin (optional)">
        <p></p>
        <input v-bind:class="{ active: artistButtonActive }" v-model="artistAlbum" placeholder="favorite album (optional)">
        <h2>image (optional):</h2>
        <input type="file" name="photo" @change="artistFileChanged">

        <button v-if="!artistButtonActive" @click="postArtist">{{this.artistButton}}</button>
        <button v-else class="buttonActive" @click="resetArtist">{{this.artistButton}}</button>
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
  methods: {
    songFileChanged(event) {
      this.songFile = event.target.files[0]
    },
    artistFileChanged(event) {
      this.artistFile = event.target.files[0]
    },
    resetSong() {
      this.songButton = "submit";
      this.songButtonActive = !this.songButtonActive;
      this.songTitle = "";
      this.songArtist = "";
      this.songGenre = "";
      this.songFile = null;
    },
    resetArtist() {
      this.artistButton = "submit";
      this.artistButtonActive = !this.artistButtonActive;
      this.artistName = "";
      this.artistAlbum = "";
      this.artistCountry = "";
      this.songFile = null;
    },
    async postSong() {
      try {
        const formData = new FormData();
        if (this.songFile !== null) {
          formData.append('photo', this.songFile, this.songFile.name)
          let r1 = await axios.post('/api/photos', formData);
          await axios.post('/api/songs', {
            title: this.songTitle,
            artist: this.songArtist,
            genre: this.songGenre,
            image: r1.data.path,
          });
        }
        else {
          await axios.post('/api/songs', {
            title: this.songTitle,
            artist: this.songArtist,
            genre: this.songGenre
          });
        }
        this.songButton = 'submitted! another?';
        this.songButtonActive = !this.songButtonActive;
      } catch (error) {
        console.log(error);
      }
    },
    async postArtist() {
      try {
        const formData = new FormData();
        if (this.artistFile !== null) {
          formData.append('photo', this.artistFile, this.artistFile.name)
          let r1 = await axios.post('/api/photos', formData);
          await axios.post('/api/artists', {
            name: this.artistName,
            country: this.artistCountry,
            album: this.artistAlbum,
            image: r1.data.path,
          });
        }
        else {
          await axios.post('/api/artists', {
            name: this.artistName,
            country: this.artistCountry,
            album: this.artistAlbum
          });
        }
        this.artistButton = "sumbitted! another?";
        this.artistButtonActive = !this.artistButtonActive;
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
  padding-bottom: 50px;
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
  width: 150px;
  height: 60px;
  border-radius: 50px;
  color: #dddddd;
  font-size: 20pt;
  border-bottom-color: #424381;
  border-top-color: #424381;
  margin: 25px;
}

.active {
  background-color: #20f543;
}

.buttonActive {
  background-color: green;
}

h2 {
  font-size: 24pt;
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
}

</style>
