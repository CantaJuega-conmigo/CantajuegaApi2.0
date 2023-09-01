const { Membership } = require('../../DB');

module.exports = async () => {
    try {
        const allMembership = await Membership.findAll();
        return allMembership;
    } catch (e) {
        throw new Error('Error in the server get')
    }
}