const { check } = require("express-validator");
const emailValidator = require("./emailValidator");
const passwordValidator = require("./passwordValidator");

module.exports = [
  emailValidator,
  passwordValidator,
  check("newpassword")
    .notEmpty()
    .withMessage("Ingrese su nueva contraseña")
    .isLength({ min: 8 })
    .withMessage("La nueva contraseña debe tener al menos 8 caracteres")
    .isLength({ max: 25 })
    .withMessage("La nueva contraseña muy larga.")
    .isStrongPassword({
      minLength: 8,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0,
    })
    .withMessage("La nueva contraseña debe tener, 1 mayúscula")
    .escape(), //escape limpia el campo recibido para evitar scripts
];
