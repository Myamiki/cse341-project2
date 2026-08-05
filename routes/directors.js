/**
 * @swagger
 * tags:
 *   name: Directors
 *   description: Directors API
 */

const express = require("express");
const router = express.Router();

const directorsController = require("../controllers/directors");

const {
  directorValidationRules,
  validate,
} = require("../validation/directorValidation");

const isAuthenticated = require("../middleware/authenticate");

/**
 * @swagger
 * /directors:
 *   get:
 *     summary: Get all directors
 *     tags: [Directors]
 *     responses:
 *       200:
 *         description: Returns all directors
 */
router.get("/", directorsController.getAllDirectors);

/**
 * @swagger
 * /directors/{id}:
 *   get:
 *     summary: Get a director by ID
 *     tags: [Directors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Director found
 *       404:
 *         description: Director not found
 */
router.get("/:id", directorsController.getDirectorById);

/**
 * @swagger
 * /directors:
 *   post:
 *     security:
 *       - GitHubOAuth: []
 *     summary: Create a new director
 *     tags: [Directors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               nationality:
 *                 type: string
 *               birthYear:
 *                 type: integer
 *               awards:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Director created
 */
router.post(
  "/",
  isAuthenticated,
  directorValidationRules(),
  validate,
  directorsController.createDirector
);

/**
 * @swagger
 * /directors/{id}:
 *   put:
 *     security:
 *       - GitHubOAuth: []
 *     summary: Update a director
 *     tags: [Directors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Director updated
 */
router.put(
  "/:id",
  isAuthenticated,
  directorValidationRules(),
  validate,
  directorsController.updateDirector
);

/**
 * @swagger
 * /directors/{id}:
 *   delete:
 *     security:
 *       - GitHubOAuth: []
 *     summary: Delete a director
 *     tags: [Directors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Director deleted
 */
router.delete(
  "/:id",
  isAuthenticated,
  directorsController.deleteDirector
);

module.exports = router;