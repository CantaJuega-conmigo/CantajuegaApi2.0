const { User } = require("../../DB");
module.exports = async (email, code) => {
  try {
    const userexists = await User.findOne({ where: { email: email } });
    if (!userexists) throw new Error("El correo electronico no es valido.");
    const codecreated = await User.update(
      { OTPcode: code },
      { where: { email: email } }
    );

    if (codecreated[0] !== 1)
      throw new Error(
        "Error al generar el codigo para actualizar la contraseña"
      );
    return true;
  } catch (error) {
    throw error;
  }
};
