<template>
  <div class="artistSuggestions">
    <div class="heading">
      <h1>your artist suggestions to us!</h1>
    </div>
    <div class="links">
      <a @click="switchManage()">manage suggestions</a>
      <router-link to="/songSuggestions">see songs</router-link>
    </div>
    <div class="artist" v-for="artist in artists" :key="artist._id">
      <div class="image">
        <img :src="artist.image">
      </div>
      <div class="info">
        <div v-if="artist._id === editCheck()" class="form, namebox">
          <input v-model="artistName" placeholder="artist name">
          <div class="name">
            <input v-model="artistCountry" class="midBuffer" placeholder="artist country">
            <div class="buffer"></div>
            <input v-model="artistAlbum" class="midBuffer" placeholder="your fav album">
          </div>
        </div>
        <div v-else class="namebox">
          <h1>{{artist.name}}</h1>
          <div class="name">
            <h2 class="midBuffer">{{artist.country}}</h2>
            <div class="buffer"></div>
            <h2 class="midBuffer">{{artist.album}}</h2>
          </div>
        </div>
      </div>
      <button v-if="artist._id === editCheck()" @click="saveArtist(artist)">save</button>
      <button v-else-if="manageCheck()" @click="openEdit(artist)">edit</button>
      <button v-show="manageCheck()" @click="deleteArtist(artist)">delete</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'artistSuggestions',
  data() {
    return {
      manage: false,
      editID: "0",
      artists: [],
      artistName: "",
      artistCountry: "",
      artistAlbum: "",
    }
  },
  created() {
    this.getArtists();
  },
  methods: {
    async getArtists() {
      try {
        let response = await axios.get("/api/artists");
        this.artists = response.data;
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
    async deleteArtist(artist) {
      try {
        await axios.delete("/api/artists/" + artist._id);
        this.getArtists();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    openEdit(artist) {
      this.editID = artist._id;
      this.artistName = artist.name;
      this.artistCountry = artist.country;
      this.artistAlbum = artist.album;
    },
    async saveArtist(artist) {
      try {
        await axios.put("/api/artists/" + artist._id, {
          name: this.artistName,
          country: this.artistCountry,
          album: this.artistAlbum
        });
        this.getArtists();
        this.editID = "0";
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

.artistSuggestions {
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

.artist {
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

.namebox input {
  font-size: 18pt;
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

input {
  border-radius: 15px;
  width: 400px;
  height: 30px;
  font-size: 16pt;
  margin: 10px 20px;
}

</style>
