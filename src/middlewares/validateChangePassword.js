const { validationResult } = require("express-validator");
const { ErrorResponse } = require("../utils");
module.exports = async (req, res, next) => {
    let errors
    console.log('aaqui llego');
  try {
    const validateErrorsExpress = validationResult(req);
    const isAnyError = !validateErrorsExpress.isEmpty();
    if (isAnyError) {
        errors = validateErrorsExpress;
        throw new Error('Ha ocurrido un error al intentar cambiar la contraseña');
      }
    return next()
  } catch (error) {
    return ErrorResponse(res,401,error,errors)
  }
};
