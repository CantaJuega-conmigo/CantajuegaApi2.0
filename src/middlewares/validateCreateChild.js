const { validationResult } = require('express-validator');
const { ErrorResponse } = require('../utils');
module.exports = async (req, res, next) => {
  let errors;
  try {
    const validateErrors = validationResult(req);
    if (!validateErrors.isEmpty()) {
      errors = validateErrors;
      throw new Error('Error');
    }

    // Por si no funciona express-validator

    const { firstName, lastName, gender, birthDate, age } = req.body;
    const onlyLetters = /^[a-zA-ZÁÉÍÓÚáéíóúÑñüÜ]+$/;
    const onlyNumbers = /^\d+$/;
    const date = /^\d{4}-\d{2}-\d{2}$/;

    if (!firstName || !lastName)
      throw new Error('Los campos nombre y apellido son obligatorios');
    if (!onlyLetters.test(firstName) || !onlyLetters.test(lastName))
      throw new Error(
        'Nombre y apellido no pueden contener caracteres especiales'
      );
    if (gender && gender !== 'male' && gender && gender !== 'female')
      throw new Error('El genero solo puede ser masculino o femenino');
    if (birthDate && !date.test(birthDate))
      throw new Error(
        'La fecha de nacimiento debe ser una fecha válida en formato ISO (YYYY-MM-DD)'
      );
    if (age && !onlyNumbers.test(age))
      throw new Error('La edad debe ser entre 0 y 18 años');
    if ((age && age < 0) || (age && age > 18))
      throw new Error('La edad debe ser entre 0 y 18 años');
    next();
  } catch (error) {
    ErrorResponse(res, 500, error, errors);
  }
};
