const { User } = require("../../DB");
const { createToken } = require("../../auth");
const comparepassword = require("../../utils/comparepassword");
module.exports = async ({ email, password }) => {
  const existUser = await User.findOne({ where: { email: email.toLowerCase() },include:['Children'] });
  const isCorrectPassword = await comparepassword(password, existUser.password);

  if (!existUser || !isCorrectPassword) {
    throw new Error ('Usuario o contraseña incorrecto.');
  } else {
    const Token = createToken(existUser, '1d')
    return {
      token: Token,
      user: existUser
    }
  }
};
