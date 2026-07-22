const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  language: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Movie", movieSchema);