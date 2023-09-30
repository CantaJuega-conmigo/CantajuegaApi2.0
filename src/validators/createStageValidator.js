const { check, body } = require('express-validator');
module.exports = [
  ///firstName
  check('name')
    .notEmpty()
    .withMessage('El campo nombre no puede estar vacio.')
    .isLength({ min: 3 })
    .withMessage('El nombre debe tener como minimo 3 caracteres.')
    .isLength({ max: 25 })
    .withMessage('El nombre no puede tener mas de 25 caracteres.')
    .escape(),
  check('description')
    .notEmpty()
    .withMessage('El campo descripción no puede estar vacio.')
    .isLength({ min: 3 })
    .withMessage('La descripcion debe tener como minimo 3 caracteres.')
    .isLength({ max: 25 })
    .withMessage('La descripcion no puede tener mas de 25 caracteres.')
    .escape(),
  check('minAge')
    .notEmpty()
    .withMessage('El campo minAge no puede estar vacio')
    .isNumeric()
    .withMessage('minAge debe ser un número')
    .custom((value, { req }) => {
      const maxAge = req.body.maxAge;
      if (value > maxAge) {
        throw new Error('minAge no puede ser mayor que maxAge');
      }
      return true;
    }),
  check('maxAge')
    .notEmpty()
    .withMessage('El campo maxAge no puede estar vacio')
    .isNumeric()
    .withMessage('maxAge debe ser un número')
    .custom((value, { req }) => {
      const minAge = req.body.minAge;
      if (value < minAge) {
        throw new Error('maxAge no puede ser menor que minAge');
      }
      return true;
    }),
  body('content')
    .optional()
    .custom((value) => {
      if (typeof value !== 'object') {
        throw new Error('El campo content debe ser un objeto');
      }
      return true;
    }),
];
