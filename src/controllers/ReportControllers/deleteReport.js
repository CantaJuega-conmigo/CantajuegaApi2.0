const { Report } = require('../../DB');
const { updateStatistic } = require('../../controllers/StatisticsControllers');
module.exports = async (id) => {
  try {
    const reportdeleted = await Report.destroy({ where: { id: id } });
    if (!reportdeleted) {
      throw new Error('Resquest failed.');
    }
    await updateStatistic('deleteReport');
    return reportdeleted;
  } catch (error) {
    throw error;
  }
};
