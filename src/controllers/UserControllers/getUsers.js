const { User, Child, Report, Membership } = require("../../DB");

module.exports = async (id) => {
  try {
    console.log(id);
    const allUsers = !id
      ? await User.findAll({
          include: [
            { model: Child, attributes: ["id", "firstName", "lastName"] },
            { model: Report },
            { model: Membership, attributes: ["id", "name"] },
          ],
          attributes: {
            exclude: ["password"],
          },
        })
      : await User.findByPk(id, {
          include: [
            { model: Child, attributes: ["id", "firstName", "lastName"] },
            { model: Report },
            { model: Membership, attributes: ["id", "name"] },
          ],
          attributes: {
            exclude: ["password"],
          },
        });

    // if (id&&!allUsers) {
    //   throw new Error('Sin usuario. La solicitud falló.');
    // }
    // if (!id&&!allUsers.length) {
    //   throw new Error('Sin usuarios. La solicitud falló.');
    // }
    return allUsers;
  } catch (error) {
    throw new Error(`Error en el servidor 'getUsers': ${error.message}`);
  }
};
