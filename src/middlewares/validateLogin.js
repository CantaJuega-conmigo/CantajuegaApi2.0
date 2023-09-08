const { validationResult } = require("express-validator");

module.exports = async ( req, res, next) => {
  let errors
  try {
    ///validaciones con express-validatos
    const validateErrors = validationResult(req);
    const isAnyError =!validateErrors.isEmpty()
    
    if (isAnyError) {
      errors=validateErrors
      throw new Error
    }
    //aqui validamos por si la de express-validator es pasada.
    const {email,password}=req.body
    if(!email ||!password){
      throw new Error('Algo salio mal!.')
    }
    next();
  } catch (error) {
    error.message=error.message??"Error in server."
    res.status(400).send({
      error: true,
      message: errors ??error.message,
    });
  }
};
