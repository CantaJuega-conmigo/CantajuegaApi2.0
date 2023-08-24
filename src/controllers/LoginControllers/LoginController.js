const { User } = require("../../DB");
const comparepassword = require("../../utils/comparepassword");
module.exports = async ({ email, password }) => {
  const existUser = await User.findOne({ where: { email: email } });
  const isCorrectPassword = await comparepassword(password, existUser.password);

  if (!existUser || !isCorrectPassword) {
    throw new Error();
  } else {
    return {
      token: "any",
      user: existUser,
    };
  }
};
