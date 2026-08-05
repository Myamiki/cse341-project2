const { body, validationResult } = require("express-validator");

// Validation rules
const reviewValidationRules = () => {
  return [
    body("movieTitle")
      .trim()
      .notEmpty()
      .withMessage("Movie title is required"),

    body("reviewer")
      .trim()
      .notEmpty()
      .withMessage("Reviewer name is required"),

    body("rating")
      .isFloat({ min: 1, max: 10 })
      .withMessage("Rating must be between 1 and 10"),

    body("comment")
      .trim()
      .notEmpty()
      .withMessage("Comment is required"),
  ];
};

// Validation middleware
const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  next();
};

module.exports = {
  reviewValidationRules,
  validate,
};