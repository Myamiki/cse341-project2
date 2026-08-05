const Director = require("../models/director");

// GET all directors
const getAllDirectors = async (req, res) => {
  try {
    const directors = await Director.find();
    res.status(200).json(directors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET one director by ID
const getDirectorById = async (req, res) => {
  try {
    const director = await Director.findById(req.params.id);

    if (!director) {
      return res.status(404).json({ message: "Director not found" });
    }

    res.status(200).json(director);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE director
const createDirector = async (req, res) => {
  try {
    const director = new Director(req.body);
    const savedDirector = await director.save();
    res.status(201).json(savedDirector);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE director
const updateDirector = async (req, res) => {
  try {
    const director = await Director.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!director) {
      return res.status(404).json({ message: "Director not found" });
    }

    res.status(200).json(director);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE director
const deleteDirector = async (req, res) => {
  try {
    const director = await Director.findByIdAndDelete(req.params.id);

    if (!director) {
      return res.status(404).json({ message: "Director not found" });
    }

    res.status(200).json({ message: "Director deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllDirectors,
  getDirectorById,
  createDirector,
  updateDirector,
  deleteDirector,
};