const { check } = require("express-validator");
const emailValidator = require("./emailValidator");
const passwordValidator = require("./passwordValidator");

module.exports = [
  check("SegurityCode")
    .isLength({ min: 6 ,max:6})
    .withMessage("El codigo debe tener 6 caracteres")
    .escape(),
];
