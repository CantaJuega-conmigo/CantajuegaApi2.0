const { Report, User, Notification } = require('../../DB');
const { createNotification } = require('../NotificationControllers');
const { updateStatistic } = require('../../controllers/StatisticsControllers');

module.exports = async ({ UserId, Description }) => {
  try {
    const UserResult = await User.findByPk(UserId);
    const ReportCreated = await Report.create({
      Description,
      UserId: UserResult.id,
    });
    if (ReportCreated) {
      updateStatistic('addReport');
      ///si el reporte fue creado, generamos la notificacion que se sera para el admin
      const generateNotification = await createNotification(
        'Report',
        ReportCreated
      );
      return ReportCreated;
    } else {
      throw new Error('Error al intentar crear el informe');
    }
  } catch (error) {
    throw new Error(`Error en el servidor 'createReport': ${error.message}`);
  }
};
