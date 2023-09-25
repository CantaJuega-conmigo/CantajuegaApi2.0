const { User } = require('../../DB');

module.exports = async (id) => {
  try {
    const user = await User.findByPk(id);
    console.log('ENTRE');
    if (user.deleted === false)
      await User.update({ deleted: true }, { where: { id } });
    if (user.deleted === true)
      await User.update({ deleted: false }, { where: { id } });
  } catch (error) {
    throw new Error(
      `Error en el servidor 'logicalDeletionUser': ${error.message}`
    );
  }
};
