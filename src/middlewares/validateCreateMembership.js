const { ErrorResponse } = require('../utils');
const { validationResult } = require('express-validator');

module.exports = async (req, res, next) => {
  const {
    name,
    description,
    price,
    text1,
    text2,
    text3,
    recurrenteId,
    checkout,
    AdminPassword,
  } = req.body;
  let errors;
  try {
    const validateErrors = validationResult(req);
    if (!validateErrors.isEmpty()) {
      errors = validateErrors;
      throw new Error('Error');
    }

    //Si falla express validator usamos una capa de seguridad
    const onlyLetters = /^[a-zA-ZÁÉÍÓÚáéíóúÑñüÜ]+$/;
    const onlyNumbers = /^\d+$/;
    if (req.body.hasOwnProperty('deleted'))
      throw new Error('La propiedad deleted no esta permitida');
    if (!name || !description || !text1 || !AdminPassword)
      throw new Error(
        'Nombre, descripcion, text1 y AdminPassword son obligatorios'
      );
    if (!onlyLetters.test(name))
      throw new Error('El nombre no debe tener caracteres especiales');
    if (name.length < 3 || name.length > 25)
      throw new Error('El nombre debe contener minimo 3 letras y maximo 25');

    if (typeof description !== 'string' || description.trim() === '')
      throw new Error('El campo descripcion solo puede ser string');

    if (
      typeof text1 === 'string' ||
      typeof text2 === 'string' ||
      typeof text3 === 'string'
    ) {
      if (!text2 || !text3) {
        throw new Error('Los campos text solo pueden ser string');
      }
    }
    if (!price || !onlyNumbers.test(price))
      throw new Error('El precio solo puede ser un numero');
    next();
  } catch (error) {
    ErrorResponse(res, 500, error, errors);
  }
};
