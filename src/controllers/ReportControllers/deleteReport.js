const { Report } = require('../../DB');
const { updateStatistic } = require('../../controllers/StatisticsControllers');
module.exports = async (id) => {
  try {
    const reportdeleted = await Report.destroy({ where: { id } });
    if (!reportdeleted) {
      throw new Error('Fallo la petición');
    }
    await updateStatistic('deleteReport');
    return reportdeleted;
  } catch (error) {
    throw new Error(`Error en el servidor 'deleteReport': ${error.message}`);
  }
};
