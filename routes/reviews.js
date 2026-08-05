/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Reviews API
 */

const express = require("express");
const router = express.Router();

const reviewsController = require("../controllers/reviews");

const {
  reviewValidationRules,
  validate,
} = require("../validation/reviewValidation");

const isAuthenticated = require("../middleware/authenticate");

/**
 * @swagger
 * /reviews:
 *   get:
 *     summary: Get all reviews
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: Returns all reviews
 */
router.get("/", reviewsController.getAllReviews);

/**
 * @swagger
 * /reviews/{id}:
 *   get:
 *     summary: Get a review by ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review found
 *       404:
 *         description: Review not found
 */
router.get("/:id", reviewsController.getReviewById);

/**
 * @swagger
 * /reviews:
 *   post:
 *     security:
 *       - GitHubOAuth: []
 *     summary: Create a new review
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               movieTitle:
 *                 type: string
 *               reviewer:
 *                 type: string
 *               rating:
 *                 type: number
 *               comment:
 *                 type: string
 *     responses:
 *       201:
 *         description: Review created
 */
router.post(
  "/",
  isAuthenticated,
  reviewValidationRules(),
  validate,
  reviewsController.createReview
);

/**
 * @swagger
 * /reviews/{id}:
 *   put:
 *     security:
 *       - GitHubOAuth: []
 *     summary: Update a review
 *     tags: [Reviews]
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
 *         description: Review updated
 */
router.put(
  "/:id",
  isAuthenticated,
  reviewValidationRules(),
  validate,
  reviewsController.updateReview
);

/**
 * @swagger
 * /reviews/{id}:
 *   delete:
 *     security:
 *       - GitHubOAuth: []
 *     summary: Delete a review
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review deleted
 */
router.delete(
  "/:id",
  isAuthenticated,
  reviewsController.deleteReview
);

module.exports = router;