const { Report } = require('../../DB');
module.exports = async (id) => {
  try {
    const report = await Report.findByPk(id, { include: 'Notification' });
    if (!report) {
      throw new Error('No se encontró el reporte');
    }
    return report;
  } catch (error) {
    throw new Error(`Error en el servidor 'getReport': ${error.message}`);
  }
};
