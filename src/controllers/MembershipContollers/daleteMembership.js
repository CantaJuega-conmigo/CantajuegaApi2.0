const { Membership } = require('../../DB');

module.exports = async (id) => {
    const deleteUser = await Membership.destroy({ where: { id: id } });
    return deleteUser;
}