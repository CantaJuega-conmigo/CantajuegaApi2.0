const { Membership } = require('../../DB');
const { updateStatistic } = require('../../controllers/StatisticsControllers');

module.exports = async (id) => {
  const deleteUser = await Membership.destroy({ where: { id: id } });
  await updateStatistic('deleteMembership');
  return deleteUser;
};
