const { Notification } = require('../../DB');
module.exports = async () => {
  try {
    const allNotifications = await Notification.findAll({
      include: 'Report',
    });
    return allNotifications;
  } catch (error) {
    throw new Error(`Error en el servidor 'getNotification': ${error.message}`);
  }
};
