/**
 * @swagger
 * tags:
 *   name: Actors
 *   description: Actors API
 */

const express = require("express");
const router = express.Router();

const actorsController = require("../controllers/actors");

const {
  actorValidationRules,
  validate
} = require("../validation/actorValidation");

/**
 * @swagger
 * /actors:
 *   get:
 *     summary: Get all actors
 *     tags: [Actors]
 *     responses:
 *       200:
 *         description: Returns all actors
 */
router.get("/", actorsController.getAllActors);

/**
 * @swagger
 * /actors/{id}:
 *   get:
 *     summary: Get an actor by ID
 *     tags: [Actors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Actor found
 *       404:
 *         description: Actor not found
 */
router.get("/:id", actorsController.getActorById);

/**
 * @swagger
 * /actors:
 *   post:
 *     summary: Create a new actor
 *     tags: [Actors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *               nationality:
 *                 type: string
 *               gender:
 *                 type: string
 *               famousMovie:
 *                 type: string
 *               awards:
 *                 type: integer
 *               active:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Actor created
 */
router.post(
  "/",
  actorValidationRules(),
  validate,
  actorsController.createActor
);

/**
 * @swagger
 * /actors/{id}:
 *   put:
 *     summary: Update an actor
 *     tags: [Actors]
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
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *               nationality:
 *                 type: string
 *               gender:
 *                 type: string
 *               famousMovie:
 *                 type: string
 *               awards:
 *                 type: integer
 *               active:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Actor updated
 */
router.put(
  "/:id",
  actorValidationRules(),
  validate,
  actorsController.updateActor
);

/**
 * @swagger
 * /actors/{id}:
 *   delete:
 *     summary: Delete an actor
 *     tags: [Actors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Actor deleted
 */
router.delete("/:id", actorsController.deleteActor);

module.exports = router;