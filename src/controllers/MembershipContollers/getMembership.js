const { Membership } = require('../../DB');

module.exports = async () => {
  try {
    const allMembership = await Membership.findAll({ include: ['Users'] });
    return allMembership;
  } catch (error) {
    throw new Error(`Error en el servidor 'getMembership': ${error.message}`);
  }
};
