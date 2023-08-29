const { User } = require("../../DB");
const { createToken } = require("../../auth");
const comparepassword = require("../../utils/comparepassword");
module.exports = async ({ email, password }) => {
  const existUser = await User.findOne({ where: { email: email } });
  const isCorrectPassword = await comparepassword(password, existUser.password);

  if (!existUser || !isCorrectPassword) {
    throw new Error;
  } else {
    const Token = createToken(existUser, '5m')
    return {
      token: Token,
      user: existUser
    }
  }
};
