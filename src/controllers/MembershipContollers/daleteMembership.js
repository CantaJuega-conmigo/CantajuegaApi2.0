const { Membership } = require('../../DB');
const { updateStatistic } = require('../../controllers/StatisticsControllers');

module.exports = async (id) => {
  try {
    const deleteUser = await Membership.destroy({ where: { id: id } });
    await updateStatistic('deleteMembership');
    return deleteUser;
  } catch (error) {
    throw new Error(
      `Error en el servidor 'deleteMembership': ${error.message}`
    );
  }
};
