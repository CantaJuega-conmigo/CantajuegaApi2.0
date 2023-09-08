const { User } = require("../../DB");
module.exports = async (id) => {
  ///a diferencia del getUsers , aqui solo enviamos informacion del usuario, es un detalle pero se ahorra memoria y recursos.
  try {
    const user = await User.findByPk(id, {
      attributes: {
        exclude: ["password"], // Excluye el atributo 'password' del resultado
      },
    });

    if (!user) {
      throw new Error("User not found,Auth failed");
    }
    return user;
  } catch (error) {
    throw error;
  }
};
