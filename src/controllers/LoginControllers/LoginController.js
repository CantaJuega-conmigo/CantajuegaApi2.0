const { User } = require("../../DB");
const { createToken } = require("../../auth");
const comparepassword = require("../../utils/comparepassword");
module.exports = async ({ email, password }) => {
  try {
    const existUser = await User.findOne({
      where: { email: email.toLowerCase() },
      include: ["Children"],
    });
    if (!existUser) throw new Error("Usuario o contraseña incorrecto");
    const isCorrectPassword = await comparepassword(
      password,
      existUser.password
    );
    if (!isCorrectPassword) {
      throw new Error("Usuario o contraseña incorrecto.");
    }
    const Token = createToken(existUser, "1d");
    return {
      token: Token,
      user: existUser,
    };
  } catch (error) {
    throw error;
  }
};
