const { getObjectAtributtes } = require("../utils");
const { validationResult } = require("express-validator");
module.exports = async (req, res, next) => {
  console.log("aqui llego middleware");
  let errors;
  try {
    ///validaciones por express-validator
    const validateErrorsExpress = validationResult(req);
    const isAnyError = !validateErrorsExpress.isEmpty();

    if (isAnyError) {
      errors = validateErrorsExpress;
      throw new Error();
    }
    ///validaciones adicionales por si falla la de express-validator
    const { firstName, lastName, email, password } = req.body;

    const correctAtributtes = ["firstName", "lastName", "email", "password"];
    const MissingAtributtes = correctAtributtes.filter((i) => !req.body[i]); //aqui se guardan el nombre de los atributos necesarios que no vienen

    const bodyAtributtes = getObjectAtributtes(req.body);
    const incorrectAtributtes = bodyAtributtes.filter(
      //aqui los atributos adicionales que vienen y no deberian venir
      (item, index) => !bodyAtributtes.includes(correctAtributtes[index])
    );
    if (incorrectAtributtes.length) {
      throw new Error(
        `${incorrectAtributtes},${
          incorrectAtributtes.length > 1
            ? "are incorrect attributes"
            : "is an incorrect attribute"
        }`
      );
    }
    if (!firstName || !lastName || !email || !password) {
      throw new Error(
        `${MissingAtributtes} ${
          MissingAtributtes.length > 1 ? "are" : "is"
        } necessary.`
      );
    }
    next();
  } catch (error) {
    error.message = error.message ?? "Error in server.";
    res.status(400).send({
      error: true,
      message: errors ?? error.message,
    });
  }
};
