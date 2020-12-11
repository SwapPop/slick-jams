<template>
  <div class="artistSuggestion">
    <div class="heading">
      <h1>your artist suggestions to us!</h1>
    </div>
    <div class="artist" v-for="artist in artists" :key="artist._id">
      <div class="image">
        <img :src="artist.image">
      </div>
      <div class="info">
        <div class="namebox">
          <div class="buffer"></div>
          <div class="name">
            <h1>{{artist.name}}</h1>
            <h2>{{artist.album}}</h2>
            <h2>{{artist.country}}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'artistSuggestions',
  data() {
    return {
      artists: []
    }
  },
  created: {
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
  },
}
</script>

<style scoped>
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
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

.artist {
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

</style>
