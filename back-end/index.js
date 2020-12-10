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
  dest: 'localhost:8080/images/',
  limits: {
    fileSize: 10000000
  }
});

const songSchema = new mongoose.Schema({
  rank: Int,
  title: String,
  artist: String,
  genre: String,
  image: String
});

const Song = mongoose.model('Song', songSchema);

app.listen(3030, () => console.log('Server listening on port 3030!'));
