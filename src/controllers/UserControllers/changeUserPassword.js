const { User } = require("../../DB");
const comparepassword = require("../../utils/comparepassword");
module.exports = async (email, newpassword, password, OTPcode) => {
  try {
    if (!email || !newpassword) throw new Error("Error in serveeeer.");
    const user = await User.findOne({ where: { email: email } });
    if (!user) throw new Error("User not found");

    if (!OTPcode) {
      if (!password) throw new Error("Error in server.");
      const passwordIsValid = await comparepassword(password, user.password);
      if (!passwordIsValid) throw new Error("La contraseña es incorrecta");
    } else {
      if (user.OTPcode !== OTPcode)
        throw new Error("El codigo ingresado no es correcto.");
    }

    const resquest = await User.update(
      { password: newpassword, OTPcode: null },
      { where: { email: email } }
    );
    const resqueststatus = resquest[0] === 1;
    if (!resqueststatus) throw new Error("Fallo el cambio de contraseña");
    return true;
  } catch (error) {
    throw error;
  }
};
