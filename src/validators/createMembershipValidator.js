const { check, body } = require('express-validator');

module.exports = [
  ///firstName
  check('name')
    .notEmpty()
    .withMessage('El campo de nombre no puede estar vacio.')
    .isAlpha('es-ES')
    .withMessage('El nombre no puede tener numeros ni caracteres especiales.')
    .isLength({ min: 3 })
    .withMessage('El nombre debe tener como minimo 3 letras.')
    .isLength({ max: 25 })
    .withMessage('El nombre no puede tener mas de 25 letras')
    .escape(),
  check('description')
    .notEmpty()
    .withMessage('El campo descripción no puede estar vacio.')
    .isString()
    .withMessage('La descipción debe ser un string')
    .escape(),
  body('price')
    .optional()
    .isNumeric()
    .withMessage('El precio debe ser un numero')
    .escape(),
  check('text1')
    .notEmpty()
    .withMessage('El campo text1 no puede estar vacío')
    .isString()
    .withMessage('text1 solo puede ser un string')
    .escape(),
  body('text2')
    .optional()
    .isString()
    .withMessage('text2 solo puede ser un string')
    .escape(),
  body('text3')
    .optional()
    .isString()
    .withMessage('text3 solo puede ser un string')
    .escape(),
  body('recurrenteId')
    .optional()
    .isString()
    .withMessage('recurrenteId solo puede ser un string')
    .escape(),
  body('checkout')
    .optional()
    .isString()
    .withMessage('checkout solo puede ser un string')
    .escape(),
  check('AdminPassword')
    .notEmpty()
    .withMessage('El campo AdminPassword es obligatorio')
    .escape(),
];
