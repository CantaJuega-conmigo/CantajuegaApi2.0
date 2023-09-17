const { check } = require("express-validator");
module.exports = check("email")
    .notEmpty()
    .withMessage("El campo de email, no puede estar vacío.")
    .isEmail()
    .withMessage("El email tiene un formato no permitido")
    .isLength({ min: 6, max: 60 })
    .withMessage(
      "El email debe tener como minimo 6 caracteres y 60 como maximo."
    )
    .escape();
