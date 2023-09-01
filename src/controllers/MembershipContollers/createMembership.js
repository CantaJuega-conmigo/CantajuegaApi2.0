const { Membership } = require("../../DB");

module.exports = async ({ price, description, name, text1, text2, text3 }) => {
    try {
        const addMembership = await Membership.create({ price, description, name, text1, text2, text3 });
        console.log('ENTRE CONTRO');
        return addMembership;
    } catch (error) {
        throw new Error('Error in the server create');
    }
};