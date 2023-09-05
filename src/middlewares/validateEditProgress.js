const { ProgressAtributtes } = require("../Constants/ProgressConstants");
const {
  validateProgressAtributtes,
  validateProgressVideosAtributtes,
} = require("../utils");

module.exports = (req, res, next) => {
  const { select } = req.query;
  const atributtes = ProgressAtributtes();

  if (!select) {
    try {
      const validate = validateProgressAtributtes(
        req.body,
        atributtes,
        "ProgressModelAtribute"
      );
      return next();
    } catch (error) {
      console.log("error");
      return res.status(406).send(error.message);
    }
  } else {
    try {
      if (!atributtes.includes(select))
        throw new Error(`Query ${select} no valida`);
      validateProgressVideosAtributtes(req.body, select);
      return next();
    } catch (error) {
      return res.status(406).send(error.message);
    }
  }
};
