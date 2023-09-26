const { check } = require("express-validator");
module.exports= check("password")
.notEmpty().bail()
.withMessage("Password is necessary.")
.isLength({ min: 8 }).bail()
.withMessage("The password must be at least 8 characters.")
.isLength({ max: 25 }).bail()
.withMessage("The password is very long.")
.isStrongPassword({
  minLength: 8,
  minUppercase: 1,
  minNumbers: 1,
  minSymbols: 0,
}).bail()
.withMessage("Password must have at least one uppercase and one number")
.escape() //escape limpia el campo recibido para evitar scripts