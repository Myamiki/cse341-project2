const { body, validationResult } = require("express-validator");

const movieValidationRules = () => {
  return [
    body("title").notEmpty().withMessage("Title is required"),
    body("genre").notEmpty().withMessage("Genre is required"),
    body("director").notEmpty().withMessage("Director is required"),
    body("releaseYear").isInt().withMessage("Release year must be a number"),
    body("duration").isInt().withMessage("Duration must be a number"),
    body("rating").isFloat().withMessage("Rating must be a decimal number"),
    body("language").notEmpty().withMessage("Language is required"),
    body("available").isBoolean().withMessage("Available must be true or false")
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  return res.status(400).json({
    errors: errors.array()
  });
};

module.exports = {
  movieValidationRules,
  validate
};