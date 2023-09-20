const { Membership } = require('../../DB');

module.exports = async (id) => {
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