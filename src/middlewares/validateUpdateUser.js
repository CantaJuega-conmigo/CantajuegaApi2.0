const { validationResult } = require("express-validator");
const { ErrorResponse, getIncorrectAtributtesBody } = require("../utils");

module.exports = async (req, res, next) => {
  let errors;
  const {id}=req.params
  console.log(id);
  const { firstName, lastName, phone, password, image } = req.body;
  const correctAtributtes = [
    "lastName",
    "phone",
    "password",
    "firstName",
    "image",
  ];
  try {
    getIncorrectAtributtesBody(correctAtributtes, req, 6);

    const validateErrors = validationResult(req);
    const isAnyError = !validateErrors.isEmpty();
    if (isAnyError) {
      errors = validateErrors;
      throw new Error(
        "Server error."
      );
    }
    next();
  } catch (error) {
    ErrorResponse(res, 400, error, errors);
  }
};
