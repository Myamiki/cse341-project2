const Actor = require("../models/actor");

// GET all actors
const getAllActors = async (req, res) => {
  try {
    const actors = await Actor.find();
    res.status(200).json(actors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET one actor
const getActorById = async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id);

    if (!actor) {
      return res.status(404).json({ message: "Actor not found" });
    }

    res.status(200).json(actor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST actor
const createActor = async (req, res) => {
  try {
    const actor = new Actor(req.body);
    const savedActor = await actor.save();

    res.status(201).json(savedActor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT actor
const updateActor = async (req, res) => {
  try {
    const updatedActor = await Actor.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedActor) {
      return res.status(404).json({ message: "Actor not found" });
    }

    res.status(200).json(updatedActor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE actor
const deleteActor = async (req, res) => {
  try {
    const deletedActor = await Actor.findByIdAndDelete(req.params.id);

    if (!deletedActor) {
      return res.status(404).json({ message: "Actor not found" });
    }

    res.status(200).json({
      message: "Actor deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllActors,
  getActorById,
  createActor,
  updateActor,
  deleteActor
};