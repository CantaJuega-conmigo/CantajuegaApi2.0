const { body, check, param } = require("express-validator");
const passwordValidator = require("./passwordValidator");

module.exports = [
  param("id").isUUID("all").withMessage("Incorrect type of param."),
  passwordValidator,
  body("firstName") ///con body a diferencia de check podemos usar el metodo optional(); para que no valide si no llega firstName
    .optional()
    .notEmpty()
    .withMessage("El campo de apellido no puede estar vacio.")
    .isAlpha("es-ES")
    .withMessage("El nombre no puede tener numeros ni caracteres especiales.")
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener como minimo 2 letras.")
    .isLength({ max: 20 })
    .withMessage("El nombre debe tener menos 20 letras")
    .escape(),
  body("lastName")
    .optional()
    .isAlpha("es-ES")
    .withMessage("El apellido no puede tener numeros ni caracteres especiales.")
    .isLength({ min: 2 })
    .withMessage("El apellido debe tener como minimo 2 letras.")
    .isLength({ max: 20 })
    .withMessage("El apellido debe tener menos 20 letras")
    .escape(),
  body("phone").optional().isNumeric().isLength({ min: 5 }).escape(),
];
