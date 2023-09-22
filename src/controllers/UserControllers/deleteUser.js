const { User } = require('../../DB');
const { updateStatistic } = require('../../controllers/StatisticsControllers');
module.exports = async (id) => {
  try {
    const deleteUser = await User.destroy({ where: { id: id } });
    if (!deleteUser) {
      throw new Error('Falló la petición');
    }
    await updateStatistic('deleteUser');
    return deleteUser;
  } catch (error) {
    throw error;
  }
};
