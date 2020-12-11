const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/mtotm', {
  useNewUrlParser: true
});

const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  genre: String,
  image: String
});

const Song = mongoose.model('Song', songSchema);

const artistSchema = new mongoose.Schema({
  name: String,
  country: String,
  album: String,
  // songs: Array,
  image: String
});

const Artist = mongoose.model('Artist', artistSchema);

app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

app.post('/api/songs', async (req, res) => {
  console.log("you are connected!")
  const song = new Song({
    title: req.body.title,
    artist: req.body.artist,
    genre: req.body.genre,
    image: req.body.image
  });
  try {
    await song.save();
    res.send(song);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/artists', async (req, res) => {
  const artist = new Artist({
    name: req.body.name,
    album: req.body.album,
    country: req.body.country,
    image: req.body.image
  });
  try {
    await artist.save();
    res.send(artist);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/songs', async (req, res) => {
  try {
    let songs = await Song.find();
    res.send(songs);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/artists', async (req, res) => {
  try {
    let artists = await Artist.find();
    res.send(artists);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(8000, () => console.log('Server listening on port 8000!'));
