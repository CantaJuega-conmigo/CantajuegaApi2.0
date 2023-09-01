const { Report, User, Notification } = require("../../DB");
const { createNotification } = require("../NotificationControllers");
module.exports = async ({ UserId, Description }) => {
  const UserResult = await User.findByPk(UserId);
  const ReportCreated = await Report.create({
    Description,
    UserId: UserResult.id,
  });
  if (ReportCreated) {
    ///si el reporte fue creado, generamos la notificacion que se sera para el admin
    const generateNotification = await createNotification( "Report",ReportCreated);
    return ReportCreated;
  }else{
    throw new Error('Error when try to create the Report')
  }
};
