const { check } = require("express-validator");
const emailValidator = require("./emailValidator");
const passwordValidator = require("./passwordValidator");

module.exports = [
  emailValidator,
  passwordValidator[2],//en el indice 2 esta el control de newpassword
  check("SegurityCode")
    .isLength({ min: 6 ,max:6})
    .withMessage("El codigo debe tener 6 caracteres")
    .escape(),
];
