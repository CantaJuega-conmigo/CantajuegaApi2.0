const { Membership } = require('../../DB');

module.exports = async (id) => {
  try {
    const membership = await Membership.findByPk(id);
    if (membership.deleted === false)
      await Membership.update({ deleted: true }, { where: { id } });
    if (membership.deleted === true)
      await Membership.update({ deleted: false }, { where: { id } });
  } catch (error) {
    throw new Error(
      `Error en el servidor 'logicalDeletionMembership': ${error.message}`
    );
  }
};
