module.exports = {
  hashpassword: require("./hashPasswords"),
  validatepassword: require('./comparepassword'),
  sendEmailLogin: require('./nodemailer'),
  validateProgressVideosAtributtes: require('./validateProgressVideosAtributtes'),
  validateProgressAtributtes: require('./validateProgressAtributtes'),
  getObjectAtributtes:require('./getObjectAtributtes'),
  ErrorResponse:require('./ErrorResponse'),
  response:require('./response'),
  getIncorrectAtributtesBody:require('./getIncorrectAtributtesBody')
};
