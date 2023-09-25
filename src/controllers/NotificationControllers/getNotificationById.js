const { Notification } = require('../../DB');
module.exports = async (id) => {
  try {
    const notification = await Notification.findByPk(id);
    return notification;
  } catch (error) {
    throw new Error(
      `Error en el servidor 'getNotificationById': ${error.message}`
    );
  }
};
