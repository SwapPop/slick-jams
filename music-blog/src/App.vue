<template>
  <div id="app">
    <div id="nav">
      <div id="title">
        <router-link to="/"><h1> mtotm song picks </h1></router-link>
      </div>
      <div id="face">
        <router-link to="/"><img alt="My Face" src="./assets/MyFaceRed.png"></router-link>
      </div>
      <div id="links">
        <div class="wrapLink">
          <router-link to="/">discover</router-link>
          <router-link to="/artists">artist radar</router-link>
        </div>
      </div>
    </div>
    <router-view />
    <footer class="footer">
      <div class="footer-item"><a href="https://github.com/SwapPop/slick-jams.git">Link to GitHub Repo</a></div>
      <div class="footer-item"><h1>&#169;Jacob Taylor 2020</h1></div>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  font-size: 24pt;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

#title {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  padding: 10px;
  margin: 15px;
  text-decoration: none;
}

#nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "title face links";
  padding: 30px;
  background-color: #80132f;
}

#face {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#face img{
  height: 400px;
  width: 400px;
}

#links a {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 12px;
  font-weight: bold;
  font-size: 24pt;
  padding: 10px;
  margin: 15px;
  height: 35px;
}

#links a:hover {
  background-color: #cccccc55;
}

#links a.router-link-exact-active {
  color: #8f8787;
}

#links {
  grid-area: "links";
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#links .wrapLink {
  display: flex;
}

.footer {
  bottom: 0;
  width: 100%;
  background-color: #5c0e22;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
  text-align: center;
}

.footer-item {
  height: 50px;
  color: #8f8787;
}

.footer-item a {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 24pt;
  color: #8f8787;
  text-decoration: none;
}

.footer-item a:hover {
  color: #EBF5F5;
}

.footer-item a:active {
  color: #e1f3f5;
}
</style>
