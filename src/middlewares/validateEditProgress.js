const { ProgressAtributtes } = require("../Constants/ProgressConstants");
const {
  validateProgressAtributtes,
  validateProgressVideosAtributtes,
  ErrorResponse,
} = require("../utils");

module.exports = (req, res, next) => {
  const { select } = req.query;//select representa al progreso a editar
  const atributtes = ProgressAtributtes();

  if (!select) {
    try {
      const validate = validateProgressAtributtes(
        req,
        atributtes,
        "ProgressModelAtribute"
      );
      return next();
    } catch (error) {
      console.log("error aqiui");
      return ErrorResponse(res,406,error);
    }
  } else {
    try {
      ///validamos que la propiedad del progreso a editar sea correcta
      if (!atributtes.includes(select))
        throw new Error(`Query ${select} no valida`);
      validateProgressVideosAtributtes(req, select);
      return next();
    } catch (error) {
      return ErrorResponse(res,406,error);
    }
  }
};
