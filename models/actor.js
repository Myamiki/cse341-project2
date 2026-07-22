const mongoose = require("mongoose");

const actorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  famousMovie: {
    type: String,
    required: true
  },
  awards: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Actor", actorSchema);