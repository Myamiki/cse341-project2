const { body, validationResult } = require("express-validator");

const actorValidationRules = () => {
  return [
    body("name").notEmpty().withMessage("Name is required"),
    body("age").isInt().withMessage("Age must be a number"),
    body("nationality").notEmpty().withMessage("Nationality is required"),
    body("gender").notEmpty().withMessage("Gender is required"),
    body("famousMovie").notEmpty().withMessage("Famous movie is required"),
    body("awards").isInt().withMessage("Awards must be a number"),
    body("active").isBoolean().withMessage("Active must be true or false")
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
  actorValidationRules,
  validate
};