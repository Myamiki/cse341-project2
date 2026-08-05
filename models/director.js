const mongoose = require("mongoose");

const directorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  birthYear: {
    type: Number,
    required: true,
  },
  awards: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Director", directorSchema);