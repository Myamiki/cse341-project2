/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: Movies API
 */

const express = require("express");
const router = express.Router();

const moviesController = require("../controllers/movies");

const {
  movieValidationRules,
  validate
} = require("../validation/movieValidation");

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Get all movies
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: Returns all movies
 */
router.get("/", moviesController.getAllMovies);

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Get a movie by ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie found
 *       404:
 *         description: Movie not found
 */
router.get("/:id", moviesController.getMovieById);

/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Create a new movie
 *     tags: [Movies]
 *     responses:
 *       201:
 *         description: Movie created
 */
router.post(
  "/",
  movieValidationRules(),
  validate,
  moviesController.createMovie
);

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: Update a movie
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie updated
 */
router.put(
  "/:id",
  movieValidationRules(),
  validate,
  moviesController.updateMovie
);

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: Delete a movie
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie deleted
 */
router.delete("/:id", moviesController.deleteMovie);

module.exports = router;