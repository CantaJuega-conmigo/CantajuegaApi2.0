const { validationResult } = require('express-validator');
const { ErrorResponse } = require('../utils');

module.exports = (req, res, next) => {
  let errors;
  try {
    const validateErrors = validationResult(req);
    if (!validateErrors.isEmpty()) {
      errors = validateErrors;
      throw new Error('Error');
    }
    next();
  } catch (error) {
    ErrorResponse(res, 500, error, errors);
  }
};
