const { body, validationResult } = require("express-validator");

// Validation rules
const directorValidationRules = () => {
  return [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Director name is required"),

    body("nationality")
      .trim()
      .notEmpty()
      .withMessage("Nationality is required"),

    body("birthYear")
      .isInt({ min: 1800, max: new Date().getFullYear() })
      .withMessage("Birth year must be a valid year"),

    body("awards")
      .optional()
      .isInt({ min: 0 })
      .withMessage("Awards must be a positive number"),
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
  directorValidationRules,
  validate,
};