const { check } = require("express-validator");
const emailValidator = require("./emailValidator");
const passwordValidator = require("./passwordValidator");
module.exports = [emailValidator, passwordValidator];
