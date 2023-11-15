const { User } = require('../../DB');
module.exports = async (id) => {
  try {
    console.log('aqyi ');
    const user = await User.findByPk(id, {
      include: ['Children','Reports'],
      attributes: {
        exclude: ['password'], // Excluye el atributo 'password' del resultado
      },
    });

    if (!user) {
      throw new Error('Usuario no encontrado, autenticación fallida');
    }
    return user;
  } catch (error) {
    throw new Error(`Error en el servidor 'getAuthUser': ${error.message}`);
  }
};
