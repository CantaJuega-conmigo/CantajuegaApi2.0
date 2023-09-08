const { check } = require("express-validator");
module.exports = [
  ///firstName
  check("firstName")
    .notEmpty()
    .withMessage("El campo de nombre no puede estar vacio.")
    .isAlpha("es-ES")
    .withMessage("El nombre no puede tener numeros ni caracteres especiales.")
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener como minimo 2 letras.")
    .isLength({ max: 20 })
    .withMessage("El nombre debe tener menos 20 letras")
    .escape(),
  ///para lastName
  check("lastName")
    .notEmpty()
    .withMessage("El campo de apellido no puede estar vacio.")
    .isAlpha("es-ES")
    .withMessage("El apellido no puede tener numeros ni caracteres especiales.")
    .isLength({ min: 2 })
    .withMessage("El apellido debe tener como minimo 2 letras.")
    .isLength({ max: 20 })
    .withMessage("El apellido debe tener menos 20 letras")
    .escape(),
  ////email
  check("email")
    .notEmpty()
    .withMessage("El campo de email, no puede estar vacío.")
    .isEmail()
    .withMessage("El email tiene un formato no permitido")
    .isLength({ min: 6, max: 60 })
    .withMessage(
      "El email debe tener como minimo 6 caracteres y 60 como maximo."
    )
    .escape(),
  ///password
  check("password")
    .notEmpty()
    .withMessage("El campo de contraseña no puede estar vacío")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres")
    .isLength({ max: 25 })
    .withMessage("Contraseña muy larga.")
    .isStrongPassword({
      minLength: 8,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0,
    })
    .withMessage("La contraseña debe tener, 1 mayúscula")
    .escape(), //escape limpia el campo recibido para evitar scripts maliciosos.
];
