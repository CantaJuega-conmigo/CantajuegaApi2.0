const { User } = require("../../DB");
const comparepassword = require("../../utils/comparepassword");
module.exports = async (email, newpassword, password, recover) => {
  try {
    if (!email || !newpassword) throw new Error("Error in server.");
    const user = await User.findOne({ where: { email: email } });
    if (!user) throw new Error("User not found");

    if (!recover) {
      if (!password) throw new Error("Error in server.");
      const passwordIsValid = await comparepassword(password, user.password);
      if (!passwordIsValid) throw new Error("La contraseña es incorrecta");
    }
    const resquest = await User.update(
      { password: newpassword },
      { where: { email: email } }
    );
    const resqueststatus = resquest[0] === 1;
    if (!resqueststatus) throw new Error("Fallo el cambio de contraseña");
    return true;
  } catch (error) {
    throw error;
  }
};
