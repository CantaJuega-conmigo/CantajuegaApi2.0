const { validationResult } = require("express-validator");
const { ErrorResponse } = require("../utils");
const validationsTocreateStage = require("../helpers/Stagehelpers/validationsTocreateStage");

module.exports = (req, res, next) => {
  let errors;
  try {
    const validateErrors = validationResult(req);
    if (!validateErrors.isEmpty()) {
      errors = validateErrors;
      throw new Error("Error");
    }
    const extravalidations = validationsTocreateStage(req);

    next();
  } catch (error) {
    ErrorResponse(res, 500, error, errors);
  }
};
