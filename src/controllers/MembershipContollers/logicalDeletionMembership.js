const { Membership } = require('../../DB');

module.exports = async (id) => {
    const membership = await Membership.findByPk(id);
    if (membership.deleted === false) await Membership.update({ delete: true }, { where: { id, } });
    if (membership.deleted === true) await Membership.update({ delete: false }, { where: { id, } });
};