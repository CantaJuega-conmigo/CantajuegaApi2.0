const { Membership } = require('../../DB');

module.exports = async (id) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 659d343c416e1fb50cefc57a10eb3c832d7f53a7
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
<<<<<<< HEAD
=======
    const membershipfind = await Membership.findByPk(id);
    try {
        if (!membershipfind) throw new Error({ message: 'Membresita no encontrada' });
        if (membershipfind.deleted === false) {
            const delteMembership = await Membership.update({ deleted: true }, { where: { id, } });
        }
        if (membershipfind.deleted === true) {
            const delteMembership = await Membership.update({ deleted: false }, { where: { id, } });
        }
    } catch (error) {
        res.send({ message: e.error });
    }
};
>>>>>>> 318ed9c0ed576e5be7f60ec730c3f1116cc6cc26
=======
>>>>>>> 659d343c416e1fb50cefc57a10eb3c832d7f53a7
