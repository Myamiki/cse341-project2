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

// Authentication middleware
const isAuthenticated = require("../middleware/authenticate");

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
 *     security:
 *       - GitHubOAuth: []
 *     summary: Create a new movie
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               genre:
 *                 type: string
 *               director:
 *                 type: string
 *               releaseYear:
 *                 type: integer
 *               duration:
 *                 type: integer
 *               rating:
 *                 type: number
 *               language:
 *                 type: string
 *               available:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Movie created
 *       401:
 *         description: Authentication required
 */
router.post(
  "/",
  isAuthenticated,
  movieValidationRules(),
  validate,
  moviesController.createMovie
);

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     security:
 *       - GitHubOAuth: []
 *     summary: Update a movie
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               genre:
 *                 type: string
 *               director:
 *                 type: string
 *               releaseYear:
 *                 type: integer
 *               duration:
 *                 type: integer
 *               rating:
 *                 type: number
 *               language:
 *                 type: string
 *               available:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Movie updated
 *       401:
 *         description: Authentication required
 */
router.put(
  "/:id",
  isAuthenticated,
  movieValidationRules(),
  validate,
  moviesController.updateMovie
);

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     security:
 *       - GitHubOAuth: []
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
 *       401:
 *         description: Authentication required
 */
router.delete(
  "/:id",
  isAuthenticated,
  moviesController.deleteMovie
);

module.exports = router;