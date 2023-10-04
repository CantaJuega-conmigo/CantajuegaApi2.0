const { User } = require('../../DB');

module.exports = async (id) => {
  try {
    console.log(id);
    const allUsers = !id
      ? await User.findAll({
          include: ['Children', 'Membership', 'Reports'],
          attributes: {
            exclude: ['password'],
          },
        })
      : await User.findByPk(id, {
          include: ['Children', 'Membership', 'Reports'],
          attributes: {
            exclude: ['password'],
          },
        });
        
    if (id&&!allUsers) {
      throw new Error('Sin usuario. La solicitud falló.');
    }
    if (!id&&!allUsers.length) {
      throw new Error('Sin usuarios. La solicitud falló.');
    }
    return allUsers;
  } catch (error) {
    throw new Error(`Error en el servidor 'getUsers': ${error.message}`);
  }
};
