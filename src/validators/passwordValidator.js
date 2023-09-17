const { check } = require("express-validator");
module.exports= check("password")
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
.escape() //escape limpia el campo recibido para evitar scripts