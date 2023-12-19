const { User } = require("../../DB");
const updateAppSubscriptions = require("../PaymenControllers/updateAppSubscriptions");
module.exports = async (id) => {
  try {
    const user = await User.findByPk(id, {
      include: ["Children", "Reports", "Membership"],
      attributes: {
        exclude: ["password"], // Excluye el atributo 'password' del resultado
      },
    });

    if (!user) {
      throw new Error("Usuario no encontrado, autenticación fallida");
    }

    await updateAppSubscriptions(user);
    return user;
  } catch (error) {
    console.log(error);
  }
};
